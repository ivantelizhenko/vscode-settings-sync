const ListItem = styled.li`
  ${(props) =>
    props.$type === "nav" &&
    css`
      font-size: 1.1rem;
    `}
  ${(props) =>
    props.$type === "footer" &&
    css`
      font-size: 1.6rem;
    `}

  margin-bottom: 0.8rem;
  margin-right: 1.2rem;
`;
