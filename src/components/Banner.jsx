import React from 'react';

const Banner = () => {
    return (
        <div className='bg-primary'>
            <div className='container mx-auto px-4 text-white text-center space-y-6 py-10'>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl '>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='md:w-3/4  mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='btn text-xl font-bold rounded-full text-primary bg-white px-6'>Shop Now</button>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Banner;