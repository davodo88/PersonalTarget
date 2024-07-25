import Image from 'next/image';
import imgtop from '../public/bg-pattern-top.svg'
import imgbtm from '../public/bg-pattern-bottom.svg'
import Photo from './components/Photo';


export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden p-10 md:px-20 items-center justify-center bg-teal-600 relative">
      <Image src={imgtop} width={''} height={''} className='absolute -top-44 -left-44 md:-left-80 md:-top-80 z-0' />
      <Image src={imgbtm} width={''} height={''} className='absolute -bottom-44 -right-44 md:-right-80 md:-bottom-80 z-0' />
      <div className='flex flex-col items-center justify-center relative h-[500px] md:h-[50rem] w-full md:w-[700px] rounded-3xl border-[1px] border-gray-800 z-10 shadow-gray-700 shadow-2xl '>
        {/*parte superior tarjeta*/}
        <div className='flex justify-center items-center w-full h-2/5 bg-top bg-contain rounded-t-3xl border-b-[1px] border-b-black'>
        </div>
        <div className='absolute top-32 md:top-48 flex items-center justify-center w-full '>
          <Photo className='overflow-hidden flex items-center justify-center w-[125px] md:w-[250px] h-[125px] md:h-[250px] bg-red-500 rounded-full border-8 md:border-[12px] border-white ' />
        </div>
        {/*parte medio tarjeta*/}
        <div className='flex flex-col justify-center items-center w-full h-2/5 bg-white border-b-2 border-gray-200 '>
          <div className='flex w-full h-2/3'></div>
          <div className='flex flex-col md:w-1/2 justify-around items-center w-full h-2/3'>
            <p className='flex w-full md:w-3/4 justify-around text-[1.5rem] md:text-[2rem] items-center'>
              <b>Victor Crest</b> {'\t'} <span className='text-gray-600'>26</span>
            </p>
            <span className='flex justify-evenly text-[1.2rem] md:text-[1.5rem] items-center tracking-widest'>London</span>
          </div>
        </div>
        {/*parte baja tarjeta*/}
        <div className='flex h-1/5 w-full rounded-b-3xl bg-white'>
          <div className='w-1/3 h-full flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl'>80K</h1>
            <h3 className='font-light text-lg tracking-widest'>Followers</h3>
          </div>
          <div className='w-1/3 h-full flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl'>803K</h1>
            <h3 className='font-light text-lg tracking-widest'>Likes</h3>
          </div>
          <div className='w-1/3 h-full flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl'>1.4K</h1>
            <h3 className='font-light text-lg tracking-widest'>Followers</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
