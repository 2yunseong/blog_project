import styled from 'styled-components';

import MainContainer from '../styles/MainContainer';
import './Portfolio.module.scss';

const PortfolioContainer = styled(MainContainer)``;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h1>Portfolio</h1>
      <h3>기술 스택</h3>
      <ul>
        <li>Javascript</li>
        <ul>
          <li>react</li>
        </ul>
        <li>Swift</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
      <h3>대외활동 및 수상내역</h3>
      <ul>
        <li>전남대학교 SW 프로그래밍 경진대회 전공부 장려상</li>
        <li>SW중심대학 공통해커톤 2022 후원기업상(OSBC)상</li>
        <li>전남대학교 IT개발동아리 에코노베이션 회장(2022~ )</li>
        <li>22' Naver D2 Campus Partner 활동 중</li>
        <li>2022 오픈소스 컨트리뷰션 아카데미 Master's 멘티 수료</li>
      </ul>
      <h3>프로젝트 소개</h3>
      <h4>에코노 냉장고</h4>
      <h4>EggMeet</h4>
      <h4>T-econo</h4>
    </PortfolioContainer>
  );
};

export default Portfolio;
