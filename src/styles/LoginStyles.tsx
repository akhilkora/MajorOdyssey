import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 1000px 0, 800px 0;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  background: #000f1c;
`;

export const WaveBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: 
    repeating-linear-gradient(135deg, #2e52c1ff 0 1px, transparent 1px 20px),
    repeating-linear-gradient(-135deg, #2e52c1ff 0 1px, transparent 1px 20px);
  background-size: 200% 200%;
  animation: ${wave} 40s linear infinite;
  opacity: 0.2;
`;

export const GlassCard = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(4, 85, 129, 0.5);
  backdrop-filter: blur(14px);
  border-radius: 1.5rem;
  padding: 4rem 3rem;
  box-shadow: 0 8px 32px #0004ff33;
  width: 560px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: #ffffffff;
  text-align: center;   
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.6rem;
  padding: 0rem 3rem;
`;

export const Icon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #0084ffff;
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 2.8rem;
  background: #eafcff;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  color: #001d2f;

  &:focus {
    outline: 2px solid #00ffcc;
    box-shadow: 0 0 10px #00ffcc99;
  }
`;

export const RoleLabel = styled.p`
  margin-top: 1.5rem;
  color: #eafcff;
  font-size: 1rem;
  text-align: center;
`;

export const RoleSelect = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

export const RoleOption = styled.button<{ selected: boolean }>`
  padding: 0.8rem 1.6rem;
  border: 2px solid ${({ selected }) => (selected ? '#00ffcc' : '#eafcff66')};
  background: ${({ selected }) => (selected ? '#00ffcc' : 'transparent')};
  color: ${({ selected }) => (selected ? '#001d2f' : '#eafcff')};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: #00ffcc;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
  padding: 1.1rem;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  color: #ffffffff;
  background: #223a83ff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: #0084ffff;
    box-shadow: 0 0 12px #0084ffff;
  }
`;
