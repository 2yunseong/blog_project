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
  height: 5rem;
`;

const Input = styled.input`
  flex: 1;
`;

const Label = styled.span`
  width: 5rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-right: 0.3rem;
`;

const CommentComponent = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const SubmitBtn = styled.button``;

const Comment = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`/comment?page=${id}`).then((res) => {
      setComments(() => res.data);
    });
  }, []);

  const resetCommentInput = () => {
    setName(() => '');
    setPassword(() => '');
    setContent(() => '');
  };

  const submitComment = () => {
    const sendData = {
      name,
      password,
      content,
    };
    axios.post(`/comment?page=${id}`, sendData).then((res) => {
      resetCommentInput();
      setComments([
        ...comments,
        {
          cid: comments.length + 1,
          ...sendData,
        },
      ]);
    });
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(() => e.target.value);
        break;
      case 'password':
        setPassword(() => e.target.value);
        break;
      case 'content':
        setContent(() => e.target.value);
        break;
      default:
    }
  };

  return (
    <CommentContainer>
      <h2>{comments.length} κ°μ λκΈ</h2>
      {comments.map((comment) => (
        <CommentComponent key={comment.cid}>
          <h3>{comment.name}</h3>
          <p>{comment.content}</p>
        </CommentComponent>
      ))}
      <CommentInputContainer>
        <UserInfo>
          <InputContainer>
            <Label>λλ€μ :</Label>
            <Input type='text' name='name' onChange={onChange} value={name} />
          </InputContainer>
          <InputContainer>
            <Label>λΉλ°λ²νΈ:</Label>
            <Input
              type='password'
              name='password'
              onChange={onChange}
              value={password}
            />
          </InputContainer>
        </UserInfo>
        <CommentTextArea name='content' onChange={onChange} value={content} />
        <SubmitBtn onClick={submitComment}>μ μΆ</SubmitBtn>
      </CommentInputContainer>
    </CommentContainer>
  );
};

export default Comment;
