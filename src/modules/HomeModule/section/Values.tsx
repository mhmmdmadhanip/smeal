"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import workMan from "@/../public/going-to-work.svg";
import appreciation from "@/../public/appreciation-1.svg";
import salad from "@/../public/salad-1.svg";
import topLeft from "@/../public/top-left.png";
import bottomLeft from "@/../public/bottom-left.png";
import topRight from "@/../public/top-right.png";
import bottomRight from "@/../public/bottom-right.png";

const Values = () => {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power3.out" } });

    tl.from(topLeftRef.current, { x: -100, y: -100, opacity: 0 })
      .from(topRightRef.current, { x: 100, y: -100, opacity: 0 }, "-=1")
      .from(bottomLeftRef.current, { x: -100, y: 100, opacity: 0 }, "-=1")
      .from(bottomRightRef.current, { x: 100, y: 100, opacity: 0 }, "-=1");

  }, []);

  return (
    <div className="bg-white w-full relative overflow-hidden flex flex-col py-[120px] items-center justify-center gap-20 px-40">
      <Image
        ref={topLeftRef}
        src={topLeft}
        alt="Top Left Decoration"
        className="absolute -mt-20 top-0 left-0 w-full max-w-[300px]"
      />

      <Image
        ref={topRightRef}
        src={topRight}
        alt="Top Right Decoration"
        className="absolute top-0 right-0 w-full max-w-[300px]"
      />

      <Image
        ref={bottomLeftRef}
        src={bottomLeft}
        alt="Bottom Left Decoration"
        className="absolute bottom-0 left-0 w-full max-w-[300px]"
      />

      <Image
        ref={bottomRightRef}
        src={bottomRight}
        alt="Bottom Right Decoration"
        className="absolute bottom-0 right-0 w-full max-w-[300px]"
      />

      <p className="text-[#7D7] text-6xl leading-[120%] font-bold z-10">
        Our Values
      </p>

      <div className="flex flex-row gap-10 z-10">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            src={workMan}
            alt="Going to Work"
            className="w-full max-w-[150px]"
          />
          <p className="text-[32px] text-[#092A0B] leading-[120%] font-bold">
            Practical
          </p>
          <p className="text-[#777675] font-medium leading-[150%] text-center">
            S’Meal offers quick, hassle-free meals, perfect for your busy
            lifestyle.
          </p>
        </div>

        <div></div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            src={appreciation}
            alt="Appreciation"
            className="w-full max-w-[150px]"
          />
          <p className="text-[32px] text-[#092A0B] leading-[120%] font-bold">
            Delicious
          </p>
          <p className="text-[#777675] font-medium leading-[150%] text-center">
            Enjoy every bite with S’Meal’s flavorful and satisfying taste.
          </p>
        </div>

        <div></div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <Image src={salad} alt="Salad" className="w-full max-w-[150px]" />
          <p className="text-[32px] text-[#092A0B] leading-[120%] font-bold">
            Nutritious
          </p>
          <p className="text-[#777675] font-medium leading-[150%] text-center">
            Packed with fresh, wholesome ingredients to keep you fueled and
            healthy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;