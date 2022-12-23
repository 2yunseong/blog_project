import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div``;

const CommentInputContainer = styled.div`
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentTextArea = styled.textarea`
  flex: 1;
`;

const Input = styled.input`
  margin: 1rem;
`;

const Label = styled.span`
  width: 5rem;
`;

const Comment = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get(`/comment?page=${id}`).then((res) => {
      setComments(() => res.data);
    });
  }, []);

  return (
    <CommentContainer>
      <h2>{comments.length} 개의 댓글</h2>
      {comments.map((comment) => (
        <>
          <h3>{comment.name}</h3>
          <p>{comment.content}</p>
        </>
      ))}
      <CommentInputContainer>
        <UserInfo>
          <div>
            <Label>닉네임 :</Label>
            <Input type='text' />
          </div>
          <div>
            <Label>비밀번호:</Label>
            <Input type='password' />
          </div>
        </UserInfo>
        <CommentTextArea />
      </CommentInputContainer>
    </CommentContainer>
  );
};

export default Comment;
