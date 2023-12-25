"use client"
import { useState } from "react"
import { IoMenuSharp } from "react-icons/io5";
export default function Navbar() {
    const [navigation] = useState([
        {
          title: "خدماتنا",
          direction: "/services",
        },
        {
          title: "ارائكم",
          direction: "/feedback",
        },
        {
          title: "اربح معنا",
          direction: "/affiliate",
        },
        {
          title: "تواصل معنا",
          direction: "/contact",
        },
      ]);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return(
        <nav className="bg-neutral-800 w-full p-3 sm:p-5" >
        <div id="navigation" className="flex items-center justify-between sm:justify-start">
          <h2 className="font-bold text-white ml-2 sm:ml-12" id="logo">
            Blade<span className="text-[#27B863]">2</span>Dev
          </h2>
          {/* Desktop navigation */}
          <ul className="hidden sm:flex flex-col sm:flex-row ">
            {navigation.map((item, index) => (
              <li key={index} className="my-2  sm:my-0">
                <a
                  href={item.direction}
                  className="text-white text-lg ml-2 sm:ml-5 duration-300 hover:text-stone-500"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile dropdown */}
          <div className="sm:hidden relative">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            ><IoMenuSharp size={30} className="mr-2 mt-2"/>
            </button>
            {isMobileMenuOpen && (
              <ul className="absolute top-full left-0 bg-neutral-800 border border-neutral-600 px-12 py-6 ">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.direction}
                      className="text-white block py-2 transition duration-300 hover:text-stone-500"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    )
}