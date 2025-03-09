"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from 'next/image';
import styles from './page.module.css';
import { ButtonsCard } from "../../../components/ui/tailwindcss-buttons";
import { Navbar } from "@/components/ui/Navbar";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import MemberSets from "./MemberSets";

const Members = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // Set isMobile based on viewport width
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const router=useRouter();

  // Function to render Navbar or NavbarMobile based on viewport width
  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };

  const members_2021 = [
    {
      name: "Abhay Singh",
      description: "Coordinator",
      linkedin: "https://www.linkedin.com/in/singhabhay1/",
      // twitter: "https://x.com/THEBLACKEYES09",
      instagram: "http://instagram.com/mostlyastro",
      gmail: "mailto:21bec003@iiitdmj.ac.in",
      image: "/coordinator.jpg"
    },
    {
      name: "Shuvam Patra",
      description: "Graphic and Media Lead",
      linkedin: "https://www.linkedin.com/in/shuvam-patra-157b50229/",
      twitter: "https://x.com/THEBLACKEYES09",
      instagram: "https://www.instagram.com/blackeyesandblue09/",
      gmail: "mailto:shuvampatra2003@gmail.com",
      image: "/shuvam.jpg"
    },
    {
      name: "Abhinav Kumar",
      description: "Telescope Operator Lead",
      linkedin: "https://www.linkedin.com/in/abhinav-kumar-8b6008247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/i.g_abhinav?igsh=OGt2cnJ4cGluZnFs",
      gmail: "mailto:igabhinav.2003@gmail.com",
      image: "/abhinav.jpg"
    },
    {
      name: "Haritha Murukutla",
      description: "Core Team Member",
      linkedin: "http://www.linkedin.com/in/haritha-murukutla-a6b48722a",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/mysti_thoughts?igsh=MTFpN2NiMm9vNzN4MA==",
      gmail: "mailto:hareethamurukutla@gmail.com",
      image: "/harita.jpg"
    },
    {
      name: "Gaurav Manjhi",
      description: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/gaurav-manjhi/",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/gauravmanjhi07?utm_source=qr&igsh=MWJibG04eG1zMXlxbg==",
      gmail: "mailto:gauravmanjhi2002@gmail.com",
      image: "/gaurav.jpg"
    },
    {
      name: "Aditya Gupta",
      description: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/aditya-gupta-1b4aa4257/",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/adi.ayt?igsh=djY4OHcxNGI0cmF6",
      gmail: "mailto:guptaaditya1801@gmail.com",
      image: "/aditya.jpeg"
    },
    {
      name: "Abhishek Gupta",
      description: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/abhishek-gupta-584530228/",
      // twitter: "https://twitter.com/johndoe",
      // instagram: "https://instagram.com/johndoe",
      gmail: "mailto:abhishekgupta020702@gmail.com",
      image: "/abhishek.jpg"
    },
    {
      name: "Pallavi Sarkar",
      description: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/pallavi-sarkar-ds/",
      // twitter: "https://twitter.com/johndoe",
      // instagram: "https://www.instagram.com/158alokrai?igsh=bm9nbXp1eW84aHhs",
      // gmail: "mailto:22bec010@iiitdmj.ac.in",
      image: "/pallavi.jpg"
    }
  ];

  const members_2022 = [
    {
        name: "Alok Rai",
        description: "Co-Coordinator",
        linkedin: "http://linkedin.com/in/alok-rai158",
        // twitter: "https://twitter.com/johndoe",
        instagram: "https://www.instagram.com/158alokrai?igsh=bm9nbXp1eW84aHhs",
        gmail: "mailto:22bec010@iiitdmj.ac.in",
        image: "/cocoordinator.jpg"
      },
      {
        name: "John Doe",
        description: "Software Engineer",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        gmail: "mailto:johndoe@gmail.com",
        image: "/path/to/image9.jpg"
      },
      {
          name: "John Doe",
          description: "Software Engineer",
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          gmail: "mailto:johndoe@gmail.com",
          image: "/path/to/image9.jpg"
        },
        {
          name: "John Doe",
          description: "Software Engineer",
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          gmail: "mailto:johndoe@gmail.com",
          image: "/path/to/image9.jpg"
        },
        ];
  
  const members_2023 = [
    {
        name: "Alok Rai",
        description: "Co-Coordinator",
        linkedin: "http://linkedin.com/in/alok-rai158",
        // twitter: "https://twitter.com/johndoe",
        instagram: "https://www.instagram.com/158alokrai?igsh=bm9nbXp1eW84aHhs",
        gmail: "mailto:22bec010@iiitdmj.ac.in",
        image: "/cocoordinator.jpg"
      },
      {
        name: "John Doe",
        description: "Software Engineer",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        gmail: "mailto:johndoe@gmail.com",
        image: "/path/to/image9.jpg"
      },
      {
          name: "John Doe",
          description: "Software Engineer",
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          gmail: "mailto:johndoe@gmail.com",
          image: "/path/to/image9.jpg"
        },
        {
          name: "John Doe",
          description: "Software Engineer",
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          gmail: "mailto:johndoe@gmail.com",
          image: "/path/to/image9.jpg"
        },
        ];
  
  const members_2024 = [
    {
        name: "Alok Rai",
        description: "Co-Coordinator",
        linkedin: "http://linkedin.com/in/alok-rai158",
        // twitter: "https://twitter.com/johndoe",
        instagram: "https://www.instagram.com/158alokrai?igsh=bm9nbXp1eW84aHhs",
        gmail: "mailto:22bec010@iiitdmj.ac.in",
        image: "/cocoordinator.jpg"
      },
      {
        name: "John Doe",
        description: "Software Engineer",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        gmail: "mailto:johndoe@gmail.com",
        image: "/path/to/image9.jpg"
      },
      {
          name: "John Doe",
          description: "Software Engineer",
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          gmail: "mailto:johndoe@gmail.com",
          image: "/path/to/image9.jpg"
        },
        {
          name: "John Doe",
          description: "Software Engineer",
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          gmail: "mailto:johndoe@gmail.com",
          image: "/path/to/image9.jpg"
        },
        ];

  return (
    <div className="main">
      <div className="relative w-full flex items-center justify-end">
        {renderNavbar()}
      </div>

      <div className="logo relative -mt-5 z-10">
        <Image src="/membersbanner.png" alt="banner" width={1000} height={1000} layout="responsive" className="relative" />
      </div>



      <div style={{
        backgroundImage: 'url(/9.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '50%',
        transition: 'background-position 0.5s ease',
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}>

        <h1 className="font-jetbrains-mono text-4xl text-white text-center pb-10">
          THE CREW
        </h1>


      {/* pehle component me type change karna phir data change karna */}
      <MemberSets members={members_2021} year={'Orion'}/>
      <MemberSets members={members_2022} year={'Leo'}/>
      <MemberSets members={members_2023} year={'Canis Majoris'}/>
      <MemberSets members={members_2024} year={'Canis Minoris'}/>

      <hr className="border-2 border-white w-full mx-auto " />  

      </div>
      <div className="abouttext  flex flex-col md:flex-row justify-center">
        <div className="pt-20 pb-20 px-12 md:pl-20 md:pr-20 md:w-1/2">
          <h1 className="font-jetbrains-mono text-4xl text-white pb-4">WANNA JOIN US?</h1>
          <p className="text-teal-400 mb-6">Wanna be a part of The Astronomy And Physics Society? Don&apos;t worry. Here we are giving you the opportunity!!!</p>
          <Button onClick={() => router.push('https://forms.gle/zx9KBwpZjsxb9Ku39')}>Be A Member</Button>
        </div>
        <div className="bg-cover flex align-middle relative w-full md:w-1/2 px-4 md:px-0">
          <Image className="mr-20" src="/3.jpg" alt="about" layout="fill" objectFit="cover" />
        </div>
      </div>


    </div>
  );
}
export default Members
