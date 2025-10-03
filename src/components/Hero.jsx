import React from 'react'
import heroImage from '../assets/e575ac86958a17cc0c4ad1cc20e703015213d2f1.jpg'
import picture from '../assets/Frame362.png'

function Hero() {
  return (
    <>
    
    <section className=''>
        <div
        className=" h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`}}
        >
        <div className="container text-center items-center  md:mx-auto pt-60">
        <h1 className="text-white font-extrabold text-[55px] md:text-8xl leading-tight mt-[150px] md:mt-[221px]">
          Power isn’t given. It’s claimed through clarity, strategy, and action.
        </h1>
      </div>
      </div>

      <div>

      </div>

      {/* Headline Text */}
      
    </section>



<section className='px-6 md:px-36 py-[60px] md:py-[60px]'>
    <div className='flex flex-col lg:flex-row gap-[70.6px] items-center'>
        <div>
            <h1 className='md:text-9xl font-bold text-[#0B2C2C] text-[56px]'>MEET Alysia Rivers</h1>
            <p className='text-lg mt-5'>An advocate, speaker, strategist, author, and the founder of the BizFed Advocacy Academy.

My work lives at the intersection of policy, economic empowerment, and personal transformation.

I’ve helped overturn a rigged election, built bridges between small businesses and government, and secured over $1.1 million to expand a regional training initiative that puts power back in the hands of entrepreneurs and community leaders.
</p>
        </div>
        <img src={picture} className='w-[440px]'></img>
    </div>

</section>

</>
  )
}

export default Hero