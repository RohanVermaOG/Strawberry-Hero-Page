import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const [Open, setOpen] = useState(true);

 
  return (
    <main className="bg-primaryDark  md:py-6 md:px-12">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl  shadow-md">
        <div className="container text-white  pt-2">
          <Navbar setOpen={setOpen} Open={Open} />
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 min-h-[650px] place-items-center ml-3">
            {/* text container  */}
            <div className="space-y-4  p-4 md:mt-0 ">
              <h1 className="text-3xl pl-6 md:pl-14">01_______</h1>
              <h1 className="text-5xl font-bold uppercase text-shadow">
                A Healthy Fruit
              </h1>
              <p>
                Strawberries contain anthocyanins, which may help reduce the
                risk of heart attack, stroke, and heart disease.
              </p>
              <button className="border border-white px-4 py-2 rounded-lg">
                Shop Now
              </button>
            </div>
            {/* image container  */}
            <div className="z-30 ">
              <img
                className="img-shadow"
                src="https://github.com/dilshad-ahmed/strawberry-hero/blob/main/src/assets/strawberry.png?raw=true"
                alt=""
              />
            </div>
            {/* blank container  */}
            <div className="md:hidden"></div>
          </div>
        </div>
        <h1 className="text-center text-white font-bold  text-[150px] xl:text-[180px]  absolute bottom-0 w-full  text-shadow  ">
          BERRIES
        </h1>
        {/* Hamburger section  */}
        {Open && (
          <div className="absolute top-0 right-0 w-[120px]  h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white flex flex-col justify-center items-center gap-6">
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedinIn className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
