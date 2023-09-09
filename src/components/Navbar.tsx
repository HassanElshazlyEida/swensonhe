import React, { useEffect } from "react";
import {  Collapse, Dropdown, initTE } from "tw-elements";

 
const Navbar = () => {

    useEffect(() => {
       initTE({ Collapse, Dropdown });
      }, []);

  return (
<nav
  className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 bg-gray-900	">
  <div className="flex w-full flex-wrap items-center justify-between px-3">

    <button
      className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation">
    
      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
      </span>
    </button>


    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-te-collapse-item>
    
      <a
        className=" text-slate-50	 mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
        href="#">
       <span  style={{
                color:"rgb(93, 163, 169)"
            }}> Event</span> PROS
      </a>
    
     
    </div>


    <div className="!visible hidden basis-[100%] items-center lg:!flex lg:basis-auto relative flex items-center"
    data-te-collapse-item
    id="navbarSupportedContent1"
    >

    
      <div
        className="relative "
        data-te-dropdown-ref
        data-te-dropdown-alignment="end">
      
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="text-slate-50	 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
          Event Builder
        </button>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="text-slate-50	0 mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
          Saved
        </button>
        <a href="#"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full hidden md:inline-block"
        style={{
            backgroundColor:"rgb(93, 163, 169)"
        }}>
            Contact Us
        </a>
    
      </div>
    </div>
  </div>
</nav>
  
  );
};

export default Navbar;