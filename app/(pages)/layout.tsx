import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { Navbar, Providers, ShoppingCard, Footer } from "@/components/index";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fendie - Eccommerce Shop",
  description: "Generated by create next app",
};

export default function RootLayoutTwo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-slate-200 text-slate-700 dark:bg-transparent dark:text-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <ShoppingCard />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
