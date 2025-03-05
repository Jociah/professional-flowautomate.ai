import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2">
        <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main circle background */}
          <circle cx="256" cy="256" r="256" fill="#FF1F1F"/>
          
          {/* Robot/AI head silhouette */}
          <rect x="156" y="136" width="200" height="240" rx="20" fill="white"/>
          
          {/* Robot eyes */}
          <circle cx="216" cy="206" r="20" fill="#FF1F1F"/>
          <circle cx="296" cy="206" r="20" fill="#FF1F1F"/>
          
          {/* Robot mouth/speaker */}
          <rect x="216" y="256" width="80" height="10" rx="5" fill="#FF1F1F"/>
          <rect x="216" y="276" width="80" height="10" rx="5" fill="#FF1F1F"/>
          <rect x="216" y="296" width="80" height="10" rx="5" fill="#FF1F1F"/>
          
          {/* Automation flow lines */}
          <path d="M116 256 L 156 256" stroke="white" strokeWidth="10" strokeLinecap="round"/>
          <path d="M356 256 L 396 256" stroke="white" strokeWidth="10" strokeLinecap="round"/>
          <path d="M116 216 L 116 296" stroke="white" strokeWidth="10" strokeLinecap="round"/>
          <path d="M396 216 L 396 296" stroke="white" strokeWidth="10" strokeLinecap="round"/>
          
          {/* Gear elements for automation */}
          <circle cx="116" cy="216" r="20" stroke="white" strokeWidth="10" fill="none"/>
          <circle cx="396" cy="296" r="20" stroke="white" strokeWidth="10" fill="none"/>
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-secondary-900">FlowAutomate.ai</span>
    </div>
  );
};

export default Logo;
