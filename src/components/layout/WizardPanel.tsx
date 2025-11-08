'use client';

import { useState } from 'react';

interface WizardPanelProps {
  selectedModule?: string;
}

const MODULE_CONTENT: Record<string, any> = {
  'dpia': {
    title: 'DPIA Wizard',
    subtitle: 'Data Protection Impact Assessment',
    steps: ['Data Mapping', 'Risk Assessment', 'Controls'],
    currentStep: 0,
    description: 'Identify and categorize the personal data being processed in your project.'
  },
  'ropa': {
    title: 'ROPA Manager', 
    subtitle: 'Records of Processing Activities',
    steps: ['Processing Purpose', 'Data Categories', 'Recipients', 'Retention'],
    currentStep: 0,
    description: 'Document your data processing activities as required by GDPR Article 30.'
  },
  'aiimpact': {
    title: 'AI Impact Assessment',
    subtitle: 'AI System Compliance Review', 
    steps: ['System Analysis', 'Risk Evaluation', 'Mitigation Plan'],
    currentStep: 0,
    description: 'Assess the impact and compliance requirements for your AI system.'
  },
  'admin': {
    title: 'Admin Dashboard',
    subtitle: 'Platform Management',
    steps: ['Users', 'Settings', 'Billing'],
    currentStep: 0,
    description: 'Manage your organization\'s DPO Studio configuration and users.'
  }
};

export function WizardPanel({ selectedModule = 'dpia' }: WizardPanelProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const moduleData = MODULE_CONTENT[selectedModule] || MODULE_CONTENT['dpia'];
  const { title, subtitle, steps, description } = moduleData;

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-3 border-b bg-card">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              {title}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md border hover:bg-accent">
              Save Draft
            </button>
            <button className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-md transition-colors hover:bg-primary/90">
              Next Step
            </button>
          </div>
        </div>
        
        {/* Dynamic Stepper */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {steps.map((step: string, index: number) => (
            <div key={step} className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-medium ${
                  index === currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : index < currentStep 
                    ? 'bg-green-500 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <span className={`text-sm whitespace-nowrap ${
                  index === currentStep 
                    ? 'font-medium text-foreground' 
                    : index < currentStep
                    ? 'font-medium text-green-600'
                    : 'text-muted-foreground'
                }`}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-border min-w-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Step {currentStep + 1}: {steps[currentStep]}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Dynamic content based on selected module */}
          <div className="space-y-6">
            {selectedModule === 'dpia' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Project Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter DPIA project name"
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
              </>
            )}
            
            {selectedModule === 'ropa' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Processing Activity Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter processing activity name"
                    className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Legal Basis
                  </label>
                  <select className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <option>Select legal basis</option>
                    <option>Consent (Art. 6(1)(a))</option>
                    <option>Contract (Art. 6(1)(b))</option>
                    <option>Legal obligation (Art. 6(1)(c))</option>
                    <option>Legitimate interest (Art. 6(1)(f))</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Data Controller
                  </label>
                  <input 
                    type="text" 
                    placeholder="Name of data controller"
                    className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
              </>
            )}
            
            {selectedModule === 'aiimpact' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    AI System Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter AI system name"
                    className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Risk Category
                  </label>
                  <select className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <option>Select risk level</option>
                    <option>High-risk AI system</option>
                    <option>Limited risk</option>
                    <option>Minimal risk</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Application Domain
                  </label>
                  <textarea 
                    placeholder="Describe where and how the AI system will be used..."
                    className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[80px] resize-none"
                  />
                </div>
              </>
            )}
            
            {selectedModule === 'admin' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Users</h4>
                    <p className="text-sm text-muted-foreground mb-3">Manage platform users</p>
                    <button className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded">
                      Manage Users
                    </button>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Settings</h4>
                    <p className="text-sm text-muted-foreground mb-3">Platform configuration</p>
                    <button className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded">
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}