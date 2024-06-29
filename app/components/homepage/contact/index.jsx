// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaLeetcode } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* {
          (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY) ? <ContactWithCaptcha />
            : <ContactWithoutCaptcha />
        } */}
        {/* <ContactWithCaptcha /> */}

        <div className="lg:w-10 ">
        <div className="">
      {/* <p className="font-medium mb-5 text-[#E126FA] text-xl uppercase">
        Contact me
      </p>
      <div className="max-w-3xl text-white  p-3 lg:p-5">
        <p className="text-lg text-[#d3d8e8]" size={36}>
          {"Feel free to contact me "}
        </p>
      
      </div> */}

<div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md" style={{fontSize:"1.80rem",width:"100%"}}>
            Stay in touch 
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
        <br></br>
        <h1 className="text-sm md:text-xl flex items-center gap-3">Feel free to contact me at </h1>
      </div>
      <br></br><br></br>
    </div>

    
    <div className="flex flex-col gap-5 lg:gap-9" style={{textAlign:"center"}}>
    
            <p className="text-sm md:text-x flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#E126FA] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-x flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#E126FA] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p>

            
            <p className="text-sm md:text-x flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#E126FA] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
           
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#E126FA] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.devio}>
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#E126FA] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.instagram}>
              <FaInstagram
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#E126FA] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;