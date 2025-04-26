import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    theme: {
      navbar: true,
      toc: false,
    },
    display: 'hidden',
  },
  docs: {
    title: '📦 示例代码',
    display: 'hidden',
    type: 'page',
  },
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        新变化
        <TitleBadge />
      </span>
    ),
    type: 'page',
    display: 'hidden',
  },
  mathBasic: {
    title: (
      <span className="flex items-center leading-[1]">
        数学基础(通用)
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord
