import React from 'react';
import { 
  Globe2, 
  Users2, 
  Calendar, 
  Mail, 
  FileText, 
  Database, 
  Headphones, 
  Settings
} from 'lucide-react';
import { PortalCard } from './components/PortalCard';
import { CenterLogo } from './components/CenterLogo';

const portals = [
  {
    title: "Company Website",
    description: "Our public-facing website and brand presence",
    icon: <Globe2 className="w-6 h-6 text-blue-600" />,
    link: "https://company.com",
    color: "border-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "HR Portal",
    description: "Employee resources and benefits",
    icon: <Users2 className="w-6 h-6 text-emerald-600" />,
    link: "https://hr.company.com",
    color: "border-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Calendar",
    description: "Events and scheduling",
    icon: <Calendar className="w-6 h-6 text-purple-600" />,
    link: "https://calendar.company.com",
    color: "border-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    title: "Webmail",
    description: "Corporate email platform",
    icon: <Mail className="w-6 h-6 text-red-600" />,
    link: "https://mail.company.com",
    color: "border-red-500",
    bgColor: "bg-red-50"
  },
  {
    title: "Documents",
    description: "Document management",
    icon: <FileText className="w-6 h-6 text-amber-600" />,
    link: "https://docs.company.com",
    color: "border-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    title: "CRM",
    description: "Customer management",
    icon: <Database className="w-6 h-6 text-indigo-600" />,
    link: "https://crm.company.com",
    color: "border-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Support",
    description: "IT help desk",
    icon: <Headphones className="w-6 h-6 text-pink-600" />,
    link: "https://support.company.com",
    color: "border-pink-500",
    bgColor: "bg-pink-50"
  },
  {
    title: "Admin",
    description: "System settings",
    icon: <Settings className="w-6 h-6 text-slate-600" />,
    link: "https://admin.company.com",
    color: "border-slate-500",
    bgColor: "bg-slate-50"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/50 to-purple-900/50" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="relative w-[900px] h-[900px] mx-auto">
          <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-3xl" />
          <CenterLogo />
          
          <div className="absolute inset-0">
            {portals.map((portal, index) => {
              const angle = (index * 360) / portals.length;
              const delay = index * 0.15;
              
              return (
                <PortalCard
                  key={index}
                  {...portal}
                  angle={angle}
                  delay={delay}
                />
              );
            })}
          </div>
        </div>

        <footer className="mt-16 text-center text-white/60 text-sm">
          <p>© 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}