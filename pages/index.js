// next image
import Image from 'next/image';

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';


const Home = () => {
  return <div className='bg-primary/60 h-full'>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* title */}
        <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1'>
        Unlocking Value in Blockchain <br /> Smart Contract Audits for <span className='text-accent'>Enhanced Security</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
        I am a blockchain expert passionate about security and decentralization. I provide smart contract audits for projects of all sizes. My goal is to help you build a secure and reliable blockchain application.
        </motion.p>
        {/* button */}
        <div className='flex justify-center xl:hidden relative'>
          <ProjectsBtn />
        </div>
        <motion.div 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex'
          >
          <ProjectsBtn />
        </motion.div>
      </div>
      {/* image */}
      <div></div>
    </div>
  </div>;
};

export default Home;
