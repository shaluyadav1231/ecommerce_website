import React from 'react'
import {IoMdSearch} from "react-icons/io";
import {FaCartShopping} from "react-icons/fa6";
import {FaCaretDown} from "react-icons/fa";
import {FiShoppingBag} from "react-icons/fi";

const Menu =[
    {
        id:1,
        name:'home',
        link:"/#"

    },
        {
        id:2,
        name:'Top Rated',
        link:"/#services"

    },
        {
        id:3,
        name:'Kids War',
        link:"/#"

    },
        {
        id:4,
        name:'Mens Wear',
        link:"/#"

    },
        {
        id:5,
        name:'Electronics',
        link:"/#"

    },
];

const Dropdowm=[
    {
        id:2,
        name:"Tranding Products",
        link:"/#",
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#",
    },
]


const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='shadow-md bg-white dark:bg-text-white duration-200 relative z-40' >
        <div className='bg-primary/40 py-2'>
             <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold text-xl items-center flex gap-1'>
                        <FiShoppingBag size='30' />
                        ShopeMe
                    </a>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='Search'className='w-[200px] sm:w-[200px] w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 test-sm focus:border-primary dark:border-gray-500
                        dark:bg-slate-800' />
                        <IoMdSearch className='text-slate-800 group-hover:text-primary absolute top-1/2 -translate-x-1/2 right-3 '/>
                    </div>
                    <button onClick={()=>{
                        handleOrderPopup()
                    }}
                    className='bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full  flex item-center gap-3 group'
                    >
                        <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                    </button>
                </div>
             </div>
        </div>

    </div>
  )
}

export default Navbar