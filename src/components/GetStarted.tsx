import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  background: #223a83ff;
  padding: 6rem 2rem;
  text-align: center;
  color: #eafcff;
`;

const glowPulse = keyframes`
   rgba(0, 213, 255, 0.3)
`;

const CallToAction = styled.p`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: rgb(255, 255, 255);
`;

const GetStartedButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 3rem;
  border: 2px solid #ffffffff;
  background-color: transparent;
  color: #ffffffff;
  border-radius: 50px;
  cursor: pointer;
  animation: ${glowPulse} 2s infinite ease-in-out;
  transition: 0.4s ease;

  &:hover {
    background: #0084ffff;
    color: #001d2f;
    box-shadow: 0 0 40px #ffffffff;
  }
`;

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <Section id="start">
      <CallToAction>Ready to explore?</CallToAction>
      <GetStartedButton onClick={() => navigate('/Login')}>
        Get Started
      </GetStartedButton>
    </Section>
  );
};
