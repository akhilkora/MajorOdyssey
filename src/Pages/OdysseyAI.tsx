import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";

const pulse = keyframes`
  0% { box-shadow: 0 0 0px rgba(0, 200, 255, 0.4); }
  50% { box-shadow: 0 0 20px rgba(0, 200, 255, 0.7); }
  100% { box-shadow: 0 0 0px rgba(0, 200, 255, 0.4); }
`;

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: radial-gradient(circle at top, #006effff, #000000);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.7;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  padding: 1rem 3rem;
  font-size: 1.25rem;
  border-radius: 50px;
  background: #00a6ff;
  border: none;
  color: white;
  cursor: pointer;
  animation: ${pulse} 2.5s infinite ease-in-out;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: #00cfff;
  }
`;

export default function OdysseyAI() {
  return (
    <>
    <Navbar />
    <PageWrapper>
      <Title>Odyssey AI</Title>
      <Subtitle>Fast, helpful, and ready to assist you with you majors anytime</Subtitle>
      <Button>Get Started</Button>
    </PageWrapper>
    </>
  );
}
