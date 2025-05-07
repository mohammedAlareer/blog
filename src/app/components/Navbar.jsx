import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="w-full bg-slate-600 p-4 sticky top-0 drop-shadow z-10">
      <div className=" flex justify-evenly flex-col sm:flex-row ">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 sm:mb-0">
          <Link href="/" 
          className="text-white/90 hover:text-white transition duration-200 ease-in-out">
            Mohammed Alareer
          </Link>
        </h1>
        <div className="flex gap-4
        text-white text-4xl">
          <Link className="text-gray-800 hover:text-white
           hover:scale-110 transition-all 
          duration-200 ease-in-out" href="https://github.com/" target="_blank"><FaGithub /></Link>
          <Link className="text-sky-500 hover:text-white hover:scale-110 transition-all 
          duration-200 ease-in-out" href="https://twitter.com/" target="_blank"><FaTwitter /></Link>
          <Link className="text-red-600 hover:text-white hover:scale-110 transition-all 
          duration-200 ease-in-out" href="https://youtube.com/" target="_blank"><FaYoutube /></Link>
          <Link className="text-teal-500 hover:text-white hover:scale-110 transition-all 
          duration-200 ease-in-out" href="#"><FaLaptop /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
