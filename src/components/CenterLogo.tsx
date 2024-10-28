import React from 'react';
import { Command } from 'lucide-react';

export const CenterLogo: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="bg-white/95 p-8 rounded-full shadow-xl animate-float backdrop-blur-xl relative">
          <Command className="w-16 h-16 text-blue-600" />
        </div>
      </div>
      <h1 className="mt-6 text-3xl font-bold text-white text-shadow-lg">Company Portal</h1>
      <p className="mt-2 text-white/80">Select a destination to begin</p>
    </div>
  );
};