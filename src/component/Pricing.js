import Image from "next/image";
import openai5002 from "../../public/images/openai5002.jpg";
import zenefit from "../../public/images/zenefit.png";
import raycat from "../../public/images/raycat.png";

export default function Pricing() {
    {/* paragraphe */}
    return (
      <div className="bg-gray-100 rounded-2xl shadow-lg p-6 ">
        <div className="text-center">
        <button className=" border border-green-600 text-green-600 px-3 py-1 rounded-2xl ">pricing</button>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Choose the cloud <br /> solutions you need
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Our sales team can help you find the best mix of cloud <br />  solutions for your business needs.
          </p>
        </div>
        {/* prices */}
        <div className="flex flex-col md:flex-row max md:space-y-0 rounded-2xl md:space-x-6  h-80  mx-auto max-w-3xl">
          
          <div className="flex-1 p-6 rounded-2xl  bg-teal-900 text-white">
            <h3 className="text-xl font-bold">Kubernetes Service</h3>
            <p className="">Start at</p>
            <p className="text-lg font-semibold mt-2">$12 / month</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Simple, managed Kubernetes built for scale.</li>
              <li>✔ Free control plane, free bandwidth allowance.</li>
              <li>✔ Automate & optimize to peak performance.</li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-white text-teal-900 rounded-lg font-semibold hover:bg-gray-100 transition">
              View pricing
            </button>
          </div>
  
          
          <div className="flex-1 p-6 rounded-lg shadow-md bg-lime-50 text-gray-900">
            <h3 className="text-xl font-bold">App Platform</h3>
            <p className="">Start at</p>
            <p className="text-lg font-semibold mt-2">$15 / month</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Build, deploy, and scale apps quickly.</li>
              <li>✔ Fully managed solution, zero infrastructure management.</li>
              <li>✔ Highly available, on demand.</li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-teal-900 text-white rounded-lg font-semibold hover:bg-teal-700 transition">
              View pricing
            </button>
          </div>
        </div>
        {/*  */}
        <div className=" bg-white  text-center rounded-2xl   space-y-6 py-5 mx-auto max-w-3xl">
      <h3 className="text-lg font-bold text-gray-900">You’ve got unique business?</h3>
      <p className="text-gray-600 mt-2">
        Do you needs and We’ve got powerful solutions to meet those needs. <br />Chat with us to get started!
      </p>
      <button className="mt-4 px-6 py-2 bg-lime-500 text-white rounded-lg font-semibold hover:bg-lime-600 transition">
        Contact sales
      </button>
    </div>

   
      </div>
      
    );
  }
  