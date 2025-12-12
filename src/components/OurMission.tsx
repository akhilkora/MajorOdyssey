import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`;

const Wrapper = styled.section`
  background: #223a83ff;
  padding: 7rem 2rem;
  display: flex;
  justify-content: center;
  position: center;

  &::before {
    content: "";
    display: block;
    height: 120px; 
    margin-top: -120px; 
    visibility: hidden;
  }
`;

const Card = styled.div<{ visible: boolean }>`
  background: linear-gradient(135deg, #223a83ff 0%, #1b2a5aff 100%);
  border-radius: 20px;
  padding: 4rem 3rem;
  max-width: 800px;
  box-shadow: 0 10px 20px hsla(229, 100%, 50%, 0.15);
  animation: ${({ visible }) => (visible ? fadeInUp : "none")} 1.2s ease
    forwards;
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const Heading = styled.h2`
  color: #eafcff;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.75rem;
  color: #e6fafa;
  line-height: 1.7;
  text-align: center;
`;

const OurMission: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper id="mission" ref={ref}>
      <Card visible={visible}>
        <Heading>Our Mission</Heading>
        <Paragraph>
            Our mission is to empower students of every major to explore their future careers through interactive, real-world simulations. We aim to make career discovery hands-on, engaging, and personalized—giving students the confidence, skills, and clarity they need to choose the path that’s right for them.
        </Paragraph>
      </Card>
    </Wrapper>
  );
};

export default OurMission;
