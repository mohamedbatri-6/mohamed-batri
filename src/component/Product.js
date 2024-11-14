import Image from "next/image";
import ori11 from "../../public/images/ori11.png";
import ori22 from "../../public/images/ori22.png";
import ori33 from "../../public/images/ori33.png";

export default function Product() {
    return (
      <section className="py-20 bg-gray-100 text-center rounded-3xl">
        <button className="border border-green-950 px-3 py-1 rounded-2xl">product</button>
        
        <h2 className="text-3xl font-bold mt-4">Explore tools for bringing <br /> your vision to life</h2><br />
        <p>For a simple tools and predictable pricing to support <br /> designed for growing businesses.</p>
        <ul className="flex justify-center space-x-6 mt-8">
          <li className="bg-white p-6 rounded-2xl shadow-md max-w-xs">
          <Image src={ori11} alt="ori11" className="rounded-full "  width={50} height={50} />
            <h4 className="font-bold mt-4">Kubernetes Service</h4>
            <p>Build and scale your apps with managed by Kubernetes.</p>
            <a href="#" className="text-black-500 mt-2 inline-block">Explore the product</a>
          </li>

          <li className="bg-teal-700 text-white p-6 rounded-2xl shadow-md max-w-xs">
          <Image src={ori22} alt="ori22" className="rounded-full"  width={50} height={50} />
            <h4 className="font-bold mt-4">Netgo AI Studio</h4>
            <p>Deliver accurate, hyper personalized responses in your AI applications.</p>
            <a href="#" className="text-black mt-2 inline-block ">Explore the product</a>
          </li>

          <li className="bg-green-100 p-6 rounded-2xl shadow-md max-w-xs">
          <Image src={ori33} alt="ori33" className="rounded-full" width={50} height={50} />
            <h4 className="font-bold mt-4">Microsoft Fabric</h4>
            <p>Bring data and analytics services together on an AI-powered platform.</p>
            <a href="#" className="text-black-500 mt-2 inline-block">Explore the product</a>
          </li>
        </ul>
      </section>
    );
  }