import React from 'react'

const components = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-12 first:mt-0" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-xl font-bold text-gray-900 mb-4 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  a: (props: any) => (
    <a 
      className="text-green-600 hover:text-green-700 hover:underline transition-colors" 
      {...props} 
    />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-gray-700" {...props} />
  ),
  code: (props: any) => (
    <code 
      className="bg-gray-500 text-gray-800 px-2 py-1 rounded text-sm font-mono" 
      {...props} 
    />
  ),
  pre: (props: any) => (
    <pre 
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6" 
      {...props} 
    />
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-green-500 pl-4 italic text-gray-600 mb-6" 
      {...props} 
    />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="text-gray-700" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-gray-200 my-8" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border border-gray-200 rounded-lg" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="bg-gray-50 border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-gray-200 px-4 py-2 text-gray-700" {...props} />
  ),
}

export default components
