import React from 'react'
import Styles from './Home.css'





function Home() {
  return (
    <div>
     {/*  Header Part start */}
    <div className='bg-white p-8 rounded-lg w-auto h-auto shadow-lg  flex space-x-80  > '>

        <div className='text-pink-600  font-medium text-2xl font-ubuntu italic '>Webure Technologies</div>

        <div className='flex space-x-20 '>

        <div className='flex space-x-5  text-gray-500'>
            <p>About US</p>
            <p>Services</p>
            <p>Career</p>
            <p>ROL Stories</p>
            <p>Blog</p>
            <p>Contact US</p>
        </div>
        <div>
            <button  className=' text-black text-xs  py-2 px-5 rounded-full   border-2 border-grey-600'>Lets's Talk</button>
        </div>
        </div>
    </div>
    {/* Header end */}

    {/* image container start */}
    <div className='mt-10  bg-cover  flex w-auto h-96    object-cover
    
    '>
      {/* left */}
       <div className=' w-1/2 ' >
            
            <div className='flex  ml-10 space-x-2'>
              <img className='h-5' src={require('./assets/verify.png')} alt="" />
              <img className='h-3.5' src={require('./assets/Best Business Platform - World Record 2021.png')} alt="" />
            </div>
            <div className='w-auto ml-0 mt-5 h-auto '>
               <p className='text-6xl  text-black font-bold '>Reach Your Bussiness</p>
               <img className='ml-96 ' src={require('./assets/Vector 20.png')} alt="" />
               <p className='text-6xl  text-black font-bold '> Goals in Record Time </p>
            </div>

            <div>
            <img className='ml-11 mt-9 ' src={require('./assets/supp.png')} alt="" />
            </div>

            <div className='flex mt-8'>
            <button className='ml-10 rounded-full py-2 px-5 text-white bg-pink-600 '>Get Sterted</button>
               <img className='h-5 mt-3 ml-3' src={require('./assets/Book.png')} alt="" />
               
            </div>
       </div>
       {/* right */}
       <div className='flex bg-cover1  w-1/2 '>
        <img className='w-1/2 h-12 mt-20 ml-20 ' src={require('./assets/Vector top.png')} alt="" />

       <div className='w-2/2 -mt-8'>
       <img className='absolute -mt-12  -ml-5  mr-11  ' src={require('./assets/1 1.png')} alt="" />
       
       </div>

       <img className='w-1/1 h-20 ml-96 mt-60 mb-96  ' src={require('./assets/Vector end.png')} alt="" />
              
       </div>
      

    </div>
    <div className='relative	 ml-auto w-40   shadow-lg h-20 '>
                  <div className='flex space-x-2 mt-2'>
                       <img className='w-5 h-8' src={require('./assets/4.9.png')} alt="" />
                        <div className='w-3 h-5 flex space-x-1'>
                          <img src={require('./assets/Star.png')} alt="" />
                          <img src={require('./assets/Star.png')} alt="" />
                          <img src={require('./assets/Star.png')} alt="" />
                          <img src={require('./assets/Star.png')} alt="" />
                          <img src={require('./assets/Star.png')} alt="" />
                        </div>
                  </div>
                  <div className='h-5 flex space-x-1 mt-3'>
                
                          <img src={require('./assets/images.jpg')} alt="" />
                          <img src={require('./assets/images.jpg')} alt="" />
                          <img src={require('./assets/images.jpg')} alt="" />
                          <img src={require('./assets/images.jpg')} alt="" />
                          <img src={require('./assets/images.jpg')} alt="" />
                  </div>

              </div>
{/* image container end   src={require('.')}*/}
    <div className='flex w-auto h-20  space-x-60'>
       <div className='w-40 h-5 '><img src={require('./assets/slackImg.png')} alt="" /></div>
       <div className='w-40 h-5 '><img src={require('./assets/Vector (2).png')} alt="" /></div>
       <div className='w-40 h-5 '><img src={require('./assets/Micro1.png')} alt="" /></div>
       <div className='w-40 h-5 '><img src={require('./assets/Zoover.png')} alt="" /></div>
    </div>
    {/* lobo name completed */}

    <div className='mt-5 flex h-60 space-x-40 '>
      <div className='w-96 space-y-5 '>
      <img src={require('./assets/SERVICES.png')} alt="" />
      <img src={require('./assets/Our.png')} alt="" />
      <img src={require('./assets/we will.png')} alt="" />

      </div>
      <div className='w-96  space-y-5'>
      <img src={require('./assets/shop.png')} alt="" />
      <img src={require('./assets/Consult.png')} alt="" />
      <img src={require('./assets/Leverag.png')} alt="" />
      </div>
      <div className='w-96 space-y-5'>
      <img src={require('./assets/cards.png')} alt="" />
      <img src={require('./assets/Create.png')} alt="" />
      <img src={require('./assets/Bring.png')} alt="" />
      </div>
      <div className='w-96 space-y-5'>
      <img src={require('./assets/favorite-chart.png')} alt="" />
      <img src={require('./assets/Collaborate.png')} alt="" />
      <img src={require('./assets/Grow.png')} alt="" />
      </div>
    </div>
    {/* completed */}

    <div  className='bg-cover flex bg w-auto h-auto  '>
      {/* left */}
      <div className='  flex w-1/2 '>
    

      <div className='w-2/2 -mt-8 bgorange'>
      <img className=' absolute max-h-80 ml-40 mt-20    ' src={require('./assets/2 1.png')} alt="" />

     </div>
   <div className=' ml-96 space-y-20'>
   
    <img className='w-20 h-20 mt-20  ' src={require('./assets/10.png')} alt="" />
    <img className='w-20 h-20 ml-5 ' src={require('./assets/20.png')} alt="" />
   </div>
       
      </div>
{/* right */}

      <div className='bg-cover1 w-1/2  space-y-10'>
      <img className='mt-3   ' src={require('./assets/Wc.png')} alt="" />
      <img className='h-20  ' src={require('./assets/Take.png')} alt="" />
      <div className='flex space-x-2'>
      <img className='   ' src={require('./assets/tik.png')} alt="" />
      <img className='  ' src={require('./assets/Cf.png')} alt="" />
      </div>
      <div className='flex space-x-2'>
      <img className='   ' src={require('./assets/tik.png')} alt="" />
      <img className='  ' src={require('./assets/Dpm (1).png')} alt="" />
      </div>
      <div className='flex space-x-2'>
      <img className='   ' src={require('./assets/tik.png')} alt="" />
      <img className='  ' src={require('./assets/Dpm (2).png')} alt="" />
      </div>

      <div>
        <div className='flex'>
        <img className='h-4   ' src={require('./assets/Email.png')} alt="" />
        <button className='ml-10 rounded-full py-2 px-5 text-white bg-pink-600 '>Get Sterted</button>
        </div>
        <hr  className='w-60 border-solid border-2 border-white-600' />
      </div>
         
      </div>
    </div>
    {/* completed */}
    <div className='w-auto'>
    <img className='  ' src={require('./assets/B1.png')} alt="" />
    </div>
    {/* completed */}
    <div>
    <img className='  ' src={require('./assets/B2.png')} alt="" />
    </div>
    {/* completed */}
    <div className='flex'>
      <div className='ml-96' >
        <div className='flex '> <img className='  ' src={require('./assets/XMLID_47_.png')} alt="" />
        <div className='flex -ml-28 mt-3 w-40 h-24'><img className='  ' src={require('./assets/XMLID_32_.png')} alt="" />
        <div className='flex -ml-20 mt-3 w-16 h-16'><img className='  ' src={require('./assets/XMLID_17_.png')} alt="" />

        </div>
        </div>
        </div>
        
      </div>
      <div>
      <img className=' -ml-28 mt-11  ' src={require('./assets/WWD.png')} alt="" />
      </div>
    </div>
    {/* completed */}

    <div className='flex space-x-20 mt-4 '>
    <img className='w-1/1 h-20 mt-5 ml-2 ' src={require('./assets/Os.png')} alt="" />
    <img className=' w-2/1 ml-16 ' src={require('./assets/It.png')} alt="" />
    </div>

    {/* completed */}
    <div className='mt-10 space-y-28'>
      {/* 1st line */}
      <div className='flex space-x-24  px-28'>
        <div className='space-y-5 bg-blue-800 shad px-10 '>
        <img className='ml-3 ' src={require('./assets/d1.png')} alt="" />
        <img className='ml-3  ' src={require('./assets/c1 (3).png')} alt="" />
        <img className=' ' src={require('./assets/c1 (4).png')} alt="" />
     </div>
        <div className='space-y-5 shad px-10 '>
        <img className='ml-3 ' src={require('./assets/G5.png')} alt="" />
        <img className='  ' src={require('./assets/c1 (2).png')} alt="" />
        </div>
        <div className='space-y-5 shad px-10 '>
        <img className='ml-3 ' src={require('./assets/G6.png')} alt="" />
        <img className='  ' src={require('./assets/c1 (1).png')} alt="" />
        </div>
        <div className='space-y-5 shad px-10 '>
        <img className='ml-3 ' src={require('./assets/G7.png')} alt="" />
        <img className='  ' src={require('./assets/c1 (5).png')} alt="" />
        </div>
      </div>
      {/* 2line */}
      <div className='flex space-x-36  px-28'>
        <div className='space-y-5  shad px-10 '>
        <img className='ml-3 ' src={require('./assets/G7.png')} alt="" />
        <img className='ml-3  ' src={require('./assets/c1 (2).png')} alt="" />
     
     </div> 
        <div className='space-y-5 shad px-10'>
        <img className='ml-3 ' src={require('./assets/G8.png')} alt="" />
        <img className='ml-3  ' src={require('./assets/c2 (4).png')} alt="" />
        </div>
        <div className='space-y-5 shad px-10 '>
        <img className='ml-3 ' src={require('./assets/G9.png')} alt="" />
        <img className='ml-3  ' src={require('./assets/c2 (3).png')} alt="" />
        </div>
        <div className='space-y-5 shad px-10 '>
        <img className='ml-3 ' src={require('./assets/G10.png')} alt="" />
        <img className=' ml-3 ' src={require('./assets/c2 (2).png')} alt="" />
        </div>
      </div>
      {/*  */}
      <div className='flex space-x-36  px-40'>
          
        <div className='space-y-5 shad px-10'>
        <img className='ml-3 mt-2  ' src={require('./assets/pic (1).png')} alt="" />
        <img className='ml-3  ' src={require('./assets/pc (1).png')} alt="" />
        </div>
        <div className='space-y-5 shad px-10 '>
        <img className='ml-3 mt-2' src={require('./assets/pic (2).png')} alt="" />
        <img className='ml-3  ' src={require('./assets/pc (2).png')} alt="" />
        </div>
        <div className='space-y-5 shad px-10 '>
        <img className='ml-3 mt-2 ' src={require('./assets/pic (3).png')} alt="" />
        <img className=' ml-3 ' src={require('./assets/pc (3).png')} alt="" />
        </div>
      </div>
      {/*  */}
      <div className='flex space-x-36  px-40'>
          
          <div className='space-y-5 shad px-10'>
          <img className='ml-3 mt-2  ' src={require('./assets/pic4.png')} alt="" />
          <img className='ml-3  ' src={require('./assets/pc6.png')} alt="" />
          </div>
          <div className='space-y-5 shad px-10 '>
          <img className='ml-3 mt-2' src={require('./assets/pic5.png')} alt="" />
          <img className='ml-3  ' src={require('./assets/pc5.png')} alt="" />
          </div>
          <div className='space-y-5 shad px-10 '>
          <img className='ml-3 mt-5 ' src={require('./assets/pc4.png')} alt="" />
          <img className=' ml-3 ' src={require('./assets/pc7.png')} alt="" />
          <button  className=' text-black text-xs  py-1 px-3 rounded-full   border-2 border-grey-600'>Get Start</button>
          </div>
        </div>
    </div>
    {/* completed */}
   
    </div>
  )
}

export default Home