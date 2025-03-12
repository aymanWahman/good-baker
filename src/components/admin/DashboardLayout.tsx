import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* الشريط العلوي (Navbar) */}
      <nav className="bg-white p-4 shadow">
        <div className="max-w-7xl mx-auto flex gap-4">
          <Link href="/admin/products" className="text-blue-600 hover:text-blue-800">
            المنتجات
          </Link>
          <Link href="/admin/orders" className="text-blue-600 hover:text-blue-800">
            الطلبات
          </Link>
        </div>
      </nav>

      {/* محتوى الصفحة */}
      <main className="p-4">{children}</main>
    </div>
  );
}