export function ChatPanel() {
  return (
    <div className="h-full flex flex-col">
      <div className="h-10 px-4 flex items-center border-b bg-muted/30">
        <h2 className="text-sm font-medium">AI Assistant</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start space-x-2">
          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
            AI
          </div>
          <div className="flex-1 bg-muted rounded-lg p-3">
            <p className="text-sm">
              Hello! I&apos;m your GDPR compliance assistant. I can help you with:
            </p>
            <ul className="text-sm mt-2 space-y-1 text-muted-foreground">
              <li>• Data categorization</li>
              <li>• Risk assessment guidance</li>
              <li>• Control recommendations</li>
              <li>• Report generation</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
            U
          </div>
          <div className="flex-1 bg-blue-50 rounded-lg p-3">
            <p className="text-sm">
              Help me categorize customer email addresses in my e-commerce system
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
            AI
          </div>
          <div className="flex-1 bg-muted rounded-lg p-3">
            <p className="text-sm">
              Customer email addresses are typically classified as:
            </p>
            <ul className="text-sm mt-2 space-y-1">
              <li><strong>Category:</strong> Contact Information</li>
              <li><strong>Sensitivity:</strong> Medium</li>
              <li><strong>Purpose:</strong> Communication, Order Processing</li>
              <li><strong>Retention:</strong> Based on customer relationship</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t p-4">
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Ask about GDPR compliance..."
            className="flex-1 p-2 border rounded-md text-sm"
          />
          <button className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}