'use client'
import React from 'react';
import HeroHome from './section/Hero';
import Meal from './section/Meal';
import Values from './section/Values';
import Process from './section/Process';
import Menu from './section/Menu';

const HomeModule = () => {
  return (
    <div className='min-h-screen w-full relative'>
      <HeroHome />
      <Meal />
      <Values />
      <Process />
      <Menu />
    </div>
  );
}

export default HomeModule;
