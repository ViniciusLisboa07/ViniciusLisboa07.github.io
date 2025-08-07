"use client"

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  if (typeof children === 'string') {
    return (
      <pre className={`bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 ${className || ''}`}>
        <code className="text-sm">{children}</code>
      </pre>
    )
  }

  return (
    <pre className={`bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 ${className || ''}`}>
      {children}
    </pre>
  )
}
