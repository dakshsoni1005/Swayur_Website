import React from 'react';
import { faqData } from '@/data/faq';

export const FAQJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => {
      let fullAnswer = item.answer;
      if (item.answerPoints) {
        fullAnswer += ' ' + item.answerPoints.join(' ');
      }
      return {
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: fullAnswer,
        },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
