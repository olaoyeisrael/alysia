import React from 'react'
import about2 from '../assets/about2.png'
import home from '../assets/IMG_3937.png'
import aly from '../assets/d0d033022a5ab7dc7c437eb4cf8afbba6c4f1f23.png'

function HeroAbout() {
  return (
    <>
    <section>
         <div
                className=" h-[406px] lg:h-[776px] md:h-screen bg-cover bg-center object-cover"
                style={{ backgroundImage: `url(${about2})`}}
                >
                <div className="container text-center items-center mx-auto max-w-3xl pt-[131px] lg:h-[341px] lg:pt-80">
                    <h1 className='text-white'> ABOUT ME</h1>
                <h1 className="text-white font-TTExtraBold text-[55px] md:text-8xl leading-tight uppercase">
                  Equity. Impact. Transformation.
                </h1>
              </div>
              </div>
    </section>

    <section>
        <div className=' md:h-[1267px] bg-cover bg-center object-cover'
        style={{backgroundImage: `url(${home})`}}
        >
            <div className='pt-12 ml-6 md:ml-[135px] md:pt-[109px] w-[295px] md:w-[609px] pb-12 lg:pb-0 '>
                <div className='lg:w-[565px]'>
                    <h1 className='text-white font-ChivoMedium'>MY JOURNEY & STORY</h1>

                    <h1 className='text-[54px] md:text-8xl font-TTBold mt-4 text-white uppercase'>From Compton to Catalyst: A Journey of Impact.</h1>

                </div>
                <div className='mt-9 space-y-2'>
                    <p className='text-white font-Chivo'>
                        My story begins in Compton, where my family has lived since the 1960s. Growing up between Compton and San Diego, I learned to navigate power structures early; seeing firsthand how policy and systems shape lives.</p>
<p className='text-white mt-2 md:mt-3 font-Chivo'>I developed a deep passion for advocacy and justice thanks to the influence of my grandmother, who taught me the importance of speaking up and standing firm. That drive led me to uncover a voter fraud scheme in Compton, an investigation that helped overturn an election and reinforced my commitment to truth and equity.</p>

<p className='text-white mt-2 md:mt-3 font-Chivo'>Since then, I’ve run for office, advised leaders, and built programs that equip others to drive change. As Founder of the BizFed Advocacy Academy, I secured over $1.1 million to expand our training initiative, giving small business owners and community leaders tools to influence policy and access capital.</p>
<p className='text-white mt-2 md:mt-3 font-Chivo'>Today, I serve as a strategist, speaker, and connector leading BizFed’s Arts, Entertainment, Sports, and Olympics Committee and expanding global trade readiness through a partnership with Arizona State University. Every step of my journey is rooted in transformation, economic, civic, and personal.
                    </p>
                </div>

            </div>

        </div>
    </section>

    <section className=' pt-12 md:pt-[137px] px-6 md:px-auto'>
        <div className='bg-[#F5E4D6] grid xl:grid-cols-2 xl:gap-2 rounded-4xl xl:mx-[145px]'>
            <img src={aly} className='hidden xl:block w-[600px] h-[1105px]'></img>
            <div className='py-12 px-4 xl:px-0 md:pr-[101px] xl:w-[453px]  '>
                <div className=' ppt-8 md:mt-16'>
                    <p className='font-ChivoItalic'>I’m Alysia Rivers, an advocate, strategist, author, and the founder of the BizFed Advocacy Academy. My work lives at the intersection of policy, economic empowerment, and personal transformation.</p>
<p className='mt-3 font-Chivo'>I’ve helped overturn a rigged election, built bridges between small businesses and government, and secured over $1.1 million to expand a regional training initiative that puts power back in the hands of entrepreneurs and community leaders.</p>
                </div>

                <div className='xl:w-[453px]'>
                    <h1 className='font-TTBold text-[32px]/[55px] md:text-[64px]/[64px] w-[293px] mt-1'>Principles That Drive My Work.</h1>
                    <p className='mt-[11px] font-Chivo'> <span className='font-ChivoBold uppercase'>Integrity, action, and equity </span> shape everything I do from the programs I build to the communities I serve.</p>
                    <div className='mt-[11px] md:mr-[20px]'>
                        <div className='bg-[#EACAAE] py:3 pl-3 md:py-4 md:pl-4'>
                            <h1 className='text-[24px] font-TTBold text-[#29180A]'>Integrity, Access, and Transformation</h1>
                        </div>
                        <div className='bg-[#7A491F] py:3 pl-3 md:py-4 md:pl-4 mt-[10px]'>
                            <h1 className='text-[24px] font-TTBold text-white'>Access Over Exclusivity</h1>
                        </div>
                        <div className='bg-[#EACAAE] py:3 pl-3 md:py-4 md:pl-4 mt-[10px]'>
                            <h1 className='text-[24px] font-TTBold text-[#29180A]'>Truth-Telling as Strategy</h1>
                        </div>
                        
                         <div className='bg-[#7A491F] py:3 pl-3 md:py-4 md:pl-4 mt-[10px]'>
                            <h1 className='text-[24px] font-TTBold text-white'>Transformation at every level</h1>
                        </div>

                    </div>
                </div>
            </div>


        </div>


    </section>

    <section className='mt-[60px] md:mt-[111px] py-[80px] md:py-[127px] bg-[#FAF2EB]'>
        <div className='flex flex-col mx-6 lg:mx-[26.7%]'>
            <h1 className='text-center font-TTBold uppercase text-[54px] md:text-8xl'>Ready to turn insight into action?</h1>
            <p className='mt-6 text-center font-ChivoLight'>Book me to speak or explore my work and discover how we can build systems, shift narratives, and create lasting impact together </p>
        </div>

        <div className='flex flex-col mx-[83px] md:mx-[183px] items-center mt-6'>
            <div className='bg-[#E0AF85] py-3 md:py-4 w-[269px]'>
                <h1 className='text-center text-[#0B2C2C] font-TTExtraBold uppercase'>Book Me to Speak</h1>
            </div>
            <div className='bg-[#0B2C2C] py-3 md:py-4 w-[269px] mt-[19px]'>
                <h1 className='text-center text-white font-TTExtraBold'>SUBMIT AN INQUIRY</h1>
            </div>

        </div>

    </section>
    </>
  )
}

export default HeroAbout