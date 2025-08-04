import React from 'react';
import PostCard from '../../components/common/PostCard';

const PostsPage: React.FC = () => {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <PostCard />
    </main>
  );
};

export default PostsPage;

