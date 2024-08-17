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

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  if (!blogs.length) {
    return <p className="text-center text-gray-500">No blogs available.</p>;
  }

  return (
    <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      {blogs.map((blog) => (
        <section
          key={blog.id}
          className="bg-white text-gray-600 body-font overflow-hidden border-b-4 border-gray-200 border-opacity-50 hover:border-opacity-100 transition duration-300 ease-in-out mb-4 shadow-lg rounded-lg"
        >
          <div className="container px-5 pt-8 pb-6 mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex-shrink-0">
                <div className="md:w-64 flex flex-col mb-4 md:mb-0">
                  <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                  <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
              </div>
              <div className="md:flex-grow md:mr-4">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{blog.title}</h2>
                <p className="leading-relaxed">
                  {truncateText(blog.intro, 150)} {/* Adjust the max length as needed */}
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer hover:underline">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="mt-4 md:mt-0 md:ml-auto flex justify-end">
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Blogs;
