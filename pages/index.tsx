import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SquigglyLines from '../components/SquigglyLines';
// import { Testimonials } from '../components/Testimonials';
import { Details } from '../components/Details';

const Home: NextPage = () => {
  return (
    <div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen'>
      <Head>
        <title>Face Photo Restorer</title>
      </Head>
      <Header />
      <main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20'>
        <h1 className='mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl'>
          Restauración de Fotos {' '}
          <span className='relative whitespace-nowrap text-[#3290EE]'>
            <SquigglyLines />
            <span className='relative'>con IA</span>
          </span>{' '}
          y Servicio de Impresión Profesional.
        </h1>

        <p className='mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7'>
          ¿Tus fotos están desgastadas, rotas o borrosas? Recupera su belleza 
          con nuestra tecnología de restauración de fotos con inteligencia artificial (IA). 
          Convierte tus recuerdos en imágenes nítidas y vibrantes con solo unos clics. 
          Además, ofrecemos impresión de alta calidad para que conserves tus fotos restauradas en formato físico.
        </p>
        <div className='flex justify-center space-x-4'>

          <Link
            className='bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80'
            href='/restore'
          >
            Restaura tus fotos
          </Link>
        </div>
        <div className='flex justify-between items-center w-full flex-col sm:mt-10 mt-6'>
          <div className='flex flex-col space-y-10 mt-4 mb-16'>
            <div className='flex sm:space-x-2 sm:flex-row flex-col'>
              <div>
                <h2 className='mb-1 font-medium text-lg'>Original Photo</h2>
                <Image
                  alt='Original photo of my bro'
                  src='/michael.jpg'
                  className='w-96 h-96 rounded-2xl'
                  width={400}
                  height={400}
                />
              </div>
              <div className='sm:mt-0 mt-8'>
                <h2 className='mb-1 font-medium text-lg'>Restored Photo</h2>
                <Image
                  alt='Restored photo of my bro'
                  width={400}
                  height={400}
                  src='/michael-new.jpg'
                  className='w-96 h-96 rounded-2xl sm:mt-0 mt-2'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Testimonials /> */}
      <Details />
      <Footer />
    </div>
  );
};

export default Home;
