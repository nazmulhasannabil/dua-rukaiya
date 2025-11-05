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
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex flex-1 ml-16">
            {/* 20% width for SecondSideBar */}
            <div className="w-[20%] min-w-[250px] sticky top-0 h-screen ">
              <SecondSideBar />
            </div>

            {/* 60% width for main content */}
            <div className="w-[60%] min-w-[600px]">
              <Header />
              <main className="pt-16 overflow-y-auto">{children}</main>
            </div>

            {/* 20% width for RightSideBar */}
            <div className="w-[20%] min-w-[250px] sticky top-0 h-screen">
              <RightSideBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}


