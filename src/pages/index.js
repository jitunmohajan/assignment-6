import Carousel from '@/components/Carousel';
import MultipleCard from '@/components/MultipleCard';
import Nav from '@/components/Nav';
import React from 'react';

const HomePage = () => {
  return (
    <div data-theme="lofi">
     <Nav></Nav>
     <Carousel></Carousel>
     <MultipleCard></MultipleCard>
    </div>
  );
};

export default HomePage;