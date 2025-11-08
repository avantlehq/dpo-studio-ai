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
    color: 'bg-blue-500',
    route: '/modules/dpia',
    status: 'active',
    description: 'Data Protection Impact Assessment wizard'
  },
  {
    id: 'ropa',
    name: 'ROPA Studio', 
    color: 'bg-green-500',
    route: '/modules/ropa',
    status: 'active',
    description: 'Records of Processing Activities management'
  },
  {
    id: 'aiimpact',
    name: 'AI Impact',
    color: 'bg-purple-500', 
    route: '/modules/aiimpact',
    status: 'beta',
    description: 'AI system compliance assessment'
  },
  {
    id: 'admin',
    name: 'Admin Panel',
    color: 'bg-gray-500',
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
      <div className="p-4 border-b">
        <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
          Modules
        </h2>
        <p className="text-xs text-muted-foreground">
          GDPR Compliance Tools
        </p>
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
            <div className="flex items-start gap-3">
              <div className={`w-3 h-3 rounded-full ${module.color} flex-shrink-0 mt-0.5`}></div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium truncate">{module.name}</span>
                  {module.status === 'beta' && (
                    <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">
                      BETA
                    </span>
                  )}
                  {module.status === 'coming_soon' && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                      SOON
                    </span>
                  )}
                </div>
                
                <p className={`text-xs text-muted-foreground transition-opacity duration-200 ${
                  hoveredModule === module.id || selectedModule === module.id
                    ? 'opacity-100' 
                    : 'opacity-70'
                }`}>
                  {module.description}
                </p>
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