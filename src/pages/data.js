import axios from "axios";
export async function getData() {
    let data;
    await axios
      .get("/page/news", {
        headers: {
          "Accept-Language": "en", 
        },
      })
      .then((res) => {
        data = res.data;
      })
      .catch(console.error);
  
  
    return { props: { data } };
  }