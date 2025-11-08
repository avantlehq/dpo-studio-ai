'use client';

import { useState } from 'react';

interface Module {
  id: string;
  name: string;
  color: string;
  route?: string;
  status: 'active' | 'beta' | 'coming_soon';
  description: string;
}

interface ModuleSidebarProps {
  onModuleSelect?: (module: Module) => void;
  selectedModule?: string;
}

const MODULES: Module[] = [
  {
    id: 'dpia',
    name: 'DPIA Studio',
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    route: '/modules/dpia',
    status: 'active',
    description: 'Data Protection Impact Assessment wizard'
  },
  {
    id: 'ropa',
    name: 'ROPA Studio', 
    color: 'bg-gradient-to-r from-green-500 to-green-600',
    route: '/modules/ropa',
    status: 'active',
    description: 'Records of Processing Activities management'
  },
  {
    id: 'aiimpact',
    name: 'AI Impact',
    color: 'bg-gradient-to-r from-purple-500 to-purple-600', 
    route: '/modules/aiimpact',
    status: 'beta',
    description: 'AI system compliance assessment'
  },
  {
    id: 'admin',
    name: 'Admin Panel',
    color: 'bg-gradient-to-r from-gray-500 to-gray-600',
    route: '/admin',
    status: 'active',
    description: 'Platform administration and settings'
  }
];

export function ModuleSidebar({ onModuleSelect, selectedModule }: ModuleSidebarProps) {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  const handleModuleClick = (module: Module) => {
    if (module.route) {
      window.location.href = module.route;
    }
    onModuleSelect?.(module);
  };

  return (
    <div className="h-full flex flex-col bg-muted/20">
      <div className="p-3 border-b bg-gradient-to-r from-orange-50 to-amber-50">
        <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
          Modules
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {MODULES.map((module) => (
          <div
            key={module.id}
            className={`group relative rounded-lg p-3 cursor-pointer transition-all duration-200 ${
              selectedModule === module.id 
                ? 'bg-accent border border-border shadow-sm' 
                : 'hover:bg-accent/50'
            }`}
            onClick={() => handleModuleClick(module)}
            onMouseEnter={() => setHoveredModule(module.id)}
            onMouseLeave={() => setHoveredModule(null)}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${module.color} flex-shrink-0 shadow-sm`}></div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium truncate">{module.name}</span>
                  {module.status === 'beta' && (
                    <span className="text-xs bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 px-1.5 py-0.5 rounded-full font-medium">
                      BETA
                    </span>
                  )}
                  {module.status === 'coming_soon' && (
                    <span className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">
                      SOON
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {selectedModule === module.id && (
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary rounded-r"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          <span className="font-medium">Active Modules:</span> {MODULES.filter(m => m.status === 'active').length}
        </div>
      </div>
    </div>
  );
}