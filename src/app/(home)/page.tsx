import Link from 'next/link';
import { BookOpen, Box, Layers, Wrench, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Bamboo Base
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          基于 Gin 框架的 Go 语言微服务基础组件库
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs/guide"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            开始使用
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://github.com/bamboo-services/bamboo-base-go"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="text-lg font-semibold mb-2">快速启动</h3>
          <p className="text-sm text-muted-foreground">
            基于 Gin 框架，一键启动 Web 服务，开箱即用
          </p>
        </div>
        <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">🏗️</div>
          <h3 className="text-lg font-semibold mb-2">模块化设计</h3>
          <p className="text-sm text-muted-foreground">
            清晰的模块划分，按需使用，灵活组合
          </p>
        </div>
        <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-lg font-semibold mb-2">类型安全</h3>
          <p className="text-sm text-muted-foreground">
            完整的类型定义和错误处理，保障代码质量
          </p>
        </div>
      </div>

      {/* Quick Start */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">快速开始</h2>
        <div className="bg-secondary/50 rounded-lg p-6 border border-border">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">安装依赖</p>
            <code className="block bg-background px-4 py-2 rounded border border-border text-sm">
              go get github.com/bamboo-services/bamboo-base-go
            </code>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">创建服务</p>
            <pre className="bg-background px-4 py-3 rounded border border-border text-sm overflow-x-auto">
              <code>{`package main

import (
    "github.com/bamboo-services/bamboo-base-go/web"
    "github.com/bamboo-services/bamboo-base-go/web/result"
)

func main() {
    r := web.Default()
    r.GET("/ping", func(c *gin.Context) {
        result.Success(c, "pong")
    })
    r.Run(":8080")
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Documentation Categories */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">文档导航</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/docs/guide"
            className="group p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <BookOpen className="size-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  入门指南
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  快速了解 Bamboo Base 的核心概念和使用方法
                </p>
                <div className="text-sm text-primary flex items-center gap-1">
                  查看文档
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/docs/core"
            className="group p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Layers className="size-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  核心模块
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  架构设计、注册系统、统一响应、错误处理
                </p>
                <div className="text-sm text-primary flex items-center gap-1">
                  查看文档
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/docs/components"
            className="group p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Box className="size-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  功能组件
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  雪花算法、数据模型、日志系统、中间件
                </p>
                <div className="text-sm text-primary flex items-center gap-1">
                  查看文档
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/docs/utils"
            className="group p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 rounded-lg">
                <Wrench className="size-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  工具库
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  验证器、工具函数、环境配置、路由、钩子
                </p>
                <div className="text-sm text-primary flex items-center gap-1">
                  查看文档
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>
          由{' '}
          <a
            href="https://github.com/bamboo-services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Bamboo Services
          </a>{' '}
          团队维护
        </p>
      </div>
    </div>
  );
}
