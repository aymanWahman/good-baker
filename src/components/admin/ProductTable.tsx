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
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
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