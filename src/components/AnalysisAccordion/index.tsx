'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

interface AnalysisAccordionProps {
  children: React.ReactNode
  className?: string
  title?: string
}

const AnalysisAccordion = ({ 
  children, 
  className, 
  title = "解析" 
}: AnalysisAccordionProps) => {
  return (
    <Accordion type="single" collapsible className={cn("w-full border-l-4 border-l-gray-300 pl-2 my-4", className)}>
      <AccordionItem value="analysis" className="border-none">
        <AccordionTrigger className="px-2 py-1 text-base font-medium hover:no-underline [&[data-state=open]>span>svg]:rotate-90">
          <span className="flex items-center gap-1 text-gray-700">
            <ChevronRight className="h-4 w-4 transition-transform duration-200" />
            {title}(点击展开)
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-2 text-sm">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AnalysisAccordion 