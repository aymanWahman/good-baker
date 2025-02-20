import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/img/baker2.png"
          alt="Baker logo"
          width={380}
          height={238}
          priority
        />
        <Image
          className="dark:invert"
          src="/img/baker.png"
          alt="Baker logo"
          width={280}
          height={138}
          priority
        />
      
    
      </main>
    
    </div>
  );
}
