import React from 'react'
import BannerImg from "../../assets/4547829.jpg"
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-aos="zoom-in">
                    <img className='max-w-[400px] h-[350px] w-full mx-auto object-cover' src={BannerImg} alt="banner img" />
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0'><h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% off</h1>
                <p data-aos="fade-up" className='text-sm-text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod soluta laborum vero rerum beatae quae quas nam. Ullam, facere voluptates. Ipsam, laudantium cum facilis voluptate libero molestiae officiis architecto id corrupti voluptatibus.</p>
                <div className='flex flex-cold gap-4'>
                    <div data-aos="fade-up" className='flex-items-center gap-4'>
                        <GrSecure className="text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                        <p>Quality Products</p>
                    </div>
                    <div data-aos="fade-up" className='gap-4 '>
                        <IoFastFood />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner