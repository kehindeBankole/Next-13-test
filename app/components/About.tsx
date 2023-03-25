import Image from 'next/image';
import check from '../../public/images/check.png';

export default function About() {
  return (
    <section className='mt-40'>
      <div className=' space-y-12 lg:grid grid-cols-12 lg:space-x-12 lg:space-y-0'>
        <div
          className={`bg-[#586d82] rounded-[1.375rem] px-4 lg:col-span-8 lg:px-[3.5rem] py-10 pb-[4rem] bg-[url("../public/images/arrow.svg")] bg-no-repeat bg-auto  bg-[position:0.5rem_1.5rem]`}
        >
          <h1 className='text-[2.5rem] font-bold text-white font-mont  lg:text-[3.5rem]'>
            Amplifying Startup Founders' Voices
          </h1>
          <p className='mt-6 opacity-70 text-white font-mont  lg:text-xl '>
            We let founders borrow our audience to share their stories, because
            great companies deserve to be shared.
          </p>
        </div>

        <div
          className={` rounded-[1.375rem] px-4 lg:px-[3.5rem]  lg:col-span-4 py-10  shadow-[0_13px_100px_0_hsla(0,0%,78%,.25)] `}
        >
          <Image src={check} width={80} height={80} alt='check mark' />
          <h1 className='text-[1.875rem] font-extrabold font-manrope mt-6'>
            Vote On Our Current Cohort
          </h1>
          <p className='mt-2 font-manrope'>
            Vote on which startups we should feature. The top three each week
            are selected.
          </p>
          <p className='mt-6 underline font-bold'>
            <a href='#'>Get Started {`-->`}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
