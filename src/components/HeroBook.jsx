import React from 'react'
import heroImage from '../assets/e17b1e833d81d3c1010e1d4f79c0127792ce4084.jpg'
import book from '../assets/61b7fa9ac0cef6c8e8f8111814b05dc9e3b33af1.png'
import aly from '../assets/d0d033022a5ab7dc7c437eb4cf8afbba6c4f1f23.png'
import bold from '../assets/51c4d42ed78140e92ff4e82b6316fcc1cd5af39d.png'
import forbes from '../assets/forbes.png'


function Hero() {
  return (
    <>
    
    <section className=''>
        <div
        className=" h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`}}
        >
        <div className=" items-center md:ml-[135px] mx-6 md:max-w-3xl pt-60">
            <h1 className='text-white'>BOOK & WRITING</h1>
        <h1 className="text-white font-extrabold text-[55px] md:text-8xl leading-tight">
          Reclaiming the Narrative
        </h1>
        <p className='text-white'>As the author of If You Wonder Why They Call You Nigga, I write for disruptors, deep thinkers, and the quietly revolutionary people ready to break cycles, rewrite narratives, and create something that reflects who we really are.</p>
      </div>
      </div>

      <div>

      </div>

      {/* Headline Text */}
      
    </section>



<section className=' mt-12 mx-2 md:mx-[70px] py-10 px-[80px] md:mt-[100px] bg-[#F5E4D6] rounded-4xl'>
    <div className='flex flex-col-reverse lg:flex-row justify-between items-center '>
        <div>
            <div>
            <h1 className='text-lg font-medium text-[#0B2C2C] md:text-[56px]'>THE BOOK</h1>
            <h1 className='text-8xl font-bold mt-4'>If You Wonder Why They Call You Nigga</h1>
            </div>

            <p className='mt-[35px]'>A bold, reflective book on identity, cultural conditioning, and reclaiming your power.</p>

                <p> If You Wonder Why They Call You Nigga is a bold, reflective book that explores how identity, language, and cultural conditioning shape our confidence and power.</p>
<p className='mt-2'>
Through personal storytelling and sharp cultural commentary, I challenge readers to unpack limiting beliefs, confront hard truths, and reclaim their narrative.

</p>
<p className='mt-2'>This is more than a book, it’s a call to activate your own power and voice.</p>

<div className='mt-16 bg-[#0B2C2C] font-extrabold text-white w-[147px] px-4 py-4 rounded-lg items-center '>
    <h1> PURCHASE BOOK</h1>  
</div>
        </div>
        <img src={book} className='w-[404px] h-[609px]'></img>
    </div>

</section>





<section className='md:mt-[100px] mt-12 pt-[97px]'>
    <div className='bg-[#F5E4D6] md:mx-[150px] mx-6 flex flex-row items-center justify-between px-[17px] md:px-0'>
        <img src={aly} className='h-[968px] hidden lg:block'></img>
        <div className=' md:ml-[60px]'>
            <h1 className='font-bold text-[64px] text-[#0B2C2C]'>Ready to Activate Your Own Power?</h1>
            <p>Grab your copy of If You Wonder Why They Call You
Nigga, explore more of my writing.</p>

        <div>
            <div className='mt-6 bg-[#E0AF85] w-[269px] rounded-lg '>
                <h1 className='font-extrabold text-center py-4 px-[77px]'>Purchase Book</h1></div>
            <div className='mt-[19px] bg-[#0B2C2C] w-[269px] rounded-lg'>
                <h1 className='font-extrabold text-center py-4 px-[77px] text-white'>Explore More Writings</h1></div>
        </div>
        </div>


    </div>


    <div className='bg-[#0B2C2C] px-6 md:px-[350px] py-[120px] mt-[100px]'>
        <div>
            <div>
                <h1 className='text-white text-center'>OTHER WRITINGS & EDITORIALS</h1>
                <h1 className='text-white text-center font-bold text-[54px] md:text-8xl'>Words That Move Conversations Forward.</h1>
                <p className='text-center text-white mt-6'>Essays, bold truths, and raw thoughts meant to push conversations
forward and activate change.</p>
            </div>

            <div className='mx-6 lg:mx-[351px] mt-[60px]'>
                <div className='flex flex-row py-7 bg-[#F5E4D6] items-center rounded-xl '>
                    <img className='lg:ml-4 w-[129px] h-[96px]' src={forbes} ></img>
                    <div className=' ml-6'>
                        <h1 className='font-bold'>Reclaiming the Narrative in Business and Policy</h1>
                        <div className='bg-[#0B2C2C] mt-3 rounded-sm px-3 py-3 w-[130px]'>
                            <h1 className='text-[#FAF2EB] font-extrabold'>Read Article</h1>
                        </div>
                    </div>

                </div>

                <div className='flex flex-row py-7 bg-[#F5E4D6] items-center rounded-xl mt-10'>
                    <img className='ml-4 w-[129px] h-[96px]' src={bold} ></img>
                    <div className=' ml-6'>
                        <h1 className='font-bold'>MEET ALYSIA RIVERS - BOLD JOURNEY</h1>
                        <div className='bg-[#0B2C2C] mt-3 rounded-sm px-3 py-3 w-[130px]'>
                            <h1 className='text-[#FAF2EB] font-extrabold'>Read Article</h1>
                        </div>
                    </div>

                </div>

                <div className='bg-[#E0AF85] mt-20 px-4 py-4'>
                    <h1 className='text-[24px] font-bold text-center'>
                        Explore More Writings
                    </h1>
                </div>
            </div>
        </div>

    </div>
    

</section>

</>
  )
}

export default Hero