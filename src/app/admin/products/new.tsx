import DashboardLayout from '@/components/admin/DashboardLayout';
import ProductForm from '@/components/admin/ProductForm';

export default function NewProductPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">إضافة منتج جديد</h1>
      <ProductForm />
    </DashboardLayout>
  );
}