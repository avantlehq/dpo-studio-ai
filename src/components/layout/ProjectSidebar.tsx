'use client';

import { useState } from 'react';
import { Plus, Filter, Search, Calendar, User } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  type: 'dpia' | 'ropa' | 'ai_impact';
  status: 'active' | 'draft' | 'completed' | 'review';
  description: string;
  lastUpdated: string;
  assignee: string;
  progress: number;
}

interface ProjectSidebarProps {
  selectedModule?: string;
  onProjectSelect?: (project: Project) => void;
  selectedProject?: string;
}

const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj1',
    name: 'E-commerce DPIA',
    type: 'dpia',
    status: 'active',
    description: 'Data protection assessment for online store',
    lastUpdated: '2 days ago',
    assignee: 'Sarah Connor',
    progress: 75
  },
  {
    id: 'proj2', 
    name: 'HR System DPIA',
    type: 'dpia',
    status: 'draft',
    description: 'Employee data processing analysis',
    lastUpdated: '1 week ago',
    assignee: 'John Smith',
    progress: 30
  },
  {
    id: 'proj3',
    name: 'CRM Integration',
    type: 'dpia', 
    status: 'completed',
    description: 'Customer data flow assessment',
    lastUpdated: '2 weeks ago',
    assignee: 'Alice Johnson',
    progress: 100
  },
  {
    id: 'proj4',
    name: 'Marketing ROPA',
    type: 'ropa',
    status: 'active', 
    description: 'Record of processing for marketing activities',
    lastUpdated: '3 days ago',
    assignee: 'Bob Wilson',
    progress: 60
  },
  {
    id: 'proj5',
    name: 'AI Chatbot Assessment',
    type: 'ai_impact',
    status: 'review',
    description: 'AI system compliance review',
    lastUpdated: '1 day ago',
    assignee: 'Emma Davis',
    progress: 90
  }
];

const STATUS_CONFIG = {
  active: { color: 'bg-green-50 text-green-600', border: 'border-l-green-500' },
  draft: { color: 'bg-orange-50 text-orange-600', border: 'border-l-orange-500' },
  completed: { color: 'bg-gray-50 text-gray-600', border: 'border-l-gray-500' },
  review: { color: 'bg-blue-50 text-blue-600', border: 'border-l-blue-500' }
};

const MODULE_TYPE_MAP: Record<string, string[]> = {
  'dpia': ['dpia'],
  'ropa': ['ropa'],
  'aiimpact': ['ai_impact'],
  'admin': ['dpia', 'ropa', 'ai_impact']
};

export function ProjectSidebar({ selectedModule = 'dpia', onProjectSelect, selectedProject }: ProjectSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);

  // Filter projects by module type and search/status filters
  const allowedTypes = MODULE_TYPE_MAP[selectedModule] || ['dpia', 'ropa', 'ai_impact'];
  const filteredProjects = MOCK_PROJECTS.filter(project => {
    const matchesModule = allowedTypes.includes(project.type);
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    
    return matchesModule && matchesSearch && matchesStatus;
  });

  const handleProjectClick = (project: Project) => {
    onProjectSelect?.(project);
  };

  return (
    <div className="h-full flex flex-col bg-muted/20">
      <div className="p-2 border-b bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              Projects
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {filteredProjects.length} {selectedModule.toUpperCase()} projects
            </p>
          </div>
          <button 
            onClick={() => setShowNewProjectForm(!showNewProjectForm)}
            className="flex items-center gap-1 text-xs bg-primary text-primary-foreground px-2 py-1 rounded transition-colors hover:bg-primary/90"
          >
            <Plus className="h-3 w-3" />
            New
          </button>
        </div>
        
        {/* Search */}
        <div className="relative mb-2">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-7 pr-3 py-1.5 text-xs bg-background border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        
        {/* Filter */}
        <div className="flex items-center gap-1">
          <Filter className="h-3 w-3 text-muted-foreground" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="text-xs bg-background border border-input rounded px-2 py-1 text-foreground focus:outline-none focus:ring-1 focus:ring-ring flex-1"
          >
            <option value="all">All status</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      {/* New Project Form */}
      {showNewProjectForm && (
        <div className="p-3 border-b bg-card">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Project name"
              className="w-full px-2 py-1.5 text-xs bg-background border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <textarea
              placeholder="Project description"
              className="w-full px-2 py-1.5 text-xs bg-background border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              rows={2}
            />
            <div className="flex gap-1">
              <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded hover:bg-primary/90 flex-1">
                Create
              </button>
              <button 
                onClick={() => setShowNewProjectForm(false)}
                className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 border rounded flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredProjects.length === 0 ? (
          <div className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              {searchQuery ? 'No projects found' : `No ${selectedModule.toUpperCase()} projects yet`}
            </p>
            <button 
              onClick={() => setShowNewProjectForm(true)}
              className="text-xs text-primary hover:underline mt-2"
            >
              Create your first project
            </button>
          </div>
        ) : (
          filteredProjects.map((project) => {
            const statusConfig = STATUS_CONFIG[project.status];
            const isSelected = selectedProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`group relative rounded-lg p-2.5 cursor-pointer transition-all duration-200 border-l-2 ${
                  statusConfig.border
                } ${
                  isSelected 
                    ? 'bg-accent border-r border-t border-b border-border shadow-sm' 
                    : 'hover:bg-accent/50'
                }`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium truncate pr-2">{project.name}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${statusConfig.color}`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-muted-foreground">Progress</span>
                    <span className="text-xs text-muted-foreground">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span className="truncate">{project.assignee}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{project.lastUpdated}</span>
                  </div>
                </div>
                
                {isSelected && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-r"></div>
                )}
              </div>
            );
          })
        )}
      </div>
      
      <div className="p-3 border-t">
        <div className="text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Active: {filteredProjects.filter(p => p.status === 'active').length}</span>
            <span>Draft: {filteredProjects.filter(p => p.status === 'draft').length}</span>
            <span>Done: {filteredProjects.filter(p => p.status === 'completed').length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}