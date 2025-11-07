export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">DPO Studio Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Tenant Management</h2>
          <p className="text-gray-600">Manage client organizations and access</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Billing & Plans</h2>
          <p className="text-gray-600">Configure pricing and subscription plans</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Whitelabel Config</h2>
          <p className="text-gray-600">Brand customization and partner settings</p>
        </div>
      </div>
    </div>
  );
}