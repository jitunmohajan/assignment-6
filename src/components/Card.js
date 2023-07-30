import Image from 'next/image';
import React from 'react';
import CardImage from '@/assets/images/card.jpg'

const Card = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <Image
                    src={CardImage}
                    alt="Example Image"
                    width={300}
                    height={200}
                    layout="responsive"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;