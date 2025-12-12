import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { keyframes } from 'styled-components';

const glowPulse = keyframes`
   rgba(0, 213, 255, 0.3)
`;

const Section = styled.section`
  background: radial-gradient(circle at top, #006effff, #000000);
  padding: 6rem 2rem;
  text-align: center;
  color: #eafcff;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: #223a83ff;
  border-radius: 20px;
  padding: 2rem;
  width: 300px;
  box-shadow: 0 10px 20px hsla(229, 100%, 50%, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 213, 255, 0.3);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const LoginButton = styled.button`
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

export default function Courses() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <Section id="features">
      <Title>Simulations</Title>
      <CardsContainer>
        <FeatureCard>
          <h1>Finance</h1>
          <p>This Finance simulation teaches students how to manage money, analyze investments, and make smart financial decisions for businesses and individuals.</p>
        </FeatureCard>
        <FeatureCard>
          <h1>Education</h1>
          <p>This education simulation prepares students to understand how people learn and equips them with the skills to teach, support, and guide learners in school and community settings.
</p>
        </FeatureCard>
        <FeatureCard>
            <h1>Law</h1>
            <p>This law simulation focuses on understanding legal systems, rights, and justice while building skills in critical thinking, argumentation, and interpreting laws for real-world issues.
</p>
        </FeatureCard>
                <FeatureCard>
          <h1> Electrical Engineering</h1>
          <p>This Electrical Engineering simulation focuses on designing, analyzing, and improving electrical systems, from circuits and power systems to electronics and modern technology.
</p>
        </FeatureCard>
                <FeatureCard>
          <h1> Mechanical Engineering</h1>
          <p>This Mechanical Engineering simulation centers on designing, analyzing, and improving machines and mechanical systems that power everyday technology and industry.
</p>
        </FeatureCard>
        <FeatureCard>
          <h1>nursing</h1>
          <p> This Nursing simulation trains students to provide patient care, support medical teams, and apply clinical skills to promote health and recovery.
</p>
        </FeatureCard>
        <FeatureCard>
            <h1>Pre-Med</h1>
            <p>This Pre-Med simulation provides the science foundation and clinical preparation students need to pursue medical school and become future physicians.
</p>
        </FeatureCard>
        <FeatureCard>
            <h1>Math</h1>
            <p>This math simulation develops strong analytical and problem-solving skills by studying patterns, structures, and logical reasoning used to understand and model real-world situations.
</p>
        </FeatureCard>
        <FeatureCard>
          <h1>Psychology</h1>
          <p>This Psychology simulation explores human behavior and mental processes to understand how people think, feel, and act.
</p>
        </FeatureCard>
        <LoginButton onClick={() => navigate('/OdysseyAI')}>
              Odyssey AI
        </LoginButton>
      </CardsContainer>
    </Section>
    </>

  );
};
