import axios from 'axios';
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';
import profileImg from './img/profile_image.png';
import RecentPosts from './RecentPosts';
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
      <Title2>Github Contribution</Title2>
      {profile.githubName && <GitHubCalendar username={profile.githubName} />}
      <Title2>Recent Post</Title2>
      <RecentPosts />
    </ProfileContainer>
  );
};

export default Home;
