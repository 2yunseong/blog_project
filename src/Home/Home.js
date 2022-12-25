import axios from 'axios';
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';

import MainContainer from '../styles/MainContainer';
import profileImg from './img/profile_image.png';
import RecentPosts from './RecentPosts';
import { Title2 } from '../styles/Title2';

const ProfileContainer = styled(MainContainer)``;

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

const Introduction = styled.p`
  color: #888;
`;

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
          <Title2>
            {profile.name}(@{profile.githubName})
          </Title2>
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
