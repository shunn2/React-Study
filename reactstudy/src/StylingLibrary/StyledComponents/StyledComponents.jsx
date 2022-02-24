import React from "react";
import styled, { keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const ReversedButton = (props) => <Button {...props} children={props.children.split("").reverse()} />;

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;
const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
const Button1 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button1.defaultProps = {
  theme: {
    main: "palevioletred",
  },
};
const GlobalStyle = createGlobalStyle`
    button {
        background-color: black
    }
`;
// Define what props.theme will look like
const theme = {
  main: "mediumseagreen",
};
export default function StyledComponents() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <div>
        <Button onClick={() => alert("normal")}>Normal</Button>
        <Button onClick={() => alert("primary")} primary>
          Primary
        </Button>
        <TomatoButton>Tomato Button</TomatoButton>
        <div>
          <Button as="a" href="#">
            Link with Button styles
          </Button>
          <TomatoButton as="a" href="#">
            Link with Tomato Button styles
          </TomatoButton>
        </div>
        <div>
          <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
        </div>
      </div>
      <div>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
      </div>
      <div>
        <Input placeholder="A small text input" />
        <br />
        <Input placeholder="A bigger text input" size="2em" />
      </div>
      <div>
        <Rotate>&lt; 💅🏾 &gt;</Rotate>
      </div>
      <div>
        <Button1>Normal</Button1>
        <ThemeProvider theme={theme}>
          <Button1>Themed</Button1>
        </ThemeProvider>
      </div>
    </>
  );
}
