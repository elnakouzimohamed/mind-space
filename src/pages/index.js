import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/banner";

import CardsContainer from "@/components/cards";
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
   <section className=" bg-black bg-no-repeat m-auto bg-center " style={{ backgroundImage: "url('/banner.svg')"}}>
    <Banner></Banner>
    <CardsContainer></CardsContainer>
    
    </section>
    </>
  );
}
