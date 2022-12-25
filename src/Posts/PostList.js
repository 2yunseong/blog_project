import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import MainContainer from '../styles/MainContainer';
import Post from './Post';

const PostListContainer = styled(MainContainer)``;

const PostList = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  useEffect(() => {
    axios.get('/posts/recent').then((res) => {
      setRecentPosts(() => res.data);
    });
  }, []);
  return (
    <PostListContainer>
      <h1>Post</h1>
      {recentPosts.map((recentPost) => (
        <Post
          pageId={recentPost.id}
          key={recentPost.id}
          title={recentPost.title}
          timeStamp={recentPost.timeStamp}
          content={recentPost.title}
        />
      ))}
    </PostListContainer>
  );
};

export default PostList;
