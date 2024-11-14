import Image from 'next/image';
import ori2 from "../../public/images/ori2.png";



export default function Security() {
    return (
      <div className="bg-white  p-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 ">
        <div className="  md:space-x-14">
        <h2 className=" ">
          </h2>
        <button className=" border border-green-950 px-3 py-1 rounded-2xl ">security</button>
          <h2 className=" md:space-x-14 text-3xl font-bold text-gray-900 mt-2">
            AI Cybersecurity built to <br /> protect your data
          </h2>
          <p className="mt-4 text-gray-600">
            Equip your organization with the tools  and intelligence to <br /> anticipate threats, manage vulnerabilities and protect your <br />
             cloud, endpoint, and identity.
          </p>
          <button className="mt-6 px-4 py-2 bg-lime-300 text-black rounded-lg font-semibold hover:bg-lime-600 transition">
            Explore more
          </button>
        </div>
        </div> 
        <div className="flex-1 flex justify-center">
        <div className="relative w-90 h-90">
        <Image src={ori2} alt="ori11" className='rounded-2xl'   />
        </div>
        </div>
      </div>
    );
  }
 