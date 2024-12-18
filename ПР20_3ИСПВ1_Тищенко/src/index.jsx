import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);

        }
    };

    const addPost = async (newPost) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });
            const data = await response.json();
            setPosts([...posts, data]);
            alert('Пост успешно создан!');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const updatePost = async (id, updatedPost) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });
            setPosts(posts.map(post => (post.id === id ? { ...post, ...updatedPost } : post)));
            alert('Пост успешно обновлен!');
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const deletePost = async (id) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });
            setPosts(posts.filter(post => post.id !== id));
            alert('Пост успешно удален!');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (

        <div>
            <h1>Посты</h1>
            <button onClick={fetchPosts}>Загрузить посты</button>
            <PostForm addPost={addPost} />
            <PostList posts={posts} setSelectedPost={setSelectedPost} deletePost={deletePost} />
            {selectedPost && (
                <PostDetail 
                    post={selectedPost} 
                    setSelectedPost={setSelectedPost} 
                    isEditing={isEditing} 
                    setIsEditing={setIsEditing} 
                    updatePost={updatePost}
                />
            )}
        </div>
    );
};

export default App;

