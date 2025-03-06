import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <section className="max-w-[1400px] bg-black" style={{backgroundImage: "url('/banner.svg')"}}>
    <Banner></Banner>
    </section>
    </>
  );
}
