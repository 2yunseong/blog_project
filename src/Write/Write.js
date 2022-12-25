import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';

import MainContainer from '../styles/MainContainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WriteContainer = styled(MainContainer)``;

const SubmitBtn = styled.button`
  background-color: white;
  outline: none;
  border: 1px solid #dadce5;
  width: 12rem;
  height: 3.5rem;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
    color: white;
    background-color: #dadce5;
  }
`;

const TitleInput = styled.input`
  flex: 1;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  border: 1px solid #dadce5;
  border-radius: 5px;
  padding-left: 10px;
`;

const TitleLabel = styled.span`
  margin-right: 0.8rem;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  line-height: 2;
  margin: 1.5rem 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 1rem 0;
`;

const Write = () => {
  const writeRef = useRef();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const onChange = ({ target: { value } }) => {
    setTitle(() => value);
  };
  const onSubmit = () => {
    const date = new Date();
    const dto = {
      timeStamp: date.toLocaleDateString(),
      title,
      content: writeRef.current.getInstance().getHTML(),
    };

    axios
      .post('/post', dto)
      .then((res) => {
        console.log(res);
      })
      .then((data) => {
        alert('작성을 완료했습니다.');
        navigate(-1);
      })
      .catch((error) => {
        alert('알수 없는 에러가 발생.');
      });
  };
  return (
    <WriteContainer>
      <h1>글 쓰기</h1>
      <TitleContainer>
        <TitleLabel>제목 :</TitleLabel>
        <TitleInput
          placeholder='제목을 입력하세요.'
          value={title}
          onChange={onChange}
        />
      </TitleContainer>
      <Editor
        height='30rem'
        usageStatistics={false}
        ref={writeRef}
        initialValue={'여기에 입력하세요.'}
      />
      <Footer>
        <SubmitBtn onClick={onSubmit}>제출</SubmitBtn>
      </Footer>
    </WriteContainer>
  );
};

export default Write;
