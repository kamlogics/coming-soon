import Image from 'next/image';
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-[#3E4C56] px-10 text-center  ">
      <div className='w-[90%] md:w-[70%] flex items-center justify-center flex-col shadow-2xl p-10 rounded-xl'>

        <Image src={'/kamlogics.png'} width={200} height={200} alt='Kamlogics Tech Solutions Logo' className='w-[200px]' />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">We Have Started!</h1>
        <p className="text-lg md:text-xl mb-6 text-[#3E4C56]">
          Kamlogics Tech Solutions is now operational. For inquiries or project discussions, feel free to contact us.
        </p>
        <p className="text-lg md:text-xl mb-6 text-[#3E4C56]">
          We're also working on an amazing website experience for you. Stay tuned!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@kamlogics.com"
            className="px-6 py-3 rounded-lg bg-white text-[#3E4C56] font-semibold shadow-md hover:shadow-lg transform transition hover:-translate-y-1"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/00923291147009"
            className="px-6 py-3 rounded-lg bg-white text-[#3E4C56] font-semibold shadow-md hover:shadow-lg transform transition hover:-translate-y-1"
          >
            WhatsApp Us
          </a>
        </div>
      </div>


    </div>
  );
};

export default ComingSoon;
