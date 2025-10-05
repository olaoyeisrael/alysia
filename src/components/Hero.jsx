import React from 'react'
import heroImage from '../assets/e575ac86958a17cc0c4ad1cc20e703015213d2f1.jpg'
import picture from '../assets/Frame362.png'

function Hero() {
  return (
    <>
    
    <section className=''>
        <div
        className=" h-[522px] xl:h-[771px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`}}
        >
        <div className=" lg:px-[24%] text-center items-center  xl:mx-aut pt-[150px]  px-[6.4%] xl:pt-60">
        <h1 className="text-white font-TTBold text-[54px]/[55px] md:text-5xl xl:text-8xl px-0 uppercase">
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
            <h1 className='md:text-9xl font-TTBold text-[#0B2C2C] text-[56px] uppercase'>MEET Alysia Rivers</h1>
            <p className='text-lg mt-5 font-ChivoLight'>An advocate, speaker, strategist, author, and the founder of the BizFed Advocacy Academy.

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