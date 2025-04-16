"use client";

import Image from "next/image";
import Button from "./Button";
import PlayDemo from "./PlayDemo";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-12">
      {/* Bagian Kiri - Teks */}
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-sm font-bold text-orange-500 uppercase">
          Best Destinations Around The World
        </h3>
        <h1 className="text-5xl font-bold leading-tight">
          Travel, <span className="text-black-500">enjoy</span> and live a new and full life
        </h1>
        <p className="text-gray-600">
        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.        </p>

        {/* Tombol */}
        <div className="flex items-center space-x-6">
          <Button text="Find out more" />
          <PlayDemo />
        </div>
      </div>

      {/* Bagian Kanan - Gambar */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
        <Image
          src="/Traveller.png"
          alt="Traveler"
          width={500}
          height={500}
          className="mx-auto"
        />

        <Image
          src="/Pesawat-1.png"
          alt="Plane 1"
          width={100}
          height={100}
          className="absolute top-4 left-1"
        />

        <Image
          src="/Pesawat-2.png"
          alt="Plane 2"
          width={100}
          height={100}
          className="absolute top-10 right-4"
        />
      </div>
    </section>
  );
}
