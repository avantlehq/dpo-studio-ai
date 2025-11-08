import { APP_VERSION } from '@/lib/version';
import { Search, Settings, LogOut, User, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface TopbarProps {
  onLogout?: () => void;
  selectedModule?: string;
  breadcrumb?: string[];
}

const MODULE_NAMES: Record<string, string> = {
  'dpia': 'DPIA Studio',
  'ropa': 'ROPA Studio', 
  'aiimpact': 'AI Impact',
  'admin': 'Admin Panel'
};

export function Topbar({ onLogout, selectedModule = 'dpia', breadcrumb = ['DPIA Studio'] }: TopbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setIsSearchFocused] = useState(false);

  return (
    <header className="h-34 border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60 flex-shrink-0">
      <div className="flex items-center justify-between h-full px-8">
        {/* Left section - Home button with version */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 hover:bg-accent/50 px-2 py-1 rounded transition-colors">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-lg">
                DPO<span className="text-primary">studio.ai</span>
              </h1>
              <div className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                v{APP_VERSION}
              </div>
            </div>
          </button>
        </div>

        {/* Center - Search */}
        <div className="flex-1 mx-8 flex items-center justify-center">
          <div className="w-96">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder={`Search in ${MODULE_NAMES[selectedModule] || 'DPO Studio'}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" />
          </button>
          
          <div className="flex items-center gap-1">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <User className="h-4 w-4" />
            </button>
            
            {onLogout && (
              <button 
                onClick={onLogout}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}