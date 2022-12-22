import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import MainContainer from '../styles/MainContainer';

const WriteContainer = styled(MainContainer)``;

const SubmitBtn = styled.button``;
const Write = () => {
  return (
    <WriteContainer>
      <h1>글 쓰기</h1>
      <Editor usageStatistics={false} />
      <SubmitBtn>제출</SubmitBtn>
    </WriteContainer>
  );
};

export default Write;
