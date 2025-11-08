import { APP_VERSION } from '@/lib/version';
import { Search, Settings, LogOut, User } from 'lucide-react';
import { useState } from 'react';

interface TopbarProps {
  onLogout?: () => void;
}

export function Topbar({ onLogout }: TopbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="h-14 border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60 flex-shrink-0">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-lg">
                DPO<span className="text-primary">studio.ai</span>
              </h1>
              <div className="text-xs text-muted-foreground">v{APP_VERSION} • VIEWPORT</div>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search GDPR projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
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