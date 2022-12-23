import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  color: #888;
`;

const BodyContainer = styled.div``;

const TimeStamp = styled.div`
  color: #888;
`;

const Post = ({ title, content, timeStamp, pageId }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/post?page=${pageId}`);
  };
  return (
    <PostContainer onClick={onClick}>
      <BodyContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </BodyContainer>
      <TimeStamp>{timeStamp}</TimeStamp>
    </PostContainer>
  );
};

export default Post;
