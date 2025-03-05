import React from 'react'
import Image from 'next/image';
import dimsum from '@/../public/dimsum.png'
import roti from '@/../public/roti.png'
import mieAyam from '@/../public/mie-ayam.png'
import tansu from '@/../public/tansu.png'
import bakmi from '@/../public/bakmi.png'
import Link from 'next/link';

const Menu = () => {
  return (
    <div className='w-full flex flex-col min-h-screen relative bg-white items-center py-28'>
        <div className="top-0 absolute inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#77DD77] to-[#259426] rounded-b-full w-[120%] h-[410px] mx-auto" />

        <div className='flex flex-col gap-20 z-[1] items-center '>
            <p className='text-white text-6xl font-bold leading-[150%]'>
                Our Menu
            </p>
            <div className='flex flex-wrap justify-center gap-5'>
                <div className='flex flex-col rounded-b-[15px] items-center bg-card w-[220px]'>
                    <Image 
                        src={dimsum}
                        alt='Dimsum Bakar'
                        className='w-full h-full'
                    />
                    <p className='text-xl -mt-12 font-bold leading-[150%] text-[#092A0B] p-7 max-w-[200px] text-center'>
                        Dimsum Bakar Difar Tebet
                    </p>
                </div>
                <div className='flex flex-col rounded-b-[15px] items-center bg-card w-[220px]'>
                    <Image 
                        src={roti}
                        alt='Roti'
                        className='w-full h-full'
                    />
                    <p className='text-xl -mt-12 font-bold leading-[150%] text-[#092A0B] p-7 max-w-[200px] text-center'>
                        Roti Lauw
                    </p>
                </div>
                <div className='flex flex-col rounded-b-[15px] items-center bg-card w-[220px]'>
                    <Image 
                        src={mieAyam}
                        alt='Mie Ayam Yamin Tirtayasa'
                        className='w-full h-full'
                    />
                    <p className='text-xl -mt-12 font-bold leading-[150%] text-[#092A0B] p-7 max-w-[200px] text-center'>
                        Mie Ayam Yamin Tirtayasa
                    </p>
                </div>
                <div className='flex flex-col rounded-b-[15px] items-center bg-card w-[220px]'>
                    <Image 
                        src={tansu}
                        alt='Ketan Susu Kemayoran'
                        className='w-full h-full'
                    />
                    <p className='text-xl -mt-12 font-bold leading-[150%] text-[#092A0B] p-7 max-w-[200px] text-center'>
                        Ketan Susu Kemayoran
                    </p>
                </div>
                <div className='flex flex-col rounded-b-[15px] items-center bg-card w-[220px]'>
                    <Image 
                        src={bakmi}
                        alt='Bakmi Roxy'
                        className='w-full h-full'
                    />
                    <p className='text-xl -mt-12 font-bold leading-[150%] text-[#092A0B] p-7 max-w-[200px] text-center'>
                        Bakmi Roxy
                    </p>
                </div>
            </div>
            <Link
                href={"https://wa.me/087782298166"}
                target="_blank"
                rel="noopener noreferrer"
                className="link-navbar flex items-center justify-center px-9 text-white font-medium leading-[150%] py-2 w-fit h-fit"
            >
                Order Here
            </Link>
        </div>
    </div>
  )
}

export default Menu