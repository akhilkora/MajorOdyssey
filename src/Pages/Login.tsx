import React from 'react';
import {
  Container,
  WaveBackground,
  GlassCard,
  Title
} from '../styles/LoginStyles';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <WaveBackground />
      <GlassCard>
        <Title>Login</Title>
        <LoginForm/>
      </GlassCard>
    </Container>
  );
};

export default LoginPage;
