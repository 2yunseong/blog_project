import axios from 'axios';
import styled from 'styled-components';
import MainContainer from '../styles/MainContainer';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { Viewer } from '@toast-ui/react-editor';

import Comment from './Comment';

const PostContainer = styled(MainContainer)``;
const Title = styled.h1``;
const TimeContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: #888;
  font-size: 1rem;
`;

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [timeStamp, setTimeStamp] = useState('');

  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  useEffect(() => {
    axios.get(`/post?page=${query.page}`).then((req) => {
      setTitle(() => req.data.title);
      setContent(() => req.data.content);
      setTimeStamp(() => req.data.timeStamp);
    });
  }, []);

  return (
    <PostContainer>
      <Title>{title}</Title>
      <hr />
      <TimeContainer>{timeStamp}</TimeContainer>
      {content && <Viewer initialValue={content} />}
      <hr />
      <Comment id={query.page} />
    </PostContainer>
  );
};

export default Post;
