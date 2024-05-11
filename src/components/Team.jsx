
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

import { team } from "../constants";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
const TeamCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              </div>
            </div>
          
  
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            
          </div>
  
          <div className='mt-4'>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
        </div>
      </div>
    );
  };
  const Team = () => {
    return (
      <>
        <div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>SODS</p>
          <h2 className={`${styles.sectionHeadText}`}>TEAM.</h2>
        </div>

        <div className='mt-15 flex flex-wrap gap-7'>
          {team.map((team, index) => (
            <TeamCard key={index} index={index} {...team} />
          ))}
        </div>
      </>
    );
  };
  export default SectionWrapper(Team, "Team");


