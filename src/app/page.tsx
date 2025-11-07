import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">DPO Studio</h1>
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
