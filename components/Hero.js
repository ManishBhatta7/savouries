import React from 'react';
import Image from 'next/image';
import heroImage from '../public/hero-image.jpg';

const Hero = () => {
  return (
    <div className="relative">
      <Image src={heroImage} alt="Savouries" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
      </div>
    </div>
  );
};

export default Hero;
