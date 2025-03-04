'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import randomLine from '@/../public/random-line.svg';
import mealHero from '@/../public/meal-hero.webp';
import HeroTag from '../../../../public/HeroTag';

const HeroHome = () => {
  const mealHeroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(mealHeroRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <div className='bg-[#259426] h-screen w-full relative pt-20 overflow-hidden'>
      <Image 
        src={randomLine}
        alt='Random Line'
        className='w-full object-cover absolute bottom-0'
      />

      <div className='h-full w-full flex flex-col items-center justify-end gap-12 pt-20'>
        <HeroTag />
        <Image 
          ref={mealHeroRef}
          src={mealHero}
          alt='Meal Hero'
          className='max-w-[923px] object-cover z-[1] opacity-0'
        />
      </div>
    </div>
  );
}

export default HeroHome;
