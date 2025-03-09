import Image from "next/image";
interface Product {
  id: number;
  attributes?: { // جعل خاصية attributes اختيارية
    name?: string;
    description?: string[];
    price?: number;
    image?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
  };
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">قائمة المنتجات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            {/* فحص وجود الصورة */}
            {product.attributes?.image?.data?.attributes?.url ? (
              <Image
                src={product.attributes.image.data.attributes.url}
                alt={product.attributes?.name || "Product"}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">لا يوجد صورة</span>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.attributes?.name || "اسم المنتج"}</h3>
              <p className="text-gray-600">
                {Array.isArray(product.attributes?.description)
                  ? product.attributes.description.join(" ") // إذا كانت description مصفوفة، ادمج عناصرها
                  : product.attributes?.description || "لا يوجد وصف"} {/* إذا لم تكن هناك وصف، عرض رسالة بديلة */}
              </p>
              <p className="text-lg font-bold mt-2">
                السعر: {product.attributes?.price || 0} جنيه
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;