import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3">الصورة</th>
          <th className="p-3">الاسم</th>
          <th className="p-3">السعر</th>
          <th className="p-3">الكمية</th>
          <th className="p-3">الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="p-3">
              <div className="relative w-16 h-16">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded"
                />
              </div>
            </td>
            <td className="p-3">{product.name}</td>
            <td className="p-3">{product.price} ر.س</td>
            <td className="p-3">{product.stock}</td>
            <td className="p-3">
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}