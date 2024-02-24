import React, { useState } from 'react'
import Logo from "../../assets/images/logo.jpg"
const SignUpPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const setView = (index) => setActiveIndex(index);
    const items = [
        { title: "Time & Materials", },
        {
          title: "Fixed Fee",
        },
        {
          title: "Non-Billable",
        },
      ];
  return (
    <div className='bgImg'>
        <div className='flex justify-between items-center md:w-3/5 w-full  mx-auto py-3 pt-6 px-4'>
            <img src={Logo} className='w-14 h-12' alt='logo' />
            <h3 className='text-white text-lg'>Create an Account</h3>
            <p className='text-sm text-white'>Contact Us</p>
        </div>
        <div className='md:w-3/5 w-full mx-auto'>
        <div className=" w-full rounded-t-[40px] flex mt-2 bg-gray-50">
          {items.map((el, index) => {
            return (
              <div
                key={el.title}
                className={`${
                  index === activeIndex
                    ? `bg-blue-500 bg-gradient-to-r from-sky-300 to-blue-600 text-white font-normal border ${activeIndex===0 && "rounded-tl-[50px]" } ${activeIndex!==items?.length-1 &&"rounded-r-[50px]"}`
                    : index<activeIndex?"bg-gradient-to-r from-blue-50 to-blue-300 text-white":"bg-gray-50 text-gray-400  hover:bg-white  "
                } ${index===0 && "rounded-tl-[30px]" } ${
                  index === items?.length - 1 ? "rounded-tr-[30px]" : ""
                } py-5 px-3 w-full  cursor-pointer  text-sm font-medium  flex justify-center items-center  `}
                onClick={() => {
                  setView(index);
                }}
              >
              <span className="rounded-full bg-gray-500 border w-6  h-6 flex justify-center items-center  text-xs">{index+1}</span>  <span>{el.title}</span>{" "}
              </div>
            );
          })}
        </div>
        </div>
    </div>
  )
}

export default SignUpPage