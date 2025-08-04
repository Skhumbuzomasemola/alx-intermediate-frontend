import React from 'react';
import PostCard from '../../components/common/PostCard';

const PostsPage = () => {
  // Example posts data
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is the first post.' },
    { id: 2, title: 'Second Post', excerpt: 'This is the second post.' },
  ];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard key={post.id} title={post.title} excerpt={post.excerpt} />
        ))}
      </div>
    </main>
  );
};

export default PostsPage;

