import React from 'react';
import { BookmarkIcon } from '@heroicons/react/24/solid'

const Blogs = ({ blog, handleSpentTime }) => {
    const { person_name, person_img, slot, time, job_name, cover_img } = blog;
    return (
        <div className='p-4'>
            <img className='rounded mb-6' src={cover_img} alt="" />
            <div className='flex justify-between px-4 mb-3'>
                <div className='flex gap-3'>
                    <img className='w-12 h-12 rounded-full' src={person_img} alt="" />
                    <div>
                        <h3 className='font-bold'>{person_name}</h3>
                        <p>{slot}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p>{time} min read</p>
                    <button><BookmarkIcon className="h-6 w-6 " /></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold mb-3'>{job_name}</h1>
            <button onClick={() => handleSpentTime(time)} className='text-blue-500 text-lg font-semibold underline underline-offset-4 mb-4'>Mark as read</button>
            <hr />
        </div>

    );
};

export default Blogs;