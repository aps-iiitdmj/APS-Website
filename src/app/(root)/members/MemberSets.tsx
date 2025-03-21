import React, {useState} from 'react'
import Image from 'next/image';

import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";
import {delay, motion} from 'framer-motion';

interface MemberSetsProps {
    members: any[]; 
    year: string;
  }


const buttonStyle = {scale:'2', marginRight:'10px'};

function MemberSets({members, year}: MemberSetsProps) {

    const [Open, setOpen] = useState(year=='Orion'?true:false);

  return (
    <main className='mt-[5px] h-full'>
    <hr className="border-2 border-white w-full mx-auto " />
        <div 
          className="flex mb-4 justify-between bg-gray-600 shadow-md rounded-b-lg p-2 backdrop-blur-md bg-opacity-30 border-2 border-white/[0.2]">
            
            <span className="inline-block text-white  font-jetbrains-mono text-2xl h-[50px] pt-2 pb-2 ml-5">
                {year} 
            </span>
            <button onClick={() => setOpen(!Open)}>
                {Open ? <HiBarsArrowUp style={buttonStyle}/>: <HiBarsArrowDown style={buttonStyle}/>}
            </button>

        </div>
        

        <CardSets members={members} state={Open}/>

  </main>
  )
}

export default MemberSets


function CardSets({members, state}: any, boolean: any) {
  return (
    <motion.div
    animate={state ? "open" : "closed"}
    style={{ originY: "top", height:state?'auto':'0px'}}
    variants={wrapperVariants}   
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-10 px-4 md:ml-5 md:mr-5 lg:ml-28 lg:mr-28 pb-10 md:pb-5">
        {members.map((member:any, index:number) => (
            <div
            key={index}
            className="bg-gray-600 shadow-md rounded-lg p-4 backdrop-blur-md bg-opacity-30 border-2 border-white/[0.2] ">
            <div className="header h-72 bg-gray-200 rounded-md mb-4 backdrop-blur-md bg-opacity-60">
                <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                />
            </div>
    
            <h2 className="font-jetbrains-mono font-bold text-neutral-200 dark:text-neutral-200 mb-2 mt-2">{member.name}</h2>
            <p className="font-sans font-normal text-teal-400 text-xs dark:text-neutral-300">{member.description}</p>
            <div className="flex space-x-4 mt-4 mb-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2">
                <img src="linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="mr-2">
                <img src="x.png" alt="Twitter" className="w-4 h-4" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="mr-2">
                <img src="instagram.png" alt="Instagram" className="w-4 h-4" />
                </a>
                <a href={member.gmail} target="_blank" rel="noopener noreferrer" className="mr-2">
                <img src="/gmail.png" alt="Gmail" className="w-4 h-4" />
                </a>
            </div>
            </div>
        ))}    
    </motion.div>
  )
}


const wrapperVariants = {
    closed: {
      height: '0px',
      opacity: 0, 
      transition: {  
        type: "ease",
        when: "afterChildren",
        duration: 0.3
      },
    },
    open: {
      height:'auto',
      opacity: 1,
      transition: {
        type: "ease",
        whenL:"beforeChildren",
        duration: 0.3

      },
    },
  };
  
