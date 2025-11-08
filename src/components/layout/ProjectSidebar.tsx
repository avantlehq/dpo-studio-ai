export function ProjectSidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="h-10 px-4 flex items-center justify-between border-b bg-muted/30">
        <h2 className="text-sm font-medium">Projects</h2>
        <button className="text-xs text-muted-foreground hover:text-foreground">
          + New
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <div className="p-3 rounded-md border hover:bg-muted cursor-pointer">
          <div className="flex justify-between items-start mb-1">
            <span className="text-sm font-medium">E-commerce DPIA</span>
            <span className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
              Active
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Data protection assessment for online store
          </p>
          <div className="text-xs text-muted-foreground mt-1">
            Updated 2 days ago
          </div>
        </div>
        
        <div className="p-3 rounded-md border hover:bg-muted cursor-pointer">
          <div className="flex justify-between items-start mb-1">
            <span className="text-sm font-medium">HR System DPIA</span>
            <span className="text-xs text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
              Draft
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Employee data processing analysis
          </p>
          <div className="text-xs text-muted-foreground mt-1">
            Updated 1 week ago
          </div>
        </div>

        <div className="p-3 rounded-md border hover:bg-muted cursor-pointer">
          <div className="flex justify-between items-start mb-1">
            <span className="text-sm font-medium">CRM Integration</span>
            <span className="text-xs text-gray-600 bg-gray-50 px-1.5 py-0.5 rounded">
              Completed
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Customer data flow assessment
          </p>
          <div className="text-xs text-muted-foreground mt-1">
            Updated 2 weeks ago
          </div>
        </div>
      </div>
    </div>
  );
}