import React from "react";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="w-full h-screen">
      <Image
        className="h-[90%] w-full object-cover rounded-b-3xl"
        src={"/assets/paisagem/paisagem.jpg"}
        alt="paisagem"
        width={2000}
        height={1000}
      />
    </section>
  );
};
