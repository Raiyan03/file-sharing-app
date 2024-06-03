import { UserButton } from '@clerk/nextjs';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TopHeader = ({ toggleSidebar }) => {
  return (
    <div className='flex p-5 mt-0.5 border-b items-center justify-between md:justify-end'>
      <button onClick={toggleSidebar} className='md:hidden'>
        <AlignJustify />
      </button>
      <Image className='md:hidden' src="/logo.svg" width={150} height={100} />
      <UserButton />
    </div>
  );
}

export default TopHeader;
