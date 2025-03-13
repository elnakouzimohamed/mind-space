import React from "react";
import { getData } from "@/pages/data";
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    console.log(data);
    return {
        props: { dictionary: data }
        
    }
    
  }

export default function TestingApi({dictionary}){
        console.log(dictionary)
       
        const data = getData()
        return(
            <p> {data}</p>
        )

  }