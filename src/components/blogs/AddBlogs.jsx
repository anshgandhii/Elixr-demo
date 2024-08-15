import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../features/blogs/blogSlice';

const AddBlogs = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [intro, setIntro] = useState('');
    const [img, setImg] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImg(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addBlog({ title, intro, img }));

        setTitle('');
        setIntro('');
        setImg(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="intro">Introduction:</label>
                <textarea
                    id="intro"
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="img">Upload Image:</label>
                <input
                    type="file"
                    id="img"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <button type="submit">Add Blog</button>
        </form>
    );
};

export default AddBlogs;
