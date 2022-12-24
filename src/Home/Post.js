import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  width: 220px;
  border-radius: 20px;
  border: 1px solid #eee;
  margin: 10px;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: 7px 4px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    transform: scale(1.03);
    transition: all ease-in 0.3s;
  }
`;

const PostContent = styled.div`
  color: #888;
  font-size: 0.8rem;
`;

const Post = ({ title, content, pageId }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/post?page=${pageId}`);
  };
  return (
    <PostContainer onClick={onClick}>
      <h3>{title}</h3>
      <PostContent>
        {content.slice(0, content.length > 200 ? 200 : content.length)}
      </PostContent>
    </PostContainer>
  );
};

export default Post;
