import React from "react";
import { ChefHat } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Generate Recipies", href: "/imageUpload" },
  { name: "Contact", href: "/contact" },
];

export const FridgeMateHeader: React.FC = () => (
  <header className="w-full flex items-center justify-between mb-6 mt-0">
    
    {/* MAKE TITLE CLICKABLE */}
    <a href="/" className="flex items-center gap-2 cursor-pointer">
      <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg">
        <ChefHat className="w-6 h-6" />
      </div>
      <h1 className="text-2xl font-bold text-orange-600">FridgeMate</h1>
    </a>

    <div className="flex items-center">
      <nav className="hidden md:flex text-md text-gray-700">
        {NAV_LINKS.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="hover:text-orange-600 hover:bg-[#fff3e9] px-4 py-2 rounded-2xl"
          >
            {name}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

