'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

interface FaqSection {
  title: string
  faqs: FaqItem[]
}

interface Props {
  sections: FaqSection[]
}

export function FaqAccordion({ sections }: Props) {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section.title}>
          <h2
            className="text-xl font-bold mb-4 pb-2 border-b"
            style={{ color: 'var(--color-primary)', borderColor: 'var(--color-accent)' }}
          >
            {section.title}
          </h2>
          <div className="space-y-3">
            {section.faqs.map((faq, idx) => {
              const key = `${section.title}-${idx}`
              const isOpen = openIndex === key
              return (
                <div
                  key={key}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 text-xl font-light transition-transform duration-200"
                      style={{ color: 'var(--color-primary)', transform: isOpen ? 'rotate(45deg)' : 'none' }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
