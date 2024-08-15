import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBlog } from '../../features/blogs/blogSlice';
import AddBlogs from './AddBlogs';

const Blogs = () => {
    const blogs = useSelector((state) => state.blogs || []);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeBlog(id));
    };

    if (!blogs.length) {
        return <p className="text-center text-gray-500">No blogs available.</p>;
    }

    return (
        <>
        <AddBlogs/>

                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-gray-100 flex items-center justify-center min-h-screen">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            {/* Image Section */}
                            <div className="">
                                <img
                                    src={blog.img !== "NULL" ? blog.img : "https://via.placeholder.com/300x200"}
                                    alt={blog.title}
                                    className=""
                                />
                            </div>
                            {/* Content Section */}
                            <div className="w-2/3 p-4">
                                <h2 className="text-xl font-bold text-gray-800 mb-2 card-title">{blog.title}</h2>
                                <p className="text-gray-600 card-body">{blog.intro}</p>
                                <button 
                                    onClick={() => handleDelete(blog.id)} 
                                    className="btn btn-primary mt-4">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default Blogs;
