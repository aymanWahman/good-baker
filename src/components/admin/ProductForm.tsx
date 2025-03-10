import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  price: number;
  stock: number;
  image: string; // رابط الصورة من Cloudinary
};

export default function ProductForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      <input
        {...register('name')}
        placeholder="اسم المنتج"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        {...register('price')}
        placeholder="السعر"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        {...register('stock')}
        placeholder="الكمية"
        className="w-full p-2 border rounded"
      />
      <input
        {...register('image')}
        placeholder="رابط الصورة من Cloudinary"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        إضافة المنتج
      </button>
    </form>
  );
}