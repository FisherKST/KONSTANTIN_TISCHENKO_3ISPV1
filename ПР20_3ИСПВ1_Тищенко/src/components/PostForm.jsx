import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ title, body, userId: 1 });
        setTitle('');
        setBody('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Заголовок" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Содержимое" 
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
                required 
            />
            <button type="submit">Добавить пост</button>
        </form>
    );
};

export default PostForm;
