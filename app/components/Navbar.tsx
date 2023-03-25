'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import logo from '../../public/images/logo.png';

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const pathname = usePathname();

  return (
    <div className=''>
      <div className='container mx-auto flex justify-between items-center p-6 w-full'>
       <Link href="/">
       <Image src={logo} alt='logo' width={133} height={44} />
       </Link>
        <button
          className='h-6 w-6 text-primary lg:hidden'
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M11 6L20 6' stroke='currentColor' strokeWidth='2' />
            <path d='M3 12H20.5' stroke='currentColor' strokeWidth='2' />
            <path d='M3 18H11' stroke='currentColor' strokeWidth='2' />
          </svg>
          <span className='sr-only'>open menu</span>
        </button>
        <div className='lg:flex w-full justify-end space-x-10 items-center hidden '>
          <Link
            href='/'
            className={`${
              pathname === '/' ? 'text-[#0082f3] font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href='/'
            className={`${
              pathname === '/featured' ? 'text-[#0082f3] font-semibold' : ''
            }`}
          >
            Featured{' '}
          </Link>
          <Link href='/'>Podcast</Link>
          <Link
            href='/vote'
            className={`${
              pathname === '/vote' ? 'text-[#0082f3] font-semibold' : ''
            }`}
          >
            Vote
          </Link>
          <Link
            href='/'
            className='py-3 px-6 rounded-lg bg-primary text-white rounded-[100px]'
          >
            Apply
          </Link>
        </div>
      </div>
      {menuVisible && <MobileMenu />}
    </div>
  );
}

function MobileMenu() {
  return (
    <div className='block w-full space-y-4 container mx-auto lg:hidden px-6 '>
      <div>
        <Link href='/' className='text-[#222]'>
          Home
        </Link>
      </div>
      <div>
        <Link href='/'>Featured </Link>
      </div>
      <div>
        <Link href='/'>Podcast</Link>
      </div>
      <div>
        <Link href='/'>Vote</Link>
      </div>
      <div className='flex justify-center'>
        <Link
          href='/'
          className='py-3 px-6 rounded-lg bg-primary text-white rounded-[100px]'
        >
          Apply
        </Link>
      </div>
    </div>
  );
}
