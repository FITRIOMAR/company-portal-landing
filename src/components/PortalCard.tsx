import React from 'react';

interface PortalCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
  bgColor: string;
  angle: number;
  delay: number;
}

export const PortalCard: React.FC<PortalCardProps> = ({ 
  title, 
  description, 
  icon, 
  link, 
  color, 
  bgColor,
  angle,
  delay 
}) => {
  const radius = 340; // Distance from center
  const radian = (angle - 90) * (Math.PI / 180); // Convert angle to radian and offset by 90 degrees
  const x = radius * Math.cos(radian);
  const y = radius * Math.sin(radian);

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div
        className="transition-transform duration-500 hover:scale-105"
        style={{
          transform: `rotate(0deg)`,
          opacity: 0,
          animation: `fadeIn 0.8s ease-out forwards ${delay}s`,
        }}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-64 p-6 rounded-2xl shadow-lg transition-all duration-300 
            hover:shadow-2xl hover:-translate-y-1 border-2 ${color} 
            backdrop-blur-xl bg-white/90 hover:bg-white group`}
        >
          <div className={`flex items-center justify-between mb-4`}>
            <div className={`p-3 rounded-xl ${bgColor} group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
            <div className="text-gray-400 text-lg group-hover:translate-x-2 transition-transform duration-300">→</div>
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </a>
      </div>
    </div>
  );
};