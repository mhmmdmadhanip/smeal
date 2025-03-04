import React from 'react'
import Image from 'next/image';
import firstHP from '@/../public/hp-1.png';
import secondHP from '@/../public/hp-2.png';
import thirdHP from '@/../public/hp-3.png';
import fourthHP from '@/../public/hp-4.png';
import fifthHP from '@/../public/hp-5.png';
import sixthHP from '@/../public/hp-6.png';
import bottomLine from '@/../public/bottom-line.svg';

const Process = () => {
  return (
    <div className="bg-[#7d7] min-h-screen w-full relative overflow-hidden items-center lg:items-start flex flex-col px-10 py-[73px] gap-10">
        <Image 
            src={bottomLine}
            alt='Random Line'
            className='w-full object-cover absolute top-[10%] lg:top-0 left-0'
        />
        <p className='text-white text-[32px] md:text-[56px] font-bold leading-[120%]'>
            Our Process
        </p>
        <div className='grid 2xl:grid-cols-6 lg:grid-cols-3 grid-cols-1 self-center gap-6 relative text-white font-bold sm:text-2xl leading-[120%] pb-20'>
            <div className='px-4 py-3 sm:px-7 sm:py-5 bg-[#259426] absolute h-fit 2xl:bottom-10 left-[-3rem] sm:left-[-9rem] 2xl:left-0'>
                <p>
                    Easy Packaging
                </p>
            </div>
            <div className='px-4 py-3 sm:px-7 sm:py-5 bg-[#34B335] absolute h-fit top-[30%] lg:bottom-[50%] 2xl:bottom-0 left-[-3rem] sm:left-[-8rem] 2xl:left-[16rem]'>
                <p>
                Scheduled Pick-Up
                </p>
            </div>
            <div className='px-4 py-3 sm:px-7 sm:py-5 bg-[#259426] absolute h-fit top-[15%] lg:top-0 2xl:bottom-10 right-[-3rem] sm:right-[-10rem] lg:left-[35rem] w-max'>
                <p>
                Flexible Payment
                </p>
            </div>
            <div className='px-4 py-3 sm:px-7 sm:py-5 bg-[#34B335] absolute h-fit top-[50%] lg:bottom-8 2xl:bottom-0 right-[-3rem] sm:right-[-7rem] 2xl:right-[23rem]'>
                <p>
                Pick-Up Station
                </p>
            </div>
            <div className='px-4 py-3 sm:px-7 sm:py-5 bg-[#259426] absolute h-fit bottom-[20%] lg:bottom-10 left-[-3rem] sm:left-[-10rem] 2xl:right-10'>
                <p>
                Transparent Nutritiont
                </p>
            </div>
            <Image 
                src={firstHP}
                alt='Hp Pertama'
                width={220}
                height={400}
            />
            <Image 
                src={secondHP}
                alt='Hp Pertama'
                width={220}
                height={400}
            />
            <Image 
                src={thirdHP}
                alt='Hp Pertama'
                width={220}
                height={400}
            />
            <Image 
                src={fourthHP}
                alt='Hp Pertama'
                width={220}
                height={400}
            />
            <Image 
                src={fifthHP}
                alt='Hp Pertama'
                width={220}
                height={400}
            />
            <Image 
                src={sixthHP}
                alt='Hp Pertama'
                width={220}
                height={400}
            />
        </div>
    </div>
  )
}

export default Process