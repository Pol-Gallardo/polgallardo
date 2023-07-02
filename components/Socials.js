// links
import Link from 'next/link';

// icons
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; 


const Socials = () => {
  return( 
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://twitter.com/PolGallardo_'} className='hover:text-accent transition-all duration-300'><FaTwitter /></Link>
      <Link href={'https://www.linkedin.com/in/pol-gallardo-comajuan-731a58198/'} className='hover:text-accent transition-all duration-300'><FaLinkedinIn /></Link>
      <Link href={'https://github.com/Pol-Gallardo'} className='hover:text-accent transition-all duration-300'><FaGithub /></Link>
    </div>
  );
};

export default Socials;
