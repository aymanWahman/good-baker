import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Providers } from '@/components/Providers';
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({ subsets: ["arabic"], weight: "400" });

export const metadata = {
  title: 'خباز الخير',
  description: 'اكتشف جمال وسحر مدينة بورسعيد، بوابة مصر الشرقية وتاريخها العريق',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={tajawal.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}