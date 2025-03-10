import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 shadow">
        <div className="max-w-7xl mx-auto flex gap-4">
          <Link href="/admin/products">
            <a className="text-blue-600 hover:text-blue-800">المنتجات</a>
          </Link>
          <Link href="/admin/orders">
            <a className="text-blue-600 hover:text-blue-800">الطلبات</a>
          </Link>
        </div>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
}