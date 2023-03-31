import React from 'react';

const BlogQsAnswer = () => {
    return (
        <div className='m-8'>
            <h2 className='text-xl font-semibold'>Question-1 : Props and State </h2>
            <p className='text-lg mb-3'>Ansewer : We can pass data componet by props and props are immutable, it is not changeable it is read only,we cannot chnage it. Otherwise state are mutable it is read and write we change it if we can need. </p>
            <h2 className='text-xl font-semibold'>Question-2 :How does useState work? </h2>
            <p className='text-lg mb-3'>Ansewer: UseState is a hook it takes a initial value as an argument.We can update this update this initial value for this useState returns a state value and a function to update this value  </p>
            <h2 className='text-xl font-semibold'>Question-3 : Purpose of useEffect other than fetching data? </h2>
            <p className='text-lg mb-3'>Ansewer: Purpose of useEffect other than fetching data We can remove redundant code in our component and make same functionality in one place.</p>
            <h2 className='text-xl font-semibold'>Question-4 :How does React work? </h2>
            <p className='text-lg mb-3'>Ansewer:React is a open source javascript library for used to create modular user interfaces.Through it we development of reusable UI components that display dynamic data.React creates 2 copies virtual dom of React Real dom. When there is a change in the component it the first copy is re-rendered and compared with the second copy and updates only that part in the real dom.</p>
        </div>
    );
};

export default BlogQsAnswer;