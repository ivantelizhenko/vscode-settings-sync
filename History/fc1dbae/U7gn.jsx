import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import ListItem from "./ListItem";

const Container = styled.div`
  margin: 3.2rem 0;
  padding: 0 2.4rem;
`;

const StyledNavLinkList = styled.ul`
  text-align: start;
  display: flex;
  flex-wrap: wrap;
`;

function NavLinkList() {
  // Ideally use array.map with objects with label and path
  return (
    <Container>
      <StyledNavLinkList>
        <ListItem $type="nav">
          <ButtonLink path="#" label="Legal" />
        </ListItem>
        <ListItem $type="nav">
          <ButtonLink path="#" label="Safety & Privacy Center" />
        </ListItem>
        <ListItem $type="nav">
          <ButtonLink path="#" label="Privacy Policy" />
        </ListItem>
        <ListItem $type="nav">
          <ButtonLink path="#" label="Cookies" />
        </ListItem>
        <ListItem $type="nav">
          <ButtonLink path="#" label="About Ads" />
        </ListItem>
        <ListItem $type="nav">
          <ButtonLink path="#" label="Accessibility" />
        </ListItem>
      </StyledNavLinkList>
      <ListItem $type="nav">
        <ButtonLink type="brighter" path="#" label="Cookies" />
      </ListItem>
    </Container>
  );
}

export default NavLinkList;
