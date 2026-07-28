import React from 'react';

export const IslamicCardBorder: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cardGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#B8860B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#976E07" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Main geometric outline with clipped corners */}
      <polygon
        points="
          5,2 
          95,2 
          98,5 
          98,95 
          95,98 
          5,98 
          2,95 
          2,5
        "
        fill="none"
        stroke="url(#cardGold)"
        strokeWidth="0.2"
        vectorEffect="non-scaling-stroke"
      />

      {/* Inner geometric lattice outline */}
      <polygon
        points="
          6,3.5 
          94,3.5 
          96.5,6 
          96.5,94 
          94,96.5 
          6,96.5 
          3.5,94 
          3.5,6
        "
        fill="none"
        stroke="rgba(212,175,55,0.3)"
        strokeWidth="0.1"
        strokeDasharray="1 1"
        vectorEffect="non-scaling-stroke"
      />

      {/* Top Mihrab Arch Silhouette */}
      <path
        d="M 35 2 L 40 5 L 50 1.5 L 60 5 L 65 2"
        fill="none"
        stroke="url(#cardGold)"
        strokeWidth="0.25"
        vectorEffect="non-scaling-stroke"
      />
      
      {/* Bottom Mihrab Arch Silhouette */}
      <path
        d="M 35 98 L 40 95 L 50 98.5 L 60 95 L 65 98"
        fill="none"
        stroke="url(#cardGold)"
        strokeWidth="0.25"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
