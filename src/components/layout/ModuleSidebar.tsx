export function ModuleSidebar() {
  return (
    <div className="h-full flex flex-col bg-muted/20">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
          Modules
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        <div className="group relative rounded-lg p-2 cursor-pointer transition-colors hover:bg-accent">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
            <span className="text-sm font-medium">DPIA Studio</span>
          </div>
        </div>
        <div className="group relative rounded-lg p-2 cursor-pointer transition-colors hover:bg-accent">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
            <span className="text-sm font-medium">ROPA Studio</span>
          </div>
        </div>
        <div className="group relative rounded-lg p-2 cursor-pointer transition-colors hover:bg-accent">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
            <span className="text-sm font-medium">AI Impact</span>
          </div>
        </div>
        <div className="group relative rounded-lg p-2 cursor-pointer transition-colors hover:bg-accent">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0"></div>
            <span className="text-sm font-medium">Admin Panel</span>
          </div>
        </div>
      </div>
    </div>
  );
}