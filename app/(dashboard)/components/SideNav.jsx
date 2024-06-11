"use client"
import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
const SideNav = () => {
    const menuList=[
        {
            id:1,
            name:'Upload',
            icon: Upload,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon: File,
            path:'/files'
        },
    ]
    const [activeIndex, setActiveIndex] = useState();
  return (
    <div className='shadow-sm border-r h-full'>
        <div className=' p-5 border-b-2'>
            <Image src="/logo.svg" width={150} height={100} />
        </div>
        <div className='flex flex-col float-left w-full'>
            {menuList.map((item, index) => (
                <Link key={index} href={item.path} className={`flex gap-2 p-4 px-6 transition
                 text-gray-500 hover:bg-gray-100 w-full
                 ${activeIndex==index? 'bg-blue-50 text-primary' : null}`}
                 onClick={() => setActiveIndex(index)}>
                    <item.icon/>
                    <h2>{item.name}</h2>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SideNav