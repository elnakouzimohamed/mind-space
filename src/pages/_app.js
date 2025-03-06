import "@/styles/globals.css";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }) {

  return(
    <section className=" bg-black Background-repeat: no-repeat" style={{backgroundImage: "url('/banner.svg')"}}>
    <Component {...pageProps} />;
    </section>
  )
}
