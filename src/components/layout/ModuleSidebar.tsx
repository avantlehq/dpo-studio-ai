export function ModuleSidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="h-10 px-4 flex items-center bg-muted/30" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
        <h2 className="text-sm font-medium">Modules</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <div className="p-2 rounded-md hover:bg-muted cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-sm">DPIA Studio</span>
          </div>
        </div>
        <div className="p-2 rounded-md hover:bg-muted cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm">ROPA Studio</span>
          </div>
        </div>
        <div className="p-2 rounded-md hover:bg-muted cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span className="text-sm">AI Impact</span>
          </div>
        </div>
        <div className="p-2 rounded-md hover:bg-muted cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <span className="text-sm">Admin Panel</span>
          </div>
        </div>
      </div>
    </div>
  );
}