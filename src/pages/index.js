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
   
    <Banner></Banner>
    <CardsContainer></CardsContainer>
    
 
    </>
  );
}
