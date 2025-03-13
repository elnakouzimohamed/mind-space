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
import axios from "@/utils/axios";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [data, setData] = useState(null);  // State to store fetched data
  const [error, setError] = useState(null); // State to store error if occurs

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get("/page/news"); // Make a GET request
        setData(response.data); // Store the response data in the state
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // E
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
    <div>
      <h1>Fetched Data</h1>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
    </>
  );
}
