
import React from 'react';
import { cn } from '@/lib/utils';

interface CreativeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const CreativeButton = ({ 
  children, 
  onClick, 
  className, 
  type = "button",
  disabled = false 
}: CreativeButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "creative-btn px-6 py-3 rounded-full font-display text-white text-lg tracking-wide",
        "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default CreativeButton;
