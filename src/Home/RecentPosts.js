import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Post from './Post';

const RecentPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  useEffect(() => {
    axios.get('/posts/recent').then((res) => {
      setRecentPosts(() => res.data);
    });
  }, []);
  return (
    <RecentPostContainer>
      {recentPosts.map((recentPost) => (
        <Post
          title={recentPost.title}
          content={recentPost.content}
          key={recentPost.id}
          pageId={recentPost.id}
        />
      ))}
    </RecentPostContainer>
  );
};

export default RecentPosts;
