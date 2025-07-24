import React from 'react';

const partners = [
  { id: 1, name: 'Partenaire1', logoSrc: '/img/imgMatis.jpg', url: 'https://partenaire1.com' },
  { id: 2, name: 'Partenaire2', logoSrc: '/tmalogo.png', url: 'https://partenaire2.com' },
  { id: 3, name: 'Partenaire1', logoSrc: '/img/imgMatis.jpg', url: 'https://partenaire1.com' },
  { id: 4, name: 'Partenaire2', logoSrc: '/tmalogo.png', url: 'https://partenaire2.com' },
  { id: 5, name: 'Partenaire1', logoSrc: '/img/imgMatis.jpg', url: 'https://partenaire1.com' },
  { id: 6, name: 'Partenaire2', logoSrc: '/tmalogo.png', url: 'https://partenaire2.com' },
  { id: 7, name: 'Partenaire1', logoSrc: '/img/imgMatis.jpg', url: 'https://partenaire1.com' },
  { id: 8, name: 'Partenaire2', logoSrc: '/tmalogo.png', url: 'https://partenaire2.com' },
  
];


const PartnerLogosMarquee = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 h-24 relative">
      <div className="flex animate-marquee whitespace-nowrap" style={{ GapRight: '100px' }}>
        {[...partners, ...partners].map((partner, index) => (
          <a
            key={partner.id + '-' + index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={partner.logoSrc}
              alt={partner.name}
              className="h-16 w-auto object-contain mr-60"
            />
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PartnerLogosMarquee;
