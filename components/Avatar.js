// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image src={'/fotoperfil.png'} width={737} height={768} alt='avatar'
      className='translate-z-0 w-full h-full'/>
    </div>
  )
};

export default Avatar;
