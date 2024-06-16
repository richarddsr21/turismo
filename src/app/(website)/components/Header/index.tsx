import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="bg-black">
        <Image
          src="/assets/logo/logo-turismo.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div>
        <Link className="bg-blue" href="#">
          Login
        </Link>
        <Link className="" href="#">
          Register
        </Link>
      </div>
    </header>
  );
};
