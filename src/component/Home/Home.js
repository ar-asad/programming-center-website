import React from 'react';

const Home = () => {
    return (
        <div className='grid lg:grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
                <h2>This is bolgs container</h2>
            </div>
            <div>
                <h2>This is cart container</h2>
            </div>
        </div>
    );
};

export default Home;