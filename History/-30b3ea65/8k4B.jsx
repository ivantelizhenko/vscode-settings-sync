import styled from "styled-components";

const Link = styled.a`
  &:link,
  &:visited {
    font-size: 1.1rem;
    text-decoration: none;
    line-height: inherit;
    border: none;
    padding: 0px;
    color: var(--text-subdued, #656565);
  }
`;

function ButtonLink({ label, path, type }) {
  // later i'm going to use a React Router

  return (
    <Link href={path} type={type}>
      {label}
    </Link>
  );
}

export default ButtonLink;
