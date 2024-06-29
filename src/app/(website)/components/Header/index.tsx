import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between md:px-24">
        <div className="max-md:hidden">
          <Image
            src="/assets/logo/logo-turismo.png"
            alt="Logo"
            width={80}
            height={72}
          />
        </div>
        <div className="md:hidden">
          <Menu strokeWidth={2.25} />
          <X strokeWidth={2.25} />
        </div>
        <div className="max-md:hidden text-white">
          <Link href="#">Home</Link>
          <Link className="mx-4" href="#">
            Destinos
          </Link>
          <Link href="#">Depoimentos</Link>
        </div>
        <div>
          <Link
            className="bg-primary-blue text-white rounded-lg px-4 py-2"
            href="#"
          >
            Login
          </Link>
          <Link
            className="bg-primary-orange text-white ml-4 rounded-lg px-4 py-2"
            href="#"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};
