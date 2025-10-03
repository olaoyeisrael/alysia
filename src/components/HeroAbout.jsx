import React from 'react'
import about from '../assets/about.jpg'
import home from '../assets/80401aa20d58b6ef0749f62dd0b722860d9c90b9.jpg'
import aly from '../assets/d0d033022a5ab7dc7c437eb4cf8afbba6c4f1f23.png'

function HeroAbout() {
  return (
    <>
    <section>
         <div
                className=" h-[406px] md:h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${about})`}}
                >
                <div className="container text-center items-center mx-auto max-w-3xl pt-[131px] lg:pt-80">
                    <h1 className='text-white'> ABOUT ME</h1>
                <h1 className="text-white font-extrabold text-[55px] md:text-8xl leading-tight">
                  Equity. Impact. Transformation.
                </h1>
              </div>
              </div>
    </section>

    <section>
        <div className='w-full h-full md:h-[1267px] bg-cover bg-center'
        style={{backgroundImage: `url(${home})`}}
        >
            <div className='pt-12 ml-6 md:ml-[135px] md:pt-[109px] w-[295px] md:w-[609px]'>
                <div className=''>
                    <h1 className='text-white font-medium'>MY JOURNEY & STORY</h1>

                    <h1 className='text-[54px] md:text-8xl font-bold mt-4 text-white'>From Compton to Catalyst: A Journey of Impact.</h1>

                </div>
                <div className='mt-9'>
                    <p className='text-white'>
                        My story begins in Compton, where my family has lived since the 1960s. Growing up between Compton and San Diego, I learned to navigate power structures early; seeing firsthand how policy and systems shape lives.</p>
<p className='text-white mt-1 md:mt-2'>I developed a deep passion for advocacy and justice thanks to the influence of my grandmother, who taught me the importance of speaking up and standing firm. That drive led me to uncover a voter fraud scheme in Compton, an investigation that helped overturn an election and reinforced my commitment to truth and equity.</p>

<p className='text-white mt-1 md:mt-2'>Since then, I’ve run for office, advised leaders, and built programs that equip others to drive change. As Founder of the BizFed Advocacy Academy, I secured over $1.1 million to expand our training initiative, giving small business owners and community leaders tools to influence policy and access capital.</p>
<p className='text-white mt-1 md:mt-2'>Today, I serve as a strategist, speaker, and connector leading BizFed’s Arts, Entertainment, Sports, and Olympics Committee and expanding global trade readiness through a partnership with Arizona State University. Every step of my journey is rooted in transformation, economic, civic, and personal.
                    </p>
                </div>

            </div>

        </div>
    </section>

    <section className=' pt-12 md:pt-[137px] px-6 md:px-auto'>
        <div className='bg-[#F5E4D6] flex flex-row rounded-4xl md:mx-[145px] '>
            <img src={aly} className='hidden xl:block w-[600px] h-[1105px]'></img>
            <div className='py-12 px-4 md:px-0 md:pr-[101px] '>
                <div className=' ppt-8 md:mt-16'>
                    <p>I’m Alysia Rivers, an advocate, strategist, author, and the founder of the BizFed Advocacy Academy. My work lives at the intersection of policy, economic empowerment, and personal transformation.</p>
<p className='mt-3'>I’ve helped overturn a rigged election, built bridges between small businesses and government, and secured over $1.1 million to expand a regional training initiative that puts power back in the hands of entrepreneurs and community leaders.</p>
                </div>

                <div>
                    <h1 className='font-bold text-[32px] md:text-[64px]'>Principles That Drive My Work.</h1>
                    <p className='mt-[11px]'>Integrity, action, and equity shape everything I do from the programs I build to the communities I serve.</p>
                    <div className='mt-[11px] md:mr-[20px]'>
                        <div className='bg-[#EACAAE] py:3 pl-3 md:py-4 md:pl-4'>
                            <h1 className='text-[24px] font-bold'>Integrity, Access, and Transformation</h1>
                        </div>
                        <div className='bg-[#7A491F] py:3 pl-3 md:py-4 md:pl-4 mt-[10px]'>
                            <h1 className='text-[24px] font-bold'>Advocacy that drives change not headlines</h1>
                        </div>
                        <div className='bg-[#EACAAE] py:3 pl-3 md:py-4 md:pl-4 mt-[10px]'>
                            <h1 className='text-[24px] font-bold'>Equity as a starting point, not an afterthought</h1>
                        </div>
                        
                         <div className='bg-[#7A491F] py:3 pl-3 md:py-4 md:pl-4 mt-[10px]'>
                            <h1 className='text-[24px] font-bold'>Transformation at every level</h1>
                        </div>

                    </div>
                </div>
            </div>


        </div>


    </section>

    <section className='mt-[60px] md:mt-[111px] pb-[80px] md:pb-[127px] bg-[#FAF2EB]'>
        <div className='flex flex-col mx-6 md:mx-[385px]'>
            <h1 className='text-center font-bold text-[54px] md:text-8xl'>Ready to turn insight into action?</h1>
            <p className='mt-6 text-center'>Book me to speak or explore my work and discover how we can build systems, shift narratives, and create lasting impact together </p>
        </div>

        <div className='flex flex-col mx-[83px] md:mx-[183px] items-center mt-6'>
            <div className='bg-[#E0AF85] py-3 md:py-4 w-[269px]'>
                <h1 className='text-center font-extrabold'>Book Me to Speak</h1>
            </div>
            <div className='bg-[#0B2C2C] py-3 md:py-4 w-[269px] mt-[19px]'>
                <h1 className='text-center text-white font-extrabold'>SUBMIT AN INQUIRY</h1>
            </div>

        </div>

    </section>
    </>
  )
}

export default HeroAbout