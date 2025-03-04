import React from 'react'
import Image from 'next/image';
import whatisMeal from '@/../public/whatis-meal.svg';
import firstImage from '@/../public/meal-1.png';
import secondImage from '@/../public/meal-2.png';
import thirdImage from '@/../public/meal-3.png';

const Meal = () => {
  return (
    <div className='bg-[#F1FCF1] w-full relative overflow-hidden flex flex-row'>
        <div className='p-20 flex flex-col gap-7'>
        <Image 
            src={whatisMeal}
            alt='Random Line'
            className='w-max'
        />
        <div className='flex flex-col gap-2 w-full'>
            <p className='text-[28px] font-bold leading-[130%] text-[#393938]'>
                S’Meal is your go-to choice for healthy, delicious, and convenient meals on the move! 
            </p>
            <p className='text-2xl text-[#393938]'>
                Perfectly portioned and made with fresh, nutritious ingredients, S’meal keeps you energized throughout the day. Grab yours now at nearest <strong>KRL station in Jakarta!</strong>
            </p>
        </div>
        </div>
        <div className='w-full flex flex-col max-w-[40%]'>
            <Image 
                src={firstImage}
                alt='Random Line'
                className='w-full'
            />
            <Image 
                src={secondImage}
                alt='Random Line'
                className='w-full'
            />
            <Image 
                src={thirdImage}
                alt='Random Line'
                className='w-full'
            />
        </div>
    </div>
  )
}

export default Meal