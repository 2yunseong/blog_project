import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  width: 220px;
  border-radius: 20px;
  border: 1px solid #eee;
  margin: 0 10px;
  padding: 1.5rem;
`;

const PostContent = styled.div`
  color: #888;
  font-size: 0.8rem;
`;

const Post = ({ title, content }) => {
  return (
    <PostContainer>
      <h3>{title}</h3>
      <PostContent>{content}</PostContent>
    </PostContainer>
  );
};

export default Post;
