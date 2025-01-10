import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: {
    default: " Gemmuel Dela Peña | Web Developer",
    template: "%s | Gemmuel Dela Peña",
  },
  description:
    "A Web developer based on the Philippines. Let's collaborate and bring your ideas to life!",
  // icons: {
  //   icon: "/bulletlogo.png",
  // },
  keywords: [
    "Bullet",
    "bulletonli",
    "Gemmuel Dela Pena",
    "Programmer",
    "Developer",
    "Web Developer",
    "Software Developer",
    "Software Engineer",
    "Human Software Engineer",
    "Philippines",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Javascript Developer",
    "Typescript Developer",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`${poppins.className} antialiased`}>
        <div className="fixed z-[1] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <main className="relative bg-darkBlue text-white overflow-hidden ">
          <img
            src="/images/react.png"
            alt="Background React"
            className="opacity-5 absolute -left-52 top-[20%]"
          />
          <img
            src="/images/nodejs.png"
            alt="Background React"
            className="opacity-5 absolute -right-52 top-[20%] w-[400px]"
          />
          {children}
          <Footer />
        </main>

        <Analytics />
      </body>
    </html>
  );
}
