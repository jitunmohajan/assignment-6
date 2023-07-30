import React from 'react';
import Card from './Card';

const MultipleCard = () => {
    return (
        <div className='mb-10'> 
            <div className='flex justify-center mt-10 mb-10'>
                <h1 className='text-4xl'>Top Featured Parts</h1>
            </div>
            <div className='flex justify-center'>
                <div class="grid grid-rows-6 md:grid-rows-4 lg:grid-rows-2  grid-flow-col gap-6">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    );
};

export default MultipleCard;