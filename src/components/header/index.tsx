import Link from "../link";
import Navbar from "./Navbar";
import CartButton from "./cart-button";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import LanguageSwitcher from "./language-switcher";
import AuthButtons from "./auth-buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import Image from "next/image";

async function Header() {
  const locale = await getCurrentLocale();
  const initialSession = await getServerSession(authOptions);
  const translations = await getTrans(locale);
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={`/${locale}`}
          className="text-primary font-semibold text-2xl flex gap-2"
        >
            <Image
                      src='https://res.cloudinary.com/dktod7mod/image/upload/v1743883234/logoBaker_whecuw.png'
                      alt='Bakery'
                      width={45}
                      height={25}
                      className='object-contain'
                      loading='eager'
                      priority
                    /> {translations.logo}
        </Link>
        <Navbar translations={translations} initialSession={initialSession} />
        <div className="flex items-center gap-6 flex-1 justify-end">
          <div className="hidden lg:flex lg:items-center lg:gap-6 ">
            <AuthButtons
              translations={translations}
              initialSession={initialSession}
            />
            <LanguageSwitcher />
          </div>

          <CartButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
