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
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-lg">
                DPO<span className="text-primary">studio.ai</span>
              </h1>
              <div className="text-xs text-muted-foreground">v{APP_VERSION}</div>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search GDPR projects and modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-1">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <User className="h-5 w-5" />
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