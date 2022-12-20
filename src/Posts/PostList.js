import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Post from './Post';

const PostListContainer = styled.div``;

const PostList = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  useEffect(() => {
    axios.get('/posts/recent').then((res) => {
      setRecentPosts(() => res.data);
    });
  }, []);
  return (
    <PostListContainer>
      {recentPosts.map((recentPost) => (
        <Post
          key={recentPost.id}
          title={recentPost.title}
          content={recentPost.title}
        />
      ))}
    </PostListContainer>
  );
};

export default PostList;
