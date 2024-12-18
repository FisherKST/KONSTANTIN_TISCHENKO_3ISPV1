import React from 'react';

const PostList = ({ posts, setSelectedPost, deletePost }) => {
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <button onClick={() => setSelectedPost(post)}>Подробнее</button>
                    <button onClick={() => deletePost(post.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
