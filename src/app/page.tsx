'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

type ViewMode = 'login' | 'app';

// Demo passwords for different access levels
const DEMO_PASSWORDS = {
  'dpostudio2024': 'demo',
  'gdpr-preview': 'preview', 
  'admin-access': 'admin'
};

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>('login');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user already has access from previous session
    const savedAccess = localStorage.getItem('dpostudio-access');
    if (savedAccess && Object.values(DEMO_PASSWORDS).includes(savedAccess)) {
      setViewMode('app');
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setIsLoading(true);
    setError('');
    
    try {
      // Simulate auth delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const accessLevel = DEMO_PASSWORDS[password as keyof typeof DEMO_PASSWORDS];
      if (accessLevel) {
        localStorage.setItem('dpostudio-access', accessLevel);
        setViewMode('app');
        setPassword('');
      } else {
        setError('Invalid password. Contact admin for access credentials.');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('dpostudio-access');
    setViewMode('login');
  };

  if (viewMode === 'login') {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full mx-4 shadow-lg">
          <div className="text-center mb-8">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-xl">D</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              DPO<span className="text-primary">studio.ai</span>
              <span className="text-sm font-normal text-muted-foreground ml-2">v0.1.0</span>
            </h1>
            <p className="text-muted-foreground">European GDPR Compliance Platform</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Access Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your access password"
                className="w-full p-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                disabled={isLoading}
              />
              <p className="text-xs text-muted-foreground">
                Demo access available. Contact support for production credentials.
              </p>
            </div>

            {error && (
              <p className="text-destructive text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading || !password.trim()}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isLoading ? 'Authenticating...' : 'Access DPO Studio'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              🔒 Secure access to GDPR compliance tools.<br/>
              Built with Privacy by Design • Powered by Avantle.ai
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold">DPO Studio</h1>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
          <p className="text-xl text-gray-600">
            European GDPR Compliance Platform
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link href="/admin" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
            <p className="text-gray-600">Tenant management, billing, and platform configuration</p>
          </Link>

          <Link href="/modules/dpia" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">DPIA Studio</h2>
            <p className="text-gray-600">Data Protection Impact Assessment automation</p>
          </Link>

          <Link href="/modules/ropa" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">ROPA Studio</h2>
            <p className="text-gray-600">Record of Processing Activities management</p>
          </Link>

          <Link href="/modules/aiimpact" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">AI Impact Studio</h2>
            <p className="text-gray-600">AI Act compliance and risk assessment</p>
          </Link>
        </div>

        <footer className="text-center text-gray-500">
          <p>Powered by Avantle.ai • Privacy by Design • Intelligence by Default</p>
        </footer>
      </div>
    </div>
  );
}
