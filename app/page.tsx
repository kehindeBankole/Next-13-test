import About from 'components/About';
import Hero from 'components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <div className='container mx-auto px-6'>
        <Hero />
        <About/>
      </div>
    </div>
  );
}
