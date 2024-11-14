import Image from "next/image";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Stats from "../component/Stats";
import Product from "../component/Product";
import Security from "../component/Security";
import Pricing from "../component/Pricing";
import Last from "../component/Last";
import Footer from "../component/Footer"




export default function Home() {
  
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Product />
      <Security />
      <Pricing />
      <Last />
      <Footer />
    </div>
  );
}

 /**return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
        
      <div className="flex items-center  justify-between ">
        <div className="space-y-6 px-64 ">
        <button className="border border-green-950 px-6 py-2 rounded-2xl">product</button>
          <h1 className=" text-3xl font-semibold text-gray-900">
            AI Cybersecurity built <br />to protect your data
          </h1>
          <p className="text-gray-700">
            Equip your organization with the tools and <br />intelligence to anticipate threats, 
            <br /> manage vulnerabilities and protect your cloud, <br />endpoint, and identity.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Explore more
          </button>
        </div>
        <div className="relative w-60 h-60">
        <Image src={ori2} alt="ori11"   width={400} height={400} />
        </div>
      </div>
    </div>
  );
}**/


/*export default function Security() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          
          <div className="text-center mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Security</span>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">AI Cybersecurity built to protect your data</h1>
            <p className="mt-4 text-gray-600">
              Equip your organization with the tools and intelligence to anticipate threats, manage vulnerabilities and protect your cloud, endpoint, and identity.
            </p>
          </div>
  
          
          <div className="flex justify-center items-center mt-6">
            <div className="relative bg-white border border-gray-200 rounded-lg p-6">
             
              <div className="relative w-16 h-16 bg-teal-500 rounded-full shadow-lg transform rotate-45">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="block w-4 h-4 bg-green-400 rounded-full"></span>
                </div>
                <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-4 w-24 bg-yellow-300 rounded-full opacity-30 blur-sm"></div>
            </div>
          </div>
  
          <div className="mt-8 text-center">
            <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-200">
              Explore more
            </button>
          </div>
        </div>
      </div>
    );

  } 
    
  
   <div className="text-center mt-16">
      <p className="text-gray-500 text-sm">Trusted by world’s best companies.</p>
      <div className="flex justify-center space-x-8 mt-4">
        <Image src={openai5002} alt="openai" width={100} height={24} />
        <Image src={zenefit} alt="zenefit" width={100} height={24} />
        <Image src={raycat} alt="raycat" width={100} height={24} />
      </div>
    </div>
  */