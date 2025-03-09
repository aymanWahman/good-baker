import Image from "next/image";
import Link from "next/link";
import Products from "@/components/Products";

const Home = async () => {
  

  return (
    <div className="mt-16 md:mt-24 mb-7 px-5">
      {/* Section: Languages Grid */}
      <section className="grid md:grid-cols-2 gap-9 p-5 text-center text-gray-600 font-serif">
        <div className="mx-auto">
          <h2 className="font-bold text-xl md:text-4xl my-7">المخبوزات</h2>
          <Link href="/baked-goods">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-full hover:scale-105 transition-transform duration-300"
              src="/img/baker.png"
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
          <Link href="/sweets">
            <Image
              className="rounded-xl shadow-2xl shadow-black w-full hover:scale-105 transition-transform duration-300"
              src="/img/baker1.png"
              alt="الحلويات"
              width={280}
              height={140}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>
      </section>

    
    </div>
  );
};

export default Home;