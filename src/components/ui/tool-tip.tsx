'use client';

import { useState } from 'react';

interface Props {
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({ text, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isVisible && (
        <div className="mt-1 absolute z-10 px-2 py-1 bg-zinc-800 text-white text-sm rounded whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};
