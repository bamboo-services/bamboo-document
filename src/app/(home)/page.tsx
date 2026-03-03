import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AIPromptCard } from './ai-prompt-card';

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
      <AIPromptCard />

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
