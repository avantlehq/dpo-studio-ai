export function WizardPanel() {
  return (
    <div className="h-full flex flex-col">
      <div className="h-10 px-4 flex items-center justify-between bg-muted/30" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
        <h2 className="text-sm font-medium">DPIA Wizard</h2>
        <div className="flex items-center space-x-2">
          <button className="text-xs text-muted-foreground hover:text-foreground">
            Save Draft
          </button>
          <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
            Next Step
          </button>
        </div>
      </div>
      
      {/* Stepper */}
      <div className="px-4 py-3" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              1
            </div>
            <span className="text-sm font-medium">Data Mapping</span>
          </div>
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-xs flex items-center justify-center">
              2
            </div>
            <span className="text-sm text-muted-foreground">Risk Assessment</span>
          </div>
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-xs flex items-center justify-center">
              3
            </div>
            <span className="text-sm text-muted-foreground">Controls</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Step 1: Data Mapping</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Identify and categorize the personal data being processed in your project.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Project Name
              </label>
              <input 
                type="text" 
                placeholder="Enter project name"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Data Categories
              </label>
              <textarea 
                placeholder="Describe the types of personal data being processed..."
                className="w-full p-2 border rounded-md h-20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Processing Purposes
              </label>
              <textarea 
                placeholder="Explain why this data is being processed..."
                className="w-full p-2 border rounded-md h-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}