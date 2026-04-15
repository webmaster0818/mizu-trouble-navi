interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, pageUrl }: { faqs: FAQ[]; pageUrl?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl md:text-3xl font-bold mb-8">よくある質問</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group border border-gray-200 rounded-2xl overflow-hidden">
            <summary className="flex items-center justify-between p-5 bg-white cursor-pointer hover:bg-bg-light transition">
              <span className="font-bold text-gray-800 pr-4">
                <span className="text-primary mr-2">Q.</span>
                {faq.question}
              </span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 bg-bg-light border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                <span className="text-cta font-bold mr-2">A.</span>
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
