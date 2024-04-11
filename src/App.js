import "./App.css";
import StyledButton, {
  FanyButton,
  AnimatedImg,
} from "./components/Button/button";
import { ThemeButton } from "./components/Button/button.styles";
import { createGlobalStyle } from "styled-components";
import logo from "./logo512.png";

const GlobalStyle = createGlobalStyle`
  button{
    font-family: Roboto;
  }
`;

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      {/* <StyleSheetManager should></StyleSheetManager> */}
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>

      <StyledButton $variant="outline">Props Button</StyledButton>
      <div>
        <br />
      </div>
      <GlobalStyle />
      <FanyButton>Fanny Button</FanyButton>
      <div>
        <br />
      </div>
      <ThemeButton>Dark Button</ThemeButton>
      <div>
        <br />
      </div>
      <AnimatedImg src={logo} />
    </div>
  );
}

export default App;
