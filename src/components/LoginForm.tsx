import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
  InputWrapper,
  Icon,
  Input
} from '../styles/LoginStyles';


const glowPulse = keyframes`
   rgba(0, 213, 255, 0.3)
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





const LoginForm: React.FC = () => {
const navigate = useNavigate();
  return (
    <form>
      <InputWrapper>
        <Icon></Icon>
        <Input
          type="email"
          placeholder="Email"
        />
      </InputWrapper>

      <InputWrapper>
        <Icon></Icon>
        <Input
          type="password"
          placeholder="Password"
        />
      </InputWrapper>
      
            <LoginButton onClick={() => navigate('/Courses')}>
              Login
            </LoginButton>
    </form>
    
  );
};

export default LoginForm;