import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  return (
    <main className="mt-16 md:mt-24 mb-7 px-5">
      {/* Section: Languages Grid */}
      <section className="grid md:grid-cols-2 gap-9 p-5 text-center text-gray-600 font-serif">
        <div className="mx-auto">
          <h2 className="font-bold text-xl md:text-4xl my-7">المخبوزات</h2>
          <Link href="/">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-full hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1741639489/DALL_E_2025-01-23_12.18.31_-_A_stunning_image_of_a_French_chef_in_a_professional_white_uniform_and_chef_s_hat_presenting_a_wide_variety_of_baked_goods_on_a_beautifully_arranged_ta_z95phe.webp"
              alt="المخبوزات"
              width={280}
              height={140}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>

        <div className="mx-auto">
          <h2 className="font-bold text-xl md:text-4xl my-7">الحلويات</h2>
          <Link href="/">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-full hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dktod7mod/image/upload/v1741639757/baker1_rb68lv.webp"
              alt="الحلويات"
              width={280}
              height={140}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
