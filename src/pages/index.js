import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/banner";
import Projects from "@/components/projects";
import CardsContainer from "@/components/cards";
import CustomCursor from "@/components/cursor";
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
    <CustomCursor></CustomCursor>
    <Banner></Banner>
    <CardsContainer></CardsContainer>
    <Projects></Projects>
    
 
    </>
  );
}
