import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import ListItem from "./ListItem";

const StyledNavLinkList = styled.ul`
  margin: 3.2rem 0;
  padding: 0 2.4rem;
  text-align: start;
  display: flex;
  flex-wrap: wrap;

  &:last-child{
    margin-left
  }
`;

function NavLinkList() {
  // Ideally use array.map with objects with label and path
  return (
    <StyledNavLinkList>
      <ListItem $type="nav">
        <ButtonLink path="#" label="Юридична інформація" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink path="#" label="Центр безпеки й конфіденційності" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink path="#" label="Політика конфіденційності" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink path="#" label="Політика щодо файлів cookie" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink path="#" label="Про рекламу" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink path="#" label="доступність;" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink type="brighter" path="#" label="доступність;" />
      </ListItem>
    </StyledNavLinkList>
  );
}

export default NavLinkList;
