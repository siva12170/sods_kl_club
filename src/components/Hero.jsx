import {motion} from 'framer-motion';
import { styles } from '../styles';
import { Robo } from "./canvas";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={'${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#003782]'/>
          <div className='w-1 sm:h-80 h-40 blue-gradient'/>
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
            School of<span className='text-[#0000e6]'> Data Science</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Data scientists are the new frontier of explorers<br className='sm:block hidden' />
          only they're exploring the digital world
          </p>
          
        </div>
        <Robo/>
      </div>

      


    </section>
    
  );
};

export default Hero;