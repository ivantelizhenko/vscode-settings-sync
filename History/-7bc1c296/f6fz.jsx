import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";
import Icon from "./Icon";
import Card from "./Card";
import { useState } from "react";
import Filters from "./Filters";

const testData = [
  {
    id: 12312312324,
    img: "/public/animals/cat.png",
    name: "Сіма",
    age: "2 роки",
    place: "Горлівка",
    gender: "she",
  },
  {
    id: 67878766,
    img: "/public/animals/dog.png",
    name: "Пан Пес",
    age: "3 місяці",
    place: "Ірпінь",
    gender: "he",
  },
];

function CardsList({ setPage }) {
  const [showFilters, setShowFilters] = useState(false);

  const handleOpenFilters = setShowFilters(true);
  const handleCloseFilters = setShowFilters(false);
  function handleShowDetails() {
    setPage("card-details");
  }

  return (
    <Wrapper>
      <Header>
        <FilterButton onClick={handleOpenFilters}>
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
      <Cards>
        {testData.map((data) => (
          <Card key={data.id} data={data} onClick={handleShowDetails} />
        ))}
      </Cards>
      <Filters open={showFilters} handleClose={handleCloseFilters} />
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

const Cards = styled.div`
  display: grid;
  row-gap: 24px;
`;
export default CardsList;
