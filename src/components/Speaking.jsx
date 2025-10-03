import React from 'react'
import image from '../assets/569699630d8095b72f9ca58d52c1ba1239b76a58.jpg'
import book from '../assets/f404d8e6078385db2b0e5fb351f50312ab12ccaa.jpg'
import stand from '../assets/03de7c9ce052ab4fc9ac8410388d0af8646e6246.jpg'
import first from '../assets/37bea954c8806bb8e5d6ecaa9ab68b1692ead6a5.jpg'
import second from '../assets/011270b6c2d035fdb840c05e626fdef1d923e8b6.jpg'
import third from '../assets/c2f5282a603d9f6e5f299dae9a85964a1a72b00e.jpg'
import fourth from '../assets/cb954f8a858de88c2ef62e6bc9697210c0db9709.png'
import fifth from '../assets/e6b9f28fe87b069173c881401278e6630ee32383.png'
import last from '../assets/last.png'

function Speaking() {
  return (
    <>
   <section className='flex flex-row bg-[#F5E4D6]'>
    <img src={image} className='sm:w-[698px] hidden xl:block'></img>
    <div className='py-[60px] md:py-[83px] md:pl-[53px] lg:mr-[144px] px-[23px]'>
        <div>
            <h1>SPEAKING</h1>
            <h1 className='font-bold  text-[54px] md:text-8xl mt-4 text-[#29180A]'>I don’t just speak, I deliver transformation upon impact.</h1>
            <p className='mt-6 md:mt-9 text-[16px]'>I speak to rooms full of students, leaders, entrepreneurs, and changemakers ready to shift mindsets, claim power, and create real change.</p>

            <p className='mt-4'>Whether I’m breaking down the politics of profit, unlocking the blueprint to confidence, or helping people navigate complex systems, I show up with CLARITY, STRATEGY, and PRECISION.</p>
            <div className='mt-[38px]'>
                <h1 className='font-bold text-[33px]'>Signature Topics</h1>
                <div className='bg-[#EACAAE] pl-5 py-5 '>
                    <h1 className='font-bold text-xl'>GOVERNMENT & ADVOCACY</h1>
                </div>
                 <div className='bg-[#EACAAE] pl-5 py-5 mt-1 '>
                    <h1 className='font-bold text-xl'>EMPOWERMENT</h1>
                    <p>The Business of Politics: How Policy Shapes Profit

Access, Influence, Power: How to Navigate Government Like an Insider
The Next Generation of Leaders: Preparing for the Future of Civic Engagement
</p>
                </div>

                <div className='bg-[#EACAAE] pl-5 py-5 mt-1 '>
                    <h1 className='font-bold text-xl'>BUSINESS</h1>
                </div>

                <h1 className='mt-[38px] text-xl'>Download Alysia Speaker Deck</h1>
                
            </div>

        </div>
        

    </div>

   </section>


   <section className='pt-[50px] md:pt-[120px]'>
    <div className='flex flex-col items-center justify-center mx-6 md:mx-[401px]'>
        <div> <h1 className='font-medium text-[#0B2C2C]'>PROJECTS & WORK</h1></div>
        
        <div className='flex flex-col items-center'>
            <h2 className='mt-4 font-bold text-[54px] md:text-8xl text-center text-[#0B2C2C]'>I Build Systems to drive impact!</h2>
            <p className='text-center mt-6 text-[#0B2C2C] '>Everything I build is designed to shift systems and open doors. From equipping entrepreneurs to influencing policy to sparking narrative shifts.</p>
        </div>
    </div>

   </section>

   <section className='bg-[#0B2C2C] mt-6 md:mt-[59px]'>
    <div className='flex flex-col mx-6 md:flex-row justify-between md:mx-[154px] mb-[60px] md:mb-[187px]'>
        <div className='bg-white px-4 py-4 rounded-xl mb-3 md:mb-0'>
            <img src={stand} className='w-full h-[260px] rounded-lg'></img>
            <h1 className='text-center mt-3 font-bold text-[20px]'> BizFed Advocacy Academy</h1>
        </div>
         <div className='bg-white px-4 py-4 rounded-xl  mb-3 md:mb-0'>
            <img src={stand} className='w-full h-[260px] rounded-lg'></img>
            <h1 className='text-center mt-3 font-bold text-[20px]'> CAMPAIGN PORTFOLIO</h1>
        </div>
        <div className='bg-white px-4 py-4 rounded-xl'>
            <img src={book} className='w-full h-[260px] rounded-lg'></img>
            <h1 className='text-center mt-3 font-bold text-[20px]'> MY WRITING & STORYTELLING</h1>
        </div>

    </div>

  <div className='mb-[78px]'>
    <h1 className='text-white text-center font-medium'>MEDIA & PRESS</h1>
    <h1 className='text-white text-center font-bold text-[54px] md:text-8xl mx-6 lg:mx-[350px]'>Amplifying voices through strategy and action</h1>
    <p className='text-white text-center mt-6  mx-6 lg:mx-[364px]'>I show up where people are ready to challenge the system and build something better.  Featured on panels, podcasts, and platforms that amplify truth, equity, and action.</p>
  </div>
  <div className='mx-10 '>
  {/* <div className=' flex flex-row justify-between'> 
<img src={fifth} className='w-110 h-[437px]'></img>
<img src={second} className='w-[555px] h-[437px]'></img>
<img src ={third} className='w-[325px] h-[437px]'></img></div>

<div className='flex flex-row justify-between'>
    <img src={stand} className='w-[550px] h-[437px]'></img>
<img src={first} className='w-[385px] h-[437px]'></img>
  <img src={fourth} className='w-[385px] h-[437px]'></img>
</div> */}
{/* <div className='flex flex-row justify-between flex-wrap'>
  <img src={fifth} className='w-[30%] sm:w-[25%] lg:w-[20%] h-auto object-contain' />
  <img src={second} className='w-[30%] sm:w-[25%] lg:w-[20%] h-auto object-contain' />
  <img src={third} className='w-[30%] sm:w-[25%] lg:w-[20%] h-auto object-contain' />
</div>

<div className='flex flex-row justify-between flex-wrap'>
  <img src={stand} className='w-[30%] sm:w-[25%] lg:w-[20%] h-auto object-contain' />
  <img src={first} className='w-[30%] sm:w-[25%] lg:w-[20%] h-auto object-contain' />
  <img src={fourth} className='w-[30%] sm:w-[25%] lg:w-[20%] h-auto object-contain' />
</div> */}
</div>


<div className=' mt-16 md:mt-32 flex flex-col lg:flex-row mx-6 md:mx-[155px] justify-between items-center pb-16 mb:pb-[181px]'>
    <div className='md:w-[430px]'>
        <div className=''>
            <h1 className='text-white font-medium md:text-center '>Book & Writing</h1>
            <h1 className='text-white font-bold text-[54px] md:text-center md:text-8xl'>Reclaiming the Narrative.</h1>

        </div>
        <p className='text-white mt-[29px] text-center md:text-left'>I write for disruptors, deep thinkers, and the quietly revolutionary, people ready to break cycles, rewrite narratives, and create something freer.
</p>

    </div>
    <img src={last} className=' w-[327px] h-[492px] md:w-[404px] mt-10 md:mt-0'></img>
</div>



   </section>



</>
  )
}

export default Speaking