export function ChatPanel() {
  return (
    <div className="h-full flex flex-col bg-muted/20">
      <div className="p-2 border-b bg-gradient-to-r from-violet-50 to-purple-50">
        <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
          AI Assistant
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium flex-shrink-0">
            AI
          </div>
          <div className="flex-1 bg-card rounded-lg p-3 border">
            <p className="text-sm text-foreground">
              Hello! I&apos;m your GDPR compliance assistant. I can help you with:
            </p>
            <ul className="text-sm mt-3 space-y-1 text-muted-foreground">
              <li>• Data categorization</li>
              <li>• Risk assessment guidance</li>
              <li>• Control recommendations</li>
              <li>• Report generation</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-medium flex-shrink-0">
            U
          </div>
          <div className="flex-1 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-foreground">
              Help me categorize customer email addresses in my e-commerce system
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium flex-shrink-0">
            AI
          </div>
          <div className="flex-1 bg-card rounded-lg p-3 border">
            <p className="text-sm text-foreground">
              Customer email addresses are typically classified as:
            </p>
            <ul className="text-sm mt-3 space-y-2">
              <li><strong>Category:</strong> Contact Information</li>
              <li><strong>Sensitivity:</strong> Medium</li>
              <li><strong>Purpose:</strong> Communication, Order Processing</li>
              <li><strong>Retention:</strong> Based on customer relationship</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-3 border-t">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Ask about GDPR compliance..."
            className="flex-1 px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-sm"
          />
          <button className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition-colors hover:bg-primary/90">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}