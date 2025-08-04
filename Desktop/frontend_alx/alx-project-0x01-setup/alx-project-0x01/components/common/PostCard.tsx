import React from 'react';

interface PostCardProps {
  title: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt }) => {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;

