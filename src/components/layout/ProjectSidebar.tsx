export function ProjectSidebar() {
  return (
    <div className="h-full flex flex-col bg-muted/20">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Projects
          </h2>
          <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            + New
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        <div className="group relative rounded-lg p-3 cursor-pointer transition-colors hover:bg-accent border-l-2 border-l-green-500">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium">E-commerce DPIA</span>
            <span className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
              Active
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-1">
            Data protection assessment for online store
          </p>
          <div className="text-xs text-muted-foreground">
            Updated 2 days ago
          </div>
        </div>
        
        <div className="group relative rounded-lg p-3 cursor-pointer transition-colors hover:bg-accent border-l-2 border-l-orange-500">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium">HR System DPIA</span>
            <span className="text-xs text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
              Draft
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-1">
            Employee data processing analysis
          </p>
          <div className="text-xs text-muted-foreground">
            Updated 1 week ago
          </div>
        </div>

        <div className="group relative rounded-lg p-3 cursor-pointer transition-colors hover:bg-accent border-l-2 border-l-gray-500">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium">CRM Integration</span>
            <span className="text-xs text-gray-600 bg-gray-50 px-1.5 py-0.5 rounded">
              Completed
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-1">
            Customer data flow assessment
          </p>
          <div className="text-xs text-muted-foreground">
            Updated 2 weeks ago
          </div>
        </div>
      </div>
    </div>
  );
}