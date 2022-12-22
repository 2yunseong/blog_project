import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h3``;

const Content = styled.div`
  color: #888;
`;

const Post = ({ title, content }) => {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </PostContainer>
  );
};

export default Post;
