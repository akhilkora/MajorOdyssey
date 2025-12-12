import styled from "styled-components";

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

export default function FeatureShowcase() {
  return (
    <Section id="features">
      <Title>What Major Odyssey Offers</Title>
      <CardsContainer>
        <FeatureCard>
          <h3>Interactive Simulations for every college major</h3>
          <p>Users get hands-on practice with real-world situations from their chosen major.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Personalized Pathways & Career Guidance</h3>
          <p>Users get detailed decriptions of the major (work load, years of school needed, top ten colleges, etc).</p>
        </FeatureCard>
        <FeatureCard>
            <h3>Odyssey AI</h3>
            <p>In built chat-bot for users to communicate with for that specific major.</p>
        </FeatureCard>
      </CardsContainer>
    </Section>
  );
};
