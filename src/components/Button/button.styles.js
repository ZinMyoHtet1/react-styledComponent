import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  padding: 12px 20px;
  font-size: 1.3rem;
  background-color: ${(props) =>
    props.$variant === "outline" ? "white" : "orange"};
  color: ${(props) => (props.$variant === "outline" ? "orange" : "white")};
  border: 4px solid orange;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${(props) =>
      props.$variant !== "outline" ? "white" : "orange"};
    color: ${(props) => (props.$variant !== "outline" ? "orange" : "white")};
  }
  &:active {
    opacity: 0.8;
  }
`;

export const FanyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, red 0%, orange 100%);
  color: gray;
  border: none;
`;

export const ThemeButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.color};
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.dark.primary};
    opacity: 0.8;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(180deg)
  }
`;

export const AnimatedImg = styled.img`
  display: inline-block;
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} 4s linear infinite;
`;

export default StyledButton;
