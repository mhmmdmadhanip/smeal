import React from 'react'
import Image from 'next/image';
import whatisMeal from '@/../public/whatis-meal.svg';
import firstImage from '@/../public/meal-1.png';
import secondImage from '@/../public/meal-2.png';
import thirdImage from '@/../public/meal-3.png';

const Meal = () => {
  return (
    <div className='bg-[#F1FCF1] w-full relative overflow-hidden flex flex-col md:flex-row'>
        <div className='py-20 px-4 md:p-20 flex flex-col gap-7'>
        <Image 
            src={whatisMeal}
            alt='Random Line'
            className='w-max'
        />
        <div className='flex flex-col gap-3 md:gap-2 w-full'>
            <p className='text-[18px] md:text-[28px] font-bold leading-[130%] text-[#393938]'>
                S’Meal adalah solusi terbaik bagi para komuter untuk mendapatkan makanan kekinian yang berkualitas dengan mudah!
            </p>
            <p className='text-sm md:text-2xl text-[#393938]'>
            Dengan menyesuaikan menu berdasarkan preferensi pelanggan, S’Meal memastikan bahwa komuter dapat menikmati makanan favorit mereka tanpa harus berjalan jauh dari stasiun atau kereta, sehingga perjalanan menjadi lebih praktis dan nyaman.
            </p>
        </div>
        </div>
        <div className='w-full flex flex-col md:max-w-[40%]'>
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