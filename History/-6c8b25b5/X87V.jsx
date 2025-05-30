function Heading({ children, ...delegated }) {
  return <StyledHeader {...delegated}>{children}</StyledHeader>;
}

StyledHeader;

export default Heading;
