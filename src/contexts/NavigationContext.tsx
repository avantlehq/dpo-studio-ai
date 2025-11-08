'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Module {
  id: string;
  name: string;
  color: string;
  route?: string;
  status: 'active' | 'beta' | 'coming_soon';
  description: string;
}

interface NavigationState {
  selectedModule: string;
  currentView: string;
  breadcrumb: string[];
}

interface NavigationContextType {
  state: NavigationState;
  selectModule: (moduleId: string) => void;
  setView: (view: string) => void;
  setBreadcrumb: (breadcrumb: string[]) => void;
  navigateToModule: (module: Module) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NavigationState>({
    selectedModule: 'dpia',
    currentView: 'wizard',
    breadcrumb: ['DPIA Studio']
  });

  const selectModule = (moduleId: string) => {
    setState(prev => ({ 
      ...prev, 
      selectedModule: moduleId,
      breadcrumb: [getModuleName(moduleId)]
    }));
  };

  const setView = (view: string) => {
    setState(prev => ({ ...prev, currentView: view }));
  };

  const setBreadcrumb = (breadcrumb: string[]) => {
    setState(prev => ({ ...prev, breadcrumb }));
  };

  const navigateToModule = (module: Module) => {
    selectModule(module.id);
    setView('wizard');
    setBreadcrumb([module.name]);
  };

  const getModuleName = (moduleId: string): string => {
    const moduleNames: Record<string, string> = {
      'dpia': 'DPIA Studio',
      'ropa': 'ROPA Studio', 
      'aiimpact': 'AI Impact',
      'admin': 'Admin Panel'
    };
    return moduleNames[moduleId] || 'Unknown Module';
  };

  return (
    <NavigationContext.Provider 
      value={{ 
        state, 
        selectModule, 
        setView, 
        setBreadcrumb, 
        navigateToModule 
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}