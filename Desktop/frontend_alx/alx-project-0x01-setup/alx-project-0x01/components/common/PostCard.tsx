import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">Post Title</h2>
      <p>This is a post description.</p>
    </div>
  );
};

export default PostCard;

