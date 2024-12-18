import React, { useState } from 'react';

const PostDetail = ({ post, setSelectedPost, isEditing, setIsEditing, updatePost }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleUpdate = () => {
        updatePost(post.id, { title, body });
        setIsEditing(false);
        setSelectedPost(null);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                    <button onClick={handleUpdate}>Сохранить</button>

                    <button onClick={() => setIsEditing(false)}>Отмена</button>
                </>
            ) : (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => setIsEditing(true)}>Редактировать</button>
                    <button onClick={() => setSelectedPost(null)}>Назад</button>
                </>
            )}
        </div>
    );
};

export default PostDetail;
