import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loadingAni = keyframes`
    100%{
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid salmon;
  border-color: salmon transparent transparent transparent;
  animation: ${loadingAni} 1s infinite;
`;

export const Loading = () => {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  );
};
