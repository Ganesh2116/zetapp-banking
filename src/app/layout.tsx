import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zetapp-Assignment",
  description: "zetapp.in clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="debug-screens">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
