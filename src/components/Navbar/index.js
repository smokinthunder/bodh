import Image from "next/image";

import { Button } from "@/components/ui/button";

import Link from "next/link";

const isAuthUser = true;

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center cursor-pointer">
          <span className="self-center whitespace-nowrap">
            <Image
              src="/assets/Bodhi Creations 3.png"
              alt="Bodhi Creations"
              width={115}
              height={64}
            />
          </span>
        </div>
        <div className="flex md:order-2 gap-2">
          {isAuthUser ? (
            <Link href="/login">
              {" "}
              <Button className="bg-black text-white" variant="outline">
                Login
              </Button>
            </Link>
          ) : (
            <Button className="bg-black text-white" variant="outline">
              Logout
            </Button>
          )}
        </div>

        <div
          className="items-center justify-between w-full md:flex md:w-auto"
          id="nav-items"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
              <Link href="/product">Products</Link>
            </li>
            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
              <Link href="/about">About Us</Link>
            </li>
            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}