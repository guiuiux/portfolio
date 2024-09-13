import React from 'react';

interface IconWrapperProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
  color?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ Icon, size = 18, color = "#FFFFFF" }) => {
  return (
    <div className="flex items-center justify-center border-[1px] hover:border-zinc-500 transition-colors duration-300 rounded-lg border-zinc-800 p-1.5 w-fit">
      <Icon className="" style={{ color, width: size, height: size }} />
    </div>
  );
};

export default IconWrapper;
