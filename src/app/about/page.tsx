import Image from "next/image";
import Link from "next/link";
// import { ArrowRightIcon} from '@heroicons/react/24/solid';
import { HiPhone } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";

export const metadata = {
  title: "About me",
};

const Page = () => {
  return (
    <div className="container mt-32 md:w-3/4  text-center mx-auto  ">
      <div className="grid grid-cols-3 gap-3 text-center justify-center item-center mb-10 m-3 border rounded-2xl p-5 ">
        <div className="col-span-1 m-auto ">
          <Image
            className="rounded-xl shadow-2xl shadow-black md:w-52 h-32 md:h-56"
            src="/img/baker.png"
            alt="المخبوزات"
            width={120}
            height={120}
            priority
          />
        </div>

        <div className="col-span-2 my-auto ">
          <h2 className="text-2xl md:text-4xl font-extrabold  text-gray-500 ">
            مخبوزات
          </h2>
          <p className="mt-4 text-xl md:text-2xl font-extrabold">و </p>
          <h3 className="mt-4 text-gray-500 text-2xl md:text-4xl font-bold">
           حلويات
          </h3>
        </div>
      </div>


      <div className="flex items-center mx-auto ">
      <HiPhone size={26} color="red"/>
      <p className="text-xl md:text-2xl">01094229490</p>
      </div>

      <div className="my-15">
          
        <p className="text-center text-sm md:text-xl my-10">
          اللهم ارزقنا من فضلك العظيم في الدنيا والأخرة
        </p>
      </div>
    

    </div>
  );
};

export default Page;
