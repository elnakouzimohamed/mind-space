import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/banner";
import Projects from "@/components/projects";
import CardsContainer from "@/components/cards";
import CustomCursor from "@/components/cursor";
import ScrollMeter from "@/components/scrollmeter";
import Footer from "@/components/footer";
import ContactUs from "@/components/contactus";
import TestingApi from "@/components/TestingApi";
import Navbar from "@/components/navbar";

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
    <Navbar></Navbar>
    <CustomCursor></CustomCursor>
    <Banner></Banner>
    
    <CardsContainer></CardsContainer>
    <Projects></Projects>
    <ScrollMeter></ScrollMeter>
    <ContactUs></ContactUs>
    <Footer></Footer>
    <TestingApi></TestingApi>    
 
    </>
  );
}
