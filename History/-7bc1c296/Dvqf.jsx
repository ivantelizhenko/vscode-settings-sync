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
      <FiltersPreview>
        <FilterPreview>
          Кіт
          <Icon id="close" size={16} strokeWidth={2} />
        </FilterPreview>
        <FilterPreview>
          Собака
          <Icon id="close" size={16} strokeWidth={2} />
        </FilterPreview>
        <FilterPreview>
          &lt; 1 місяця
          <Icon id="close" size={16} strokeWidth={2} />
        </FilterPreview>
        <FilterPreview>
          1-6 місяців
          <Icon id="close" size={16} strokeWidth={2} />
        </FilterPreview>
      </FiltersPreview>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 24px;
`;

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

const FiltersPreview = styled.ul`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  max-width: 100%;
`;

const FilterPreview = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  background-color: #f1f1f1;
  border-radius: 8px;
  white-space: nowrap;
`;
export default CardsList;
