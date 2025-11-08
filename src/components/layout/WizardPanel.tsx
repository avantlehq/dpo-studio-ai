'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Save, CheckCircle, AlertCircle } from 'lucide-react';

interface WizardPanelProps {
  selectedModule?: string;
  selectedProject?: string;
}

interface ModuleData {
  title: string;
  subtitle: string;
  steps: string[];
  currentStep: number;
  description: string;
}

const MODULE_CONTENT: Record<string, ModuleData> = {
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

export function WizardPanel({ selectedModule = 'dpia', selectedProject }: WizardPanelProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const moduleData = MODULE_CONTENT[selectedModule] || MODULE_CONTENT['dpia'];
  const { title, subtitle, steps, description } = moduleData;

  const canGoNext = currentStep < steps.length - 1;
  const canGoPrevious = currentStep > 0;
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (canGoNext) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    setSaveStatus('saving');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-2 border-b bg-gradient-to-r from-sky-50 to-indigo-50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              {title}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleSave}
              disabled={isLoading}
              className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-md border transition-colors ${
                saveStatus === 'saved' 
                  ? 'bg-green-50 text-green-600 border-green-200'
                  : saveStatus === 'error'
                  ? 'bg-red-50 text-red-600 border-red-200'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              {saveStatus === 'saving' ? (
                <div className="animate-spin w-3 h-3 border border-current border-t-transparent rounded-full" />
              ) : saveStatus === 'saved' ? (
                <CheckCircle className="h-3 w-3" />
              ) : saveStatus === 'error' ? (
                <AlertCircle className="h-3 w-3" />
              ) : (
                <Save className="h-3 w-3" />
              )}
              {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved' : saveStatus === 'error' ? 'Error' : 'Save Draft'}
            </button>
            
            <div className="flex items-center gap-1">
              <button 
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className="flex items-center gap-1 text-xs px-2 py-1.5 rounded-md border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors"
              >
                <ChevronLeft className="h-3 w-3" />
                Previous
              </button>
              
              <button 
                onClick={handleNext}
                disabled={!canGoNext}
                className={`flex items-center gap-1 text-xs px-2 py-1.5 rounded-md transition-colors ${
                  isLastStep 
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLastStep ? 'Complete' : 'Next'}
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stepper */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {steps.map((step: string, index: number) => (
            <div key={step} className="flex items-center gap-2 flex-shrink-0">
              <button 
                onClick={() => setCurrentStep(index)}
                className="flex items-center gap-2 hover:bg-accent/50 px-2 py-1 rounded transition-colors"
              >
                <div className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-medium transition-colors ${
                  index === currentStep 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : index < currentStep 
                    ? 'bg-green-500 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted-foreground/20'
                }`}>
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <span className={`text-sm whitespace-nowrap transition-colors ${
                  index === currentStep 
                    ? 'font-medium text-foreground' 
                    : index < currentStep
                    ? 'font-medium text-green-600'
                    : 'text-muted-foreground hover:text-foreground'
                }`}>
                  {step}
                </span>
              </button>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-px min-w-4 ${
                  index < currentStep ? 'bg-green-300' : 'bg-border'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl space-y-8">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">
                Step {currentStep + 1}: {steps[currentStep]}
              </h3>
              {selectedProject && (
                <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  Project: {selectedProject}
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {selectedProject 
                ? `Working on project: ${selectedProject}. ${description}`
                : description
              }
            </p>
          </div>

          {/* Dynamic step-based content */}
          <div className="space-y-6">
            {selectedModule === 'dpia' && (
              <>
                {/* DPIA Step 1: Data Mapping */}
                {currentStep === 0 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Project Name *
                      </label>
                      <input 
                        type="text" 
                        placeholder="Enter DPIA project name"
                        value={formData.projectName || ''}
                        onChange={(e) => handleFormChange('projectName', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Data Categories *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Personal identifiers', 'Contact information', 'Financial data', 'Health data', 'Biometric data', 'Location data'].map((category) => (
                          <label key={category} className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={formData.dataCategories?.[category] || false}
                              onChange={(e) => handleFormChange('dataCategories', {
                                ...formData.dataCategories,
                                [category]: e.target.checked
                              })}
                              className="rounded"
                            />
                            <span className="text-sm">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Processing Purposes *
                      </label>
                      <textarea 
                        placeholder="Explain why this data is being processed..."
                        value={formData.processingPurposes || ''}
                        onChange={(e) => handleFormChange('processingPurposes', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[100px] resize-none"
                      />
                    </div>
                  </div>
                )}
                
                {/* DPIA Step 2: Risk Assessment */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Risk Level Assessment
                      </label>
                      <div className="space-y-3">
                        {[
                          { level: 'high', label: 'High Risk', desc: 'Likely to result in high risk to rights and freedoms', color: 'text-red-600' },
                          { level: 'medium', label: 'Medium Risk', desc: 'Some risk to rights and freedoms', color: 'text-yellow-600' },
                          { level: 'low', label: 'Low Risk', desc: 'Minimal risk to rights and freedoms', color: 'text-green-600' }
                        ].map((risk) => (
                          <label key={risk.level} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-accent/50 cursor-pointer">
                            <input 
                              type="radio" 
                              name="riskLevel"
                              value={risk.level}
                              checked={formData.riskLevel === risk.level}
                              onChange={(e) => handleFormChange('riskLevel', e.target.value)}
                              className="mt-1"
                            />
                            <div>
                              <div className={`font-medium ${risk.color}`}>{risk.label}</div>
                              <div className="text-sm text-muted-foreground">{risk.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Risk Factors
                      </label>
                      <textarea 
                        placeholder="Describe specific risk factors and potential impacts..."
                        value={formData.riskFactors || ''}
                        onChange={(e) => handleFormChange('riskFactors', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[100px] resize-none"
                      />
                    </div>
                  </div>
                )}
                
                {/* DPIA Step 3: Controls */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Recommended Controls
                      </label>
                      <div className="space-y-2">
                        {[
                          'Data minimization',
                          'Pseudonymization/Anonymization', 
                          'Encryption',
                          'Access controls',
                          'Regular audits',
                          'Data retention policies'
                        ].map((control) => (
                          <label key={control} className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              checked={formData.controls?.[control] || false}
                              onChange={(e) => handleFormChange('controls', {
                                ...formData.controls,
                                [control]: e.target.checked
                              })}
                              className="rounded"
                            />
                            <span className="text-sm">{control}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Implementation Plan
                      </label>
                      <textarea 
                        placeholder="Describe how you plan to implement these controls..."
                        value={formData.implementationPlan || ''}
                        onChange={(e) => handleFormChange('implementationPlan', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[100px] resize-none"
                      />
                    </div>
                  </div>
                )}
              </>
            )}
            
            {selectedModule === 'ropa' && (
              <>
                {/* ROPA Step content will be added here */}
                <div className="text-center py-8">
                  <p className="text-muted-foreground">ROPA wizard steps coming soon...</p>
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