'use client';
import Image from 'next/image';
import purple from '../../public/images/purple.png';
import yellow from '../../public/images/yellow.png';
import red from '../../public/images/red.png';
import bulb from '../../public/images/bulb.png';
import rocket from '../../public/images/rocket.png';
import megaphone from '../../public/images/megaphone.png';

export default function Hero() {
  return (
    <div className='grid place-items-center text-center mt-[3rem] px-6 relative'>
      <Image
        src={purple}
        width={56}
        height={56}
        className='object-fit w-[46px] h-[46px] lg:w-[56px] lg:h-[56px] absolute left-0 -bottom-16 lg:-bottom-6 animate-tilt origin-bottom will-change-transform'
        alt='user float icon '
      />
      <Image
        src={yellow}
        width={96}
        height={104}
        className='object-fit w-[62px] h-[62px] lg:w-[96px] lg:h-[104px] absolute right-0 lg:right-[20%] -bottom-24  lg:bottom-[2%] animate-tilt origin-bottom will-change-transform'
        alt='user float icon '
      />
      <Image
        src={red}
        width={56}
        height={56}
        className='object-fit w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] absolute right-0 top-[-13%] lg:top-[0] animate-tilt origin-bottom will-change-transform'
        alt='user float icon '
      />
      <Image
        src={bulb}
        width={56}
        height={56}
        className='object-fit w-[44px] h-[44px] lg:w-[72px] lg:h-[auto] absolute left-0 top-[-13%] -rotate-[25deg] lg:top-[0]  origin-bottom will-change-transform'
        alt='user float icon '
      />
      <Image
        src={rocket}
        width={56}
        height={56}
        className='object-fit w-[44px] h-[44px] lg:w-[72px] lg:h-[auto] absolute right-[8%] bottom-[18%] -rotate-[25deg] lg:bottom-[35%]  origin-bottom will-change-transform'
        alt='user float icon '
      />
      <Image
        src={megaphone}
        width={56}
        height={56}
        className='object-fit w-[44px] h-[44px] lg:w-[72px] lg:h-[auto] absolute left-0 lg:left-[5%] bottom-[18%] rotate-[45deg] lg:bottom-[30%]  origin-bottom will-change-transform'
        alt='user float icon '
      />
      <div className='font-extrabold text-[2.5rem] md:text-[3.75rem] lg:text-[4.5rem]'>
        <h1>We Feature Startup </h1>
        <h1>
          Founders{' '}
          <span className='bg-[#586d82] px-2 rounded-lg text-white inline-block'>
            for Free
          </span>
        </h1>
      </div>
      <p className='text-lg md:text-[1.375rem] mt-6 leading-[145%]'>
        Startup Founder Daily is <b>the</b> free marketing agency for startup
      </p>
      <p className='mt-6 text-lg md:text-[1.375rem]'>
        What are you building? 👇🏼
      </p>
      <button className='mt-10 text-[#0e2341]  bg-[#b4c2cc] font-semibold py-2.5 px-[1.875rem] w-[7.125rem] h-12 rounded-[100px] leading-[140%]'>
        Apply
      </button>
    </div>
  );
}
