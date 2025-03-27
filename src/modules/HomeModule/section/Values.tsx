"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import workMan from "@/../public/going-to-work.svg";
import appreciation from "@/../public/appreciation-1.svg";
import salad from "@/../public/salad-1.svg";
import commuter from "@/../public/commuter.svg";
import timeSuccess from "@/../public/time-success.svg";
import topLeft from "@/../public/top-left.png";
import bottomLeft from "@/../public/bottom-left.png";
import topRight from "@/../public/top-right.png";
import bottomRight from "@/../public/bottom-right.png";

const Values = () => {
  const sectionRef = useRef(null);
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Triggers when 80% of the section is in view
        end: "bottom 50%",
        toggleActions: "play none none none", // Play animation once when in view
      },
      defaults: { duration: 1.2, ease: "power3.out" },
    });

    tl.from(topLeftRef.current, { x: -100, y: -100, opacity: 0 })
      .from(topRightRef.current, { x: 100, y: -100, opacity: 0 }, "-=1")
      .from(bottomLeftRef.current, { x: -100, y: 100, opacity: 0 }, "-=1")
      .from(bottomRightRef.current, { x: 100, y: 100, opacity: 0 }, "-=1");

  }, []);

  return (
    <div ref={sectionRef} className="bg-white w-full relative overflow-hidden flex flex-col py-[120px] items-center justify-center gap-20 px-6 md:px-40">
      <Image
        ref={topLeftRef}
        src={topLeft}
        alt="Top Left Decoration"
        className="absolute -mt-20 top-0 left-0 w-full max-w-[150px] md:max-w-[300px]"
      />

      <Image
        ref={topRightRef}
        src={topRight}
        alt="Top Right Decoration"
        className="absolute top-0 right-0 w-full max-w-[150px] md:max-w-[300px]"
      />

      <Image
        ref={bottomLeftRef}
        src={bottomLeft}
        alt="Bottom Left Decoration"
        className="absolute bottom-0 left-0 w-full max-w-[150px] md:max-w-[300px]"
      />

      <Image
        ref={bottomRightRef}
        src={bottomRight}
        alt="Bottom Right Decoration"
        className="absolute bottom-0 -right-[3rem] md:right-0 w-full max-w-[200px] md:max-w-[300px]"
      />

      <p className="text-[#7D7] text-[2rem] md:text-6xl leading-[120%] font-bold z-10">
        Nilai Kami
      </p>

      <div className="flex flex-col justify-center px-12 gap-10 z-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-2 md:gap-4 items-center justify-center max-w-xs">
            <Image
              src={commuter}
              alt="Going to Work"
              className="w-full max-w-[75px] md:max-w-[150px]"
            />
            <p className="text-[24px] md:text-[32px] text-[#092A0B] leading-[120%] font-bold text-center">
            Kemudahan bagi Komuter
            </p>
            <p className="text-[#777675] font-medium leading-[150%] text-center">
            Dapatkan makanan tanpa harus berjalan jauh dari stasiun atau kereta.
            </p>
          </div>

          <div className="w-1 bg-[#DFF9DF]"></div>

          <div className="flex flex-col gap-2 md:gap-4 items-center justify-center max-w-xs">
            <Image
              src={appreciation}
              alt="Appreciation"
              className="w-full max-w-[75px] md:max-w-[150px]"
            />
            <p className="text-[24px] md:text-[32px] text-[#092A0B] leading-[120%] font-bold text-center">
            Kualitas
            </p>
            <p className="text-[#777675] font-medium leading-[150%] text-center">
            Beragam pilihan hidangan kekinian yang disesuaikan dengan preferensi pelanggan.
            </p>
          </div>

          <div className="w-1 bg-[#DFF9DF]"></div>

          <div className="flex flex-col gap-2 md:gap-4 items-center justify-center max-w-xs">
            <Image
              src={workMan}
              alt="Going to Work"
              className="w-full max-w-[75px] md:max-w-[150px]"
            />
            <p className="text-[24px] md:text-[32px] text-[#092A0B] leading-[120%] font-bold text-center">
            Cepat Saji 
            </p>
            <p className="text-[#777675] font-medium leading-[150%] text-center">
            Memastikan makanan disajikan tepat waktu dan dalam kondisi higienis.
            </p>
          </div>

          <div className="w-1 bg-[#DFF9DF]"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div className="flex flex-col gap-2 md:gap-4 items-center justify-center max-w-xs">
            <Image 
            src={salad} 
            alt="Salad" 
            className="w-full max-w-[75px] md:max-w-[150px]"
            />
            <p className="text-[24px] md:text-[32px] text-[#092A0B] leading-[120%] font-bold text-center">
            Kemudahan Pembayaran
            </p>
            <p className="text-[#777675] font-medium leading-[150%] text-center">
            Memungkinkan transaksi dengan berbagai metode pembayaran digital.
            </p>
          </div>

          <div className="w-1 bg-[#DFF9DF]"></div>

          <div className="flex flex-col gap-2 md:gap-4 items-center justify-center max-w-xs">
            <Image 
            src={timeSuccess} 
            alt="Time Success" 
            className="w-full max-w-[75px] md:max-w-[150px]"
            />
            <p className="text-[24px] md:text-[32px] text-[#092A0B] leading-[120%] font-bold text-center">
            Efisiensi
            </p>
            <p className="text-[#777675] font-medium leading-[150%] text-center">
            Mengurangi waktu tunggu dalam mencari makanan saat bepergian.
            </p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Values;