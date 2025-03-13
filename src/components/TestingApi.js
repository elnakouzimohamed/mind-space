import React from "react";

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
        return(
            <p>Testing done</p>
        )

  }