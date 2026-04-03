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

const sessions = new Map<string, Session>();

function createMcpServer(): McpServer {
  const server = new McpServer(
    { name: 'BambooDocument', version: '0.1.0' },
    { capabilities: {} },
  );
  registerTools(server);
  return server;
}

async function getOrCreateSession(
  sessionId: string | null,
): Promise<{ session: Session; isNew: boolean }> {
  if (sessionId && sessions.has(sessionId)) {
    return { session: sessions.get(sessionId)!, isNew: false };
  }

  const server = createMcpServer();
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: () => crypto.randomUUID(),
    onsessioninitialized: (id: string) => {
      sessions.set(id, { server, transport });
    },
    onsessionclosed: (id: string) => {
      sessions.delete(id);
    },
  });

  await server.connect(transport);
  return { session: { server, transport }, isNew: true };
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
    const { session } = await getOrCreateSession(sessionId);
    const response = await session.transport.handleRequest(request);
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
