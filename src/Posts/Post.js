import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 0 auto;
`;

const Title = styled.h2``;

const Content = styled.div``;

const Post = ({ title, content }) => {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </PostContainer>
  );
};

export default Post;
