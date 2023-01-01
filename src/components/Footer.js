import React from 'react'

export default function Footer() {
  return (
    <div className="grid grid-cols-4 m-[70px] mt-[150px]">
        <div>
            <p className='font-sans text-black text-sm'>Jalan Suroyo No. 161 Mayangan Kota Probolonggi 672000</p>
            <p className='font-sans text-black text-sm'>binarcarrental@gmail.com</p>
            <p className='font-sans text-black text-sm'>081-233-334-808</p>
        </div>
        <div>
            <p className='font-sans text-black text-sm'>Our Sevice</p>
            <p className='font-sans text-black text-sm'>Why Us</p>
            <p className='font-sans text-black text-sm'>Testimonial</p>
            <p className='font-sans text-black text-sm'>FAQ</p>
        </div>
        <div>
            <p className='font-sans text-black text-sm'>Connect with us</p>
            <img src="/list item.svg" className="mr-4 mb-4" alt="" />

        </div>
        <div>
            <p className='font-sans text-black text-sm'>Copyright Binar 2022</p>
            <img src="/Rectangle 62.svg" className="mr-4 mb-4" alt="" />
        </div>
    </div>
  )
}
