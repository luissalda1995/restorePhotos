import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3'>
      <div>
        Created by{' '}
        <a
          href='https://agenciaai.co/'
          target='_blank'
          className='font-bold transition hover:text-black/50'
        >
          Agencia AI
        </a>{' '}
      </div>
      <div className='flex space-x-4 pb-4 sm:pb-0'>
        {/* <Link
          href='https://github.com/luissalda1995/restorePhotos'
          className='group'
          aria-label='luissalda1995 on GitHub'
        >
        </Link> */}
      </div>
    </footer>
  );
}
