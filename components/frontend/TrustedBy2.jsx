import Image from 'next/image'
import React from 'react'

export default function TrustedBy2() {
  return (
    <div className='px-[24px] py-10 flex-col space-y-6 bg-[#F4FCFC]'>
      <div className='text-center flex-col space-y-4'>
        <p className='font-semibold text-32px'>Trusted by Students</p>
        <p className='text-18px '>Join our live demo class to have all your questions answered by our expert.</p>
      </div>
      <div className='flex justify-center items-center'>
      <Image
              src="/images/student.svg"
              alt=""
              className="w-[250px]"
              width={2}
              height={2}
            />
      </div>
      <div className='flex-col space-y-4'>
        <div>
        <p className='text-14px'>“Lorem ipsum dolor sit amet consectetur. Pellentesque fringilla commodo adipiscing proin. Nibh viverra mauris a integer. Facilisis tristique natoque pellentesque mauris urna.”</p></div>
        <div>
        <p className='text-14px font-semibold'>Sakshi Pandey</p>
        <p className='text-[10px] text-[#656675]'>Bishop Cotton School</p>
        </div>
      </div>
      <div><button className='bg-gradient01 w-[90%] text-white rounded-md py-2'>Book a Demo Class</button></div>
    </div>
  )
}