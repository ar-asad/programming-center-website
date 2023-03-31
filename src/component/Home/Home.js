import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='grid lg:grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
                {
                    blogs.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
                }
            </div>
            <div>
                <h2>This is cart container</h2>
            </div>
        </div>
    );
};

export default Home;