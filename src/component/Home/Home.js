import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Blogs from './Blogs';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [spentTimeTotal, setSpentTimeTotal] = useState([0]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleSpentTime = (time) => {
        setSpentTimeTotal([...spentTimeTotal, time])
    }

    const handleBookMarkBlogs = (blog) => {
        const exist = books.find(book => book.id === blog.id)
        if (!exist) {
            setBooks([...books, blog]);
        }
        else {
            toast.success('You Have Already Bookmarked This Blog !', {
                position: toast.POSITION.TOP_CENTER
            });
            setBooks([...books, blog])
        }
    }

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='lg:col-span-2'>
                {
                    blogs.map(blog => <Blogs key={blog.id} blog={blog} handleBookMarkBlogs={handleBookMarkBlogs} handleSpentTime={handleSpentTime}></Blogs>)
                }
            </div>
            <div className='p-4'>
                <h4 className='text-blue-500 text-lg font-bold p-4 mb-4 text-center bg-blue-50'>Spent time on read : {spentTimeTotal.reduce((acc, value) => acc + value)} min</h4>
                <div className='bg-gray-200 p-4'>
                    <h4 className='text-lg font-bold mb-4'>Bookmarked Blogs : {books.length}</h4>
                    {
                        books.map(book => <p key={book.id} className='p-4 m-2 rounded text-gray-900 font-semibold bg-slate-50'>{book.job_name}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;