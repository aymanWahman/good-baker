import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '@/components/admin/DashboardLayout';
import ProductTable from '@/components/admin/ProductTable';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('/api/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">جميع المنتجات</h1>
        <ProductTable products={products} />
      </div>
    </DashboardLayout>
  );
}