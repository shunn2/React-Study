/** @jsxImportSource @emotion/react */
import React from "react";
import { css, Global, keyframes, ClassNames } from "@emotion/react";
import styled from "@emotion/styled";

const color = "white";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponent = () => <div css={anotherStyle}>Some text with an underline.</div>;

const P = (props) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
    }}
    {...props} // <- props contains the `className` prop
  />
);

const ArticleText = (props) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props} // <- props contains the `className` prop
  />
);

const danger = css`
  color: red;
  &:hover {
    color: white;
  }
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

let SomeComponent1 = (props) => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
);

export default function EmotionExample() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <div>
        <Button>This my button component.</Button>
      </div>
      <div>
        <SomeComponent>
          <AnotherComponent />
        </SomeComponent>
      </div>
      <div>
        <P>hello good</P>
        <ArticleText>hello good</ArticleText>
      </div>
      <div>
        <div css={base}>This will be turquoise</div>
        <div css={[danger, base]}>This will be also be turquoise since the base styles overwrite the danger styles.</div>
        <div css={[base, danger]}>This will be red</div>
      </div>
      <div>
        <p
          css={css`
            font-size: 30px;
            @media (min-width: 420px) {
              font-size: 50px;
            }
          `}
        >
          Some text!
        </p>
      </div>
      <div>
        <div
          css={{
            color: "green",
            [mq[0]]: {
              color: "gray",
            },
            [mq[1]]: {
              color: "hotpink",
            },
          }}
        >
          Some text!
        </div>
        <p
          css={css`
            color: green;
            ${mq[0]} {
              color: gray;
            }
            ${mq[1]} {
              color: hotpink;
            }
          `}
        >
          Some other text!
        </p>
      </div>
      <div>
        <Global
          styles={css`
            .some-class {
              color: hotpink !important;
            }
          `}
        />
        <Global
          styles={{
            ".some-class": {
              fontSize: 50,
              textAlign: "center",
            },
          }}
        />
        <div className="some-class">This is hotpink now!</div>
      </div>
      <div
        css={css`
          animation: ${bounce} 1s ease infinite;
        `}
      >
        some bouncing text!
      </div>
      <ClassNames>
        {({ css, cx }) => (
          <SomeComponent1
            wrapperClassName={css({ color: "green" })}
            className={css`
              color: hotpink;
            `}
          >
            from children!!
          </SomeComponent1>
        )}
      </ClassNames>
    </>
  );
}
