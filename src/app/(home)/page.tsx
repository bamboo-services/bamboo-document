import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

          <div className="flex items-center justify-between p-4 border border-border rounded-lg opacity-50">
            <div>
              <h3 className="font-medium">bamboo-base-java</h3>
              <p className="text-sm text-muted-foreground">Java 组件库</p>
            </div>
            <span className="text-xs text-muted-foreground">规划中</span>
          </div>

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
