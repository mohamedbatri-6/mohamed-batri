import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-xl font-bold">Netgo</h1>
      <ul className="flex space-x-6">
        <li><Link href="">Products</Link></li>
        <li><Link href="">Solutions</Link></li>
        <li><Link href="">PartnersSS</Link></li>
        <li><Link href="">PricingSS</Link></li>
      </ul>
      <div className="space-x-4">
        <button className="text-gray-700">Login</button>
        <button className="bg-green-500 text-black px-4 py-2 rounded-2xl">Sign Up</button>
      </div>
    </nav>
  );
}
