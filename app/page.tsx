import About from 'components/About';
import Hero from 'components/Hero';

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
