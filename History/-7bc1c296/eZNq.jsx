import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";
import Icon from "./Icon";
import Heading from "./Heading";

function CardsList() {
  return (
    <Wrapper>
      <Header>
        <FilterButton>
          <Icon id="filters" size={20} strokeWidth={2} />
        </FilterButton>
        <SearchInput>
          <input type="text" placeholder="Search..." />
          <SearchIcon>
            <Icon
              id="search"
              size={20}
              strokeWidth={2}
              style={{ color: "#fff" }}
            />
          </SearchIcon>
        </SearchInput>
      </Header>
      <FiltersPreviews>
        <List>
          <li>
            Кіт
            <Icon id="close" size={16} />
          </li>
        </List>
      </FiltersPreviews>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const FilterButton = styled(UnstyledButton)`
  background-color: #f1f1f1;
  padding: 12px;
  border-radius: 50%;
`;

const SearchInput = styled.label`
  position: relative;
  padding: 16px;
  border-radius: 32px;
  border: 2px solid #d8d7dd;
  width: 100%;

  & input {
    border: none;
    background-color: transparent;

    &::placeholder {
      color: D8D7DD;
    }
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-secondary);
  padding: 12px;
  border-radius: 50%;
`;

const FiltersPreviews = styled.div``;
export default CardsList;
