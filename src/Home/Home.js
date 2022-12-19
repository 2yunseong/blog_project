import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';
import profileImg from './img/profile_image.png';
const ProfileContainer = styled.div``;

const Profile = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 60px;
`;

const ProfileInfo = styled.div``;

const UserName = styled.h3``;

const Introduction = styled.p``;

const Title2 = styled.h2``;

const Home = () => {
  return (
    <ProfileContainer>
      <Profile>
        <ProfileImg src={profileImg} />
        <ProfileInfo>
          <UserName>이윤성(@2yunseong)</UserName>
          <Introduction>
            안녕하세요, FE 개발자를 꿈꾸는 이윤성입니다.
          </Introduction>
        </ProfileInfo>
      </Profile>
      <Title2>Github Contribution</Title2>
      <GitHubCalendar username='2yunseong' />
      <Title2>Recent Post</Title2>
    </ProfileContainer>
  );
};

export default Home;
