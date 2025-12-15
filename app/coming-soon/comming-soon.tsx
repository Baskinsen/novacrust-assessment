import React from 'react'

export default function CommingSoon({ title }: { title: string }) {
  return (
    <div className='flex flex-col py-10 sm:py-16 lg:py-20 gap-3 sm:gap-4 lg:gap-5'>
      <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-clash text-primary text-center">Comming Soon!</h1>
      <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-secondary text-center font-outfit">{title} is almost here.<br />
        Enter your email and we’ll let you know the moment it’s live.</p>
      <div className='flex flex-col gap-4'>
        <label htmlFor="email" className='text-primary text-[14px] sm:text-[16px] font-medium font-outfit'>Email</label>
        <input type="email" placeholder="Enter your email" className='px-[24px] py-[16px] rounded-full bg-card border border-border text-secondary' />
      </div>
      <button className="w-full px-[40px] py-[20px] rounded-full bg-primary text-primary-foreground cursor-pointer mt-10">Update me</button>
    </div>
  )
}
