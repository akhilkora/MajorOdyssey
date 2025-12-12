import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;
  background-color: #2e52c1ff;
  color: #c5c5c5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  text-align: center;
`;


const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffffff;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffffff;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer id="hero">
      <Title>Major Odyssey</Title>
      <Subtitle>Try your future before choosing it</Subtitle>
    </HeroContainer>
  );
};

export default HeroSection;
