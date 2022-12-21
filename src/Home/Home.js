import axios from 'axios';
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';
import profileImg from './img/profile_image.png';
import RecentPosts from './RecentPosts';

const ProfileContainer = styled.div`
  max-width: 1400px;
  width: 900px;
  min-width: 850px;
  margin: 5rem auto;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 60px;
`;

const ProfileInfo = styled.div`
  flex: 1;
  margin-left: 2rem;
`;

const UserName = styled.h2``;

const Introduction = styled.p`
  color: #888;
`;

const Title2 = styled.h2``;

const ContributionContainer = styled.div`
  margin-bottom: 2rem;
`;

const Home = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(`/user/profile?id=1`).then((res) => {
      setProfile(() => {
        return res.data;
      });
    });
  }, []);

  return (
    <ProfileContainer>
      <Profile>
        <ProfileImg src={profileImg} />
        <ProfileInfo>
          <UserName>
            {profile.name}(@{profile.githubName})
          </UserName>
          <Introduction>{profile.introduction}</Introduction>
        </ProfileInfo>
      </Profile>
      <ContributionContainer>
        <Title2>Github Contribution</Title2>
        {profile.githubName && <GitHubCalendar username={profile.githubName} />}
      </ContributionContainer>
      <Title2>Recent Post</Title2>
      <RecentPosts />
    </ProfileContainer>
  );
};

export default Home;
