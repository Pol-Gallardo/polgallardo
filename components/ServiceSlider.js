// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { RxBackpack, RxPencil2, RxDesktop, RxReader, RxArrowTopRight } from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <RxBackpack />,
    title: 'Consulting',
    description: 'Technical guidance. I will explain to you the Smart Contracts and the necessary architecture to carry out your project.',
  },
  {
    icon: <RxReader />,
    title: 'Smart Contracts Development',
    description: 'We develop your ideas with the utmost professionalism to bring them to life.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Smart Contract Simple audit',
    description: 'The code is reviewed to identify the most common vulnerabilities',
  },
  {
    icon: <RxPencil2 />,
    title: 'Smart Contract Complex audit',
    description: 'The same process as a Simple Audit is followed, and scripts are used to test the functionality.',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'We develop your application to take your business to the next level.',
  },
];


const ServiceSlider = () => {
  return(
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/** icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/** title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/** arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        )
      })

      }
    </Swiper>
  );
};

export default ServiceSlider;
