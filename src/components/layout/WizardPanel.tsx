export function WizardPanel() {
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-3 border-b bg-card">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            DPIA Wizard
          </h2>
          <div className="flex items-center gap-2">
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded">
              Save Draft
            </button>
            <button className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded transition-colors hover:bg-primary/90">
              Next Step
            </button>
          </div>
        </div>
        
        {/* Stepper */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
              1
            </div>
            <span className="text-sm font-medium">Data Mapping</span>
          </div>
          <div className="flex-1 h-px bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center">
              2
            </div>
            <span className="text-sm text-muted-foreground">Risk Assessment</span>
          </div>
          <div className="flex-1 h-px bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center">
              3
            </div>
            <span className="text-sm text-muted-foreground">Controls</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Step 1: Data Mapping</h3>
            <p className="text-sm text-muted-foreground">
              Identify and categorize the personal data being processed in your project.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Project Name
              </label>
              <input 
                type="text" 
                placeholder="Enter project name"
                className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Data Categories
              </label>
              <textarea 
                placeholder="Describe the types of personal data being processed..."
                className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[80px] resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Processing Purposes
              </label>
              <textarea 
                placeholder="Explain why this data is being processed..."
                className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[80px] resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}