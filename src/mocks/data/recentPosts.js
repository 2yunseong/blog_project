const date = new Date().toLocaleDateString;
const recentPosts = [
  {
    id: 1,
    timeStamp: date,
    title: '나의 React 도전기',
    content:
      '안녕하세요. 윤성입니다. 지난 1년간 공부했던 리액트를 다시 보는 중입니다.',
  },
  {
    id: 2,
    timeStamp: date,
    title: '우아한 테크코스 5기 최종 코딩테스트 후기',
    content:
      '지난 17일 우아한 형제들에서 주관하는 우아한 테크코스 5기 FE 최종 코딩테스트가 한국 루터회관 14층에서 진행되었습니다.',
  },
  {
    id: 3,
    timeStamp: date,
    title: '뻘글 입니다.',
    content: '진짜 뻘글입니다.',
  },
];

export default recentPosts;
