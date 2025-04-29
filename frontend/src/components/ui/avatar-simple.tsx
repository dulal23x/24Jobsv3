import React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({
  src,
  alt = "User avatar",
  initials,
  size = 'md',
  className = "",
  ...props
}: AvatarProps) {
  const sizeClass = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-16 h-16 text-lg",
  }[size];

  const renderContent = () => {
    if (src) {
      return (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
      );
    }

    return (
      <div className="flex items-center justify-center w-full h-full bg-blue-500 text-white font-medium rounded-full">
        {initials || (alt ? alt.charAt(0).toUpperCase() : "U")}
      </div>
    );
  };

  return (
    <div
      className={`relative overflow-hidden rounded-full ${sizeClass} ${className}`}
      {...props}
    >
      {renderContent()}
    </div>
  );
}

export const AvatarGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`flex -space-x-2 ${className}`}>
      {children}
    </div>
  );
}; 