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
      <div className="flex h-20 items-center justify-between px-8 py-4">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-xl">
                DPO<span className="text-primary">studio.ai</span>
              </h1>
              <div className="text-sm text-muted-foreground">v{APP_VERSION} • LARGE</div>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              placeholder="Search GDPR projects and modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-12 pr-6 py-3 text-base bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-2">
            <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
              <User className="h-6 w-6" />
            </button>
            
            {onLogout && (
              <button 
                onClick={onLogout}
                className="p-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}