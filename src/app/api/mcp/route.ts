import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import { registerTools } from '@/lib/mcp/tools';

export const runtime = 'nodejs';

// ── CORS Headers ──────────────────────────────────────────────────────────────

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers':
    'Content-Type, Mcp-Session-Id, MCP-Protocol-Version, Accept',
  'Access-Control-Expose-Headers': 'Mcp-Session-Id',
};

// ── Session Management ────────────────────────────────────────────────────────

interface Session {
  server: McpServer;
  transport: WebStandardStreamableHTTPServerTransport;
}

// Use global to ensure Map persists across hot reloads / request contexts
declare global {
  // eslint-disable-next-line no-var
  var __mcpSessions: Map<string, Session> | undefined;
}

const sessions: Map<string, Session> =
  globalThis.__mcpSessions ?? new Map<string, Session>();
if (!globalThis.__mcpSessions) {
  globalThis.__mcpSessions = sessions;
}

function createMcpServer(): McpServer {
  // Don't pass capabilities - let SDK auto-detect from registered tools
  const server = new McpServer({
    name: 'BambooDocument',
    version: '0.1.0',
  });
  registerTools(server);
  return server;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function withCors(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(CORS_HEADERS)) {
    headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// ── Route Handlers ────────────────────────────────────────────────────────────

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(request: Request): Promise<Response> {
  try {
    const sessionId = request.headers.get('mcp-session-id');

    // Check for existing session
    if (sessionId && sessions.has(sessionId)) {
      const { transport } = sessions.get(sessionId)!;
      const response = await transport.handleRequest(request);
      return withCors(response);
    }

    // Create new session for initialize request or unknown session
    const server = createMcpServer();
    const transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: () => crypto.randomUUID(),
      onsessioninitialized: (id: string) => {
        // Store session when initialized (called during handleRequest)
        sessions.set(id, { server, transport });
      },
      onsessionclosed: (id: string) => {
        sessions.delete(id);
      },
    });

    await server.connect(transport);

    // Process the request
    const response = await transport.handleRequest(request);

    // Also store session after handleRequest as backup (using transport.sessionId)
    if (transport.sessionId && !sessions.has(transport.sessionId)) {
      sessions.set(transport.sessionId, { server, transport });
    }

    return withCors(response);
  } catch (error) {
    console.error('[MCP] POST error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }
}

export async function GET(request: Request): Promise<Response> {
  try {
    const sessionId = request.headers.get('mcp-session-id');
    if (!sessionId || !sessions.has(sessionId)) {
      return new Response('Session not found', {
        status: 404,
        headers: CORS_HEADERS,
      });
    }
    const { transport } = sessions.get(sessionId)!;
    const response = await transport.handleRequest(request);
    return withCors(response);
  } catch (error) {
    console.error('[MCP] GET error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }
}

export async function DELETE(request: Request): Promise<Response> {
  try {
    const sessionId = request.headers.get('mcp-session-id');
    if (!sessionId || !sessions.has(sessionId)) {
      return new Response('Session not found', {
        status: 404,
        headers: CORS_HEADERS,
      });
    }
    const { transport } = sessions.get(sessionId)!;
    const response = await transport.handleRequest(request);
    return withCors(response);
  } catch (error) {
    console.error('[MCP] DELETE error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }
}
