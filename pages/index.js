import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
} from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaGraduationCap, FaRegCalendarAlt } from "react-icons/fa";
import { MdWork, MdOutlineMail } from "react-icons/md";
import deved from "../public/Mag.jpg";
import kmuttlogo from "../public/KMUTT_LOGO.png";
import Image from "next/image";
import mission from "../public/mission.png";
import thesis1 from "../public/thesis1.png";
import { Link } from "react-scroll";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Thanapit Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white dark:bg-gray-900 ">
        <main
          id="Home"
          className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40 container mx-auto"
        >
          <nav className="py-5 mb-12 flex justify-between sticky top-0 z-50 bg-white dark:text-white dark:bg-gray-900">
            <h1 className="text-xl font-burtons">Portfolio</h1>
            <div className="flex gap-5">
              <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                  <AiOutlineClose size={20} className="cursor-pointer" />
                ) : (
                  <AiOutlineMenu size={20} className="cursor-pointer" />
                )}
              </div>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkmode)}
                className="cursor-pointer text-2xl block md:hidden"
              />
            </div>
            <ul className="hidden md:flex gap-5 items-center">
              <li>
                <a href="#Home" className="hover:text-teal-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#My-Skill" className="hover:text-teal-600">
                  My-Skill
                </a>
              </li>
              <li>
                <a href="#Education" className="hover:text-teal-600">
                  Education
                </a>
              </li>
              <li>
                <a href="#EXPERIENCE" className="hover:text-teal-600">
                  Experience
                </a>
              </li>
              <li>
                <a href="#My-Work" className="hover:text-teal-600">
                  My-Work
                </a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-teal-600">
                  Contact
                </a>
              </li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkmode)}
                className="cursor-pointer text-2xl"
              />
            </ul>
            <ul
              className={
                nav
                  ? "fixed left-0 top-0 w-[60%] h-full bg-gray-900 ease-in-out duration-500 text-white dark:bg-white dark:text-gray-800"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <h1 className="p-4 text-xl font-burtons">Portfolio</h1>
              <li className="p-4 border-b border-gray-600">
                <a href="#Home" onClick={handleNav}>
                  Home
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#My-Skill" onClick={handleNav}>
                  My-Skill
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#Education" onClick={handleNav}>
                  Education
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#EXPERIENCE" onClick={handleNav}>
                  EXPERIENCE
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#My-Work" onClick={handleNav}>
                  My-Work
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#Contact" onClick={handleNav}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <section className="min-h-screen">
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Thanapit Srisupa
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Frontend Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl text-left indent-8">
                Hi! my name is Thanapit Srisupa.my nickname is maggie.I'm 23
                year old.I'm graduate from kmutt.I have experience Frontend from
                internship and project in from university. This is my
                Portfolio.Let see
              </p>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </section>

          <section id="My-Skill" className="p-10 py-10">
            <h2 className="text-center text-5xl p-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl my-10">
              My-Skill
            </h2>
            <div className="md:flex md:justify-center md:gap-10">
              <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 p-5 my-3 mx-auto md:mx-0">
                <h3 className="text-xl md:text-2xl text-center my-3 dark:text-white">
                  Frontend Developer
                </h3>
                <div className="flex justify-center gap-5 dark:text-gray-200">
                  <div className="text-md md:text-xl">
                    <p className="p-1 flex items-center">
                      <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                      HTML
                    </p>
                    <p className="p-1 flex items-center">
                      <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                      CSS
                    </p>
                    <p className="p-1 flex items-center">
                      <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                      JavaScript
                    </p>
                    <p className="p-1 flex items-center">
                      <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                      Typescript
                    </p>
                  </div>
                  <div className="text-md md:text-xl">
                    <p className="p-1 flex items-center">
                      <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                      React.Js
                    </p>
                    <p className="p-1 flex items-center">
                      <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                      Next.Js
                    </p>
                    <p className="p-1 flex items-center">
                      <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                      Bootstrap5
                    </p>
                    <p className="p-1 flex items-center">
                      <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                      Tailwind css
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 p-5 my-3 mx-auto md:mx-0">
                <h3 className="text-xl md:text-2xl text-center my-3 dark:text-white">
                  Backend Developer
                </h3>
                <div className="flex flex-col text-md md:text-xl mx-16 dark:text-gray-200">
                  <p className="p-1 flex items-center">
                    <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                    NodeJs
                  </p>
                  <p className="p-1 flex items-center">
                    <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                    ExpressJs
                  </p>
                  <p className="p-1 flex items-center">
                    <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                    MySql
                  </p>
                  <p className="p-1 flex items-center">
                    <BsFillPatchCheckFill className="mr-2"></BsFillPatchCheckFill>
                    Firebase
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="Education" className="my-5 p-10">
            <h2 className="text-5xl p-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl text-center my-10">
              Education
            </h2>
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl md:text-2xl p-2 flex items-center dark:text-white">
                <FaGraduationCap className="mr-2"></FaGraduationCap>King
                Mongkut's University of Technology Thonburi
              </h3>
              <div className="flex">
                <p className="text-md md:text-xl text-teal-600 dark:text-teal-400 p-2 whitespace-nowrap flex items-center">
                  <FaRegCalendarAlt className="mr-2 text-black"></FaRegCalendarAlt>
                  2018-2022
                </p>
                <p className="text-md md:text-xl p-2 w-100 dark:text-gray-200">
                  Degree of the Bachelor of Science in the field of Applied{" "}
                  <span className="text-teal-600 dark:text-teal-400">
                    Computer Science-Multimedia
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section id="EXPERIENCE" className="my-5 p-10">
            <h2 className="text-center text-5xl p-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl my-10">
              Work Experience
            </h2>
            <div className="max-w-lg mx-auto dark:text-gray-200">
              <h3 className="text-xl md:text-2xl p-2 flex items-center">
                <MdWork className="mr-2"></MdWork>Intern at mission to the moon
                co.
              </h3>
              <div className="flex">
                <p className="text-md md:text-xl text-teal-600 dark:text-teal-400 p-2 whitespace-nowrap flex items-center">
                  <FaRegCalendarAlt className="mr-2 text-black dark:text-gray-200"></FaRegCalendarAlt>
                  1 JUN. - 1 AUG. 2021
                </p>
                <p className="text-md md:text-xl p-2 w-100">
                  Wordpress Frontend
                </p>
              </div>
            </div>
          </section>

          <section id="My-Work" className="my-5 p-10">
            <h2 className="text-center text-5xl p-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl my-10">
              My-Work
            </h2>
            <div className="bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700 p-5 my-5 mx-auto max-w-5xl dark:text-gray-200">
              <h3 className="text-center text-xl md:text-3xl p-2 dark:text-white">
                Project : Website sell vegetables and meat products
              </h3>
              <div className="mx-auto rounded-md md:max-w-screen-md shadow-md">
                <div className="relative overflow-hidden pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/KWn_NbjULNk?si=dJ2AnDzRIou7DXNx"
                    title="Embedded Content"
                    allowFullScreen
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <div className="p-2 text-md md:text-xl text-center">
                <p className="p-2">Language: Html Css Js C# ASP.Net</p>
                <ul>
                  <li className="p-2">- Front-end Responsive (bootstrap)</li>
                  <li className="p-2">- Database connection mysql</li>
                  <li className="p-2">- Back-end Search function</li>
                  <li className="m-2">
                    <button>
                      <a
                        href="https://github.com/MmMazino/E-commerce"
                        className="hover:text-red-400 inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:teal-400 hover:shadow-lg focus:teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Link github
                      </a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700 p-5 my-5 mx-auto max-w-5xl dark:text-gray-200">
              <h3 className="text-center text-xl md:text-3xl p-2 dark:text-white">
                Intern : Website mission to the moon.
              </h3>
              <div className="p-2 lg:grid lg:grid-cols-2">
                <div className="mx-auto rounded-md md:max-w-screen-md shadow-md">
                  <Image src={mission} className="rounded-md" />
                </div>
                <div className="p-2 text-md md:text-xl">
                  <p className="p-2">Language: Html Css Js</p>
                  <ul>
                    <li className="p-2">- Change design ux/ui of homepage</li>
                    <li className="p-2">- Edit html css from design</li>
                    <li className="p-2">- Pagespeed optimization</li>
                    <li className="m-2">
                      <button>
                        <a
                          href="https://missiontothemoon.co/"
                          className="hover:text-red-400 inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:teal-400 hover:shadow-lg focus:teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Link เว็บ
                        </a>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700 p-5 my-5 mx-auto max-w-5xl">
              <h3 className="text-center text-xl md:text-3xl p-2 dark:text-white">
                Thesis : Website Ontheway
              </h3>
              <div className="p-2 lg:grid lg:grid-cols-2 dark:text-gray-200">
                <div className="mx-auto  rounded-md md:max-w-screen-md">
                  <Image src={thesis1} className="rounded-md shadow-md" />
                </div>
                <div className="p-2 text-md md:text-xl">
                  <p className="p-2">Language: Reactjs Bootstrap</p>
                  <ul>
                    <li className="p-2">- FullStack Develop</li>
                    <li className="p-2">- Responsive Website</li>
                    <li className="p-2">- Connect firebase</li>
                    <li className="m-2">
                      <button>
                        <a
                          href="https://iqdeq-finalproject.firebaseapp.com"
                          className="hover:text-red-400 inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:teal-400 hover:shadow-lg focus:teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Link ผลงาน
                        </a>
                      </button>
                    </li>
                    <li className="m-2">
                      <a
                        href="https://github.com/MmMazino/Thesis-dq"
                        className="hover:text-red-400  inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:teal-400 hover:shadow-lg focus:teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Link github
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="Contact" className="p-10 py-20">
            <h2 className="text-center text-5xl p-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl my-10">
              Contact
            </h2>
            <div className="bg-white shadow-md rounded-lg max-w-md dark:bg-gray-800 dark:border-gray-700 p-5 my-3 mx-auto ">
              <div className="mx-auto text-xl md:text-2xl dark:text-gray-200">
                <p
                  className="flex items-center hover:text-teal-600 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText("Thanapit.maggie@gmail.com");
                    alert("copied email");
                  }}
                >
                  <MdOutlineMail className="mr-1" />
                  Thanapit.maggie@gmail.com
                </p>
                <p
                  className="flex items-center hover:text-teal-600 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText("0820757524");
                    alert("Copied Phonenumber");
                  }}
                >
                  <AiFillPhone className="mr-1" />
                  0820757524
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
