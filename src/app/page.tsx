'use client';

import { useState, useEffect } from 'react';
import { APP_VERSION } from '@/lib/version';
import { Topbar } from '../components/layout/Topbar';
import { ModuleSidebar } from '../components/layout/ModuleSidebar';
import { ProjectSidebar } from '../components/layout/ProjectSidebar';
import { WizardPanel } from '../components/layout/WizardPanel';
import { ChatPanel } from '../components/layout/ChatPanel';
import { Footer } from '../components/layout/Footer';

interface Module {
  id: string;
  name: string;
  color: string;
  route?: string;
  status: 'active' | 'beta' | 'coming_soon';
  description: string;
}

interface Project {
  id: string;
  name: string;
  type: 'dpia' | 'ropa' | 'ai_impact';
  status: 'active' | 'draft' | 'completed' | 'review';
  description: string;
  lastUpdated: string;
  assignee: string;
  progress: number;
}

type ViewMode = 'login' | 'app';

// Demo passwords for different access levels
const DEMO_PASSWORDS = {
  '123': 'demo',
  'gdpr-preview': 'preview', 
  'admin-access': 'admin'
};

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>('login');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('dpia');
  const [currentView] = useState<string>('wizard');
  const [breadcrumb, setBreadcrumb] = useState<string[]>(['DPIA Studio']);
  const [selectedProject, setSelectedProject] = useState<string>('');

  // Module names defined inline where needed

  useEffect(() => {
    // Check if user already has access from previous session
    const savedAccess = localStorage.getItem('dpostudio-access');
    if (savedAccess && Object.values(DEMO_PASSWORDS).includes(savedAccess)) {
      setViewMode('app');
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setIsLoading(true);
    setError('');
    
    try {
      // Simulate auth delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const accessLevel = DEMO_PASSWORDS[password as keyof typeof DEMO_PASSWORDS];
      if (accessLevel) {
        localStorage.setItem('dpostudio-access', accessLevel);
        setViewMode('app');
        setPassword('');
      } else {
        setError('Invalid password. Contact admin for access credentials.');
      }
    } catch {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('dpostudio-access');
    setViewMode('login');
  };

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module.id);
    setBreadcrumb([module.name]);
    setSelectedProject(''); // Reset project selection when changing modules
    // Don't navigate away, keep the 4-column layout
    // Module content will be shown in the wizard panel
    console.log('Current view:', currentView); // Use currentView to avoid unused variable warning
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project.id);
    setBreadcrumb([getModuleName(selectedModule), project.name]);
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

  if (viewMode === 'login') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 flex items-center justify-center px-4">
        <div className="bg-white/80 backdrop-blur border border-border/50 rounded-2xl p-8 w-80 max-w-sm shadow-xl">
          <div className="text-center mb-8">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-primary-foreground font-bold text-xl">D</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              DPO<span className="text-primary">studio.ai</span>
              <span className="text-sm font-normal text-muted-foreground ml-2">v{APP_VERSION}</span>
            </h1>
            <p className="text-muted-foreground">European GDPR Compliance Platform</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Access Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your access password"
                className="w-full p-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                disabled={isLoading}
              />
              <p className="text-xs text-muted-foreground">
                Demo access available. Contact support for production credentials.
              </p>
            </div>

            {error && (
              <p className="text-destructive text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading || !password.trim()}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isLoading ? 'Authenticating...' : 'Access DPO Studio'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              🔒 Secure access to GDPR compliance tools.<br/>
              Built with Privacy by Design • Powered by Avantle.ai
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-background" style={{ height: '100vh', width: '100vw' }}>
      <Topbar onLogout={handleLogout} selectedModule={selectedModule} breadcrumb={breadcrumb} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Layout: 4 columns - like TextNotepad */}
        <div className="flex w-full h-full">
          {/* C1: Modules */}
          <div className="w-96 bg-card border-r flex-shrink-0">
            <ModuleSidebar onModuleSelect={handleModuleSelect} selectedModule={selectedModule} />
          </div>
          
          {/* C2: Projects */}
          <div className="w-80 bg-card border-r flex-shrink-0">
            <ProjectSidebar 
              selectedModule={selectedModule} 
              onProjectSelect={handleProjectSelect}
              selectedProject={selectedProject}
            />
          </div>
          
          {/* C3: Wizard - takes remaining space */}
          <div className="flex-1 bg-card min-w-0">
            <WizardPanel selectedModule={selectedModule} selectedProject={selectedProject} />
          </div>
          
          {/* C4: Chat */}
          <div className="w-96 bg-card border-l flex-shrink-0">
            <ChatPanel />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
