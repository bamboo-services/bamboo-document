import { ArrowRight, Bot } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">竹简文档</h1>
        <p className="text-lg text-muted-foreground">
          Bamboo 服务组件库文档中心
        </p>
      </div>

      {/* Quick Start */}
      <div className="mb-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
        <h2 className="text-xl font-semibold mb-2">快速开始</h2>
        <p className="text-muted-foreground mb-4">
          竹简库提供了 Go 和 Java 两种语言的基础组件，帮助你快速构建可靠的后端服务。
          选择你熟悉的语言，跟随入门指南开始使用吧！
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs/bamboo-base-go/quick-start"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Go 入门指南
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/docs/bamboo-base-java/quick-start"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Java 入门指南
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* AI Integration */}
      <div className="mb-12 p-6 border border-border rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <Bot className="size-5 text-primary" />
          <h2 className="text-xl font-semibold">AI 友好</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          本站支持 LLM 标准协议，你可以直接让 AI 助手（如 Claude、ChatGPT）读取文档内容。
        </p>
        <div className="space-y-3">
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium mb-1">获取文档索引：</p>
            <code className="text-sm text-primary">/llms.txt</code>
          </div>
          <p className="text-sm text-muted-foreground">
            每个文档页面支持单页 MDX 模式，在 URL 后加 <code className="text-primary">.mdx</code> 即可获取原始内容，
            例如 <code className="text-primary">/docs/bamboo-base-java/quick-start.mdx</code>
          </p>
        </div>
      </div>

      {/* Libraries */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">组件库</h2>
        <div className="space-y-3">
          <Link
            href="/docs/bamboo-base-go"
            className="group flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors"
          >
            <div>
              <h3 className="font-medium group-hover:text-primary transition-colors">
                筱工具 (Golang)
              </h3>
              <p className="text-sm text-muted-foreground">
                Go 语言基础组件库，基于 Gin 框架
              </p>
            </div>
            <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/docs/bamboo-base-java"
            className="group flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors"
          >
            <div>
              <h3 className="font-medium group-hover:text-primary transition-colors">
                筱工具 (Java)
              </h3>
              <p className="text-sm text-muted-foreground">
                Java 语言基础组件库，基于 Spring Boot 3
              </p>
            </div>
            <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg opacity-50">
            <div>
              <h3 className="font-medium">bamboo-base-ts</h3>
              <p className="text-sm text-muted-foreground">TypeScript 组件库</p>
            </div>
            <span className="text-xs text-muted-foreground">规划中</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">快速链接</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/docs/guide"
            className="p-3 border border-border rounded-lg hover:border-primary transition-colors text-sm"
          >
            入门指南
          </Link>
          <a
            href="https://github.com/bamboo-services"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-lg hover:border-primary transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-border text-sm text-muted-foreground">
        <p>
          由{' '}
          <a
            href="https://www.x-lf.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            筱锋xiao_lfeng
          </a>{' '}
          维护
        </p>
      </div>
    </div>
  );
}
