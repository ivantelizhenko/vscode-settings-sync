import styled, { css } from "styled-components";

const Link = styled.a`
  &:link,
  &:visited {
    font-size: 1.1rem;
    text-decoration: none;
    line-height: inherit;
    border: none;
    padding: 0px;
    color: var(--text-subdued, #656565);

    ${(props) =>
      props.$type === "brighter" &&
      css`
        font-size: 1.2rem;

        &:hover {
          border-bottom: 2px solid transparent;
          margin-bottom: 2px;
        }
      `}
  }
`;

function ButtonLink({ label, path, type }) {
  // later i'm going to use a React Router

  return (
    <Link href={path} $type={type}>
      {label}
    </Link>
  );
}

export default ButtonLink;
