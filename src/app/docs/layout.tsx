import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      githubUrl='https://github.com/bamboo-services/bamboo-base-go'
      tabMode='top'
      sidebar={{
        tabs: [
          {
            title: 'Components',
            description: 'Hello World!',
            // active for `/docs/components` and sub routes like `/docs/components/button`
            url: '/docs/components',
            // optionally, you can specify a set of urls which activates the item
            // urls: new Set(['/docs/test', '/docs/components']),
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}
