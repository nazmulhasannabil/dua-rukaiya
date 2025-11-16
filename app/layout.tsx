import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Sidebar from "./component/SideBar";
import SecondSideBar from "./component/SecondSideBar";
import RightSideBar from "./component/RightSideBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dua Ruqyah",
  description: "Created By Nazmul Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`${poppins.className}`}>
        <div className="min-h-screen flex flex-col md:flex-row">
          <Sidebar />
          <div className="flex flex-1 flex-col md:flex-row md:ml-16">
            {/* SecondSideBar - hidden on mobile, shown on md and up */}
            <div className="hidden md:block md:w-[20%] md:min-w-[200px] lg:min-w-[250px] sticky top-0 h-screen">
              <SecondSideBar />
            </div>

            {/* Main content - full width on mobile, 60% on md and up */}
            <div className="w-full md:w-[60%] min-w-0">
              <Header />
              <main className="pt-16 overflow-y-auto px-2 sm:px-4 md:px-6">{children}</main>
            </div>

            {/* RightSideBar - hidden on mobile and md, shown on lg and up */}
            <div className="hidden lg:block lg:w-[20%] lg:min-w-[250px] sticky top-0 h-screen">
              <RightSideBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
