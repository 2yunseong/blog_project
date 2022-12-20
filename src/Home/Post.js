import styled from 'styled-components';

const PostContainer = styled.div``;

const Post = ({ title, content }) => {
  return (
    <PostContainer>
      <div>{title}</div>
      <div>{content}</div>
    </PostContainer>
  );
};

export default Post;
