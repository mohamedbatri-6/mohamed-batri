import Image from "next/image";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Product from "../component/Product";


export default function Home() {
  
  return (
    <div>
      <Header />
      <Hero />
      <Product />
    </div>
  );
}