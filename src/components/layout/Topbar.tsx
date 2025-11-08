interface TopbarProps {
  onLogout?: () => void;
}

export function Topbar({ onLogout }: TopbarProps) {
  return (
    <header className="h-12 bg-background flex items-center justify-between px-4" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">D</span>
          </div>
          <span className="font-semibold">DPO Studio</span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          / DPIA Studio / E-commerce DPIA
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-sm text-muted-foreground hover:text-foreground">
          Help
        </button>
        <button className="text-sm text-muted-foreground hover:text-foreground">
          Settings
        </button>
        {onLogout && (
          <button 
            onClick={onLogout}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Logout
          </button>
        )}
        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
          <span className="text-xs">U</span>
        </div>
      </div>
    </header>
  );
}