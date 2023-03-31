import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [spentTimeTotal, setSpentTimeTotal] = useState([0])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleSpentTime = (time) => {
        setSpentTimeTotal([...spentTimeTotal, time])
    }

    return (
        <div className='grid lg:grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
                {
                    blogs.map(blog => <Blogs key={blog.id} blog={blog} handleSpentTime={handleSpentTime}></Blogs>)
                }
            </div>
            <div className='p-4'>
                <h4 className='text-blue-500 text-lg font-bold p-4 text-center bg-blue-50'>Spent time on read : {spentTimeTotal.reduce((acc, value) => acc + value)} min</h4>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;