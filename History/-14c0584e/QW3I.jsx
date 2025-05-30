import styled from "styled-components";
import Overview from "./Overview";
import { QUERIES } from "../constants";
import CardsList from "./CardsList";
import CardDetails from "./CardDetails";
import UserAccount from "./UserAccount";

function Main({ page, setPage }) {
  return (
    <Wrapper>
      {page === "overview" && <Overview />}
      {page === "cardsList" && <CardsList setPage={setPage} />}
      {page === "card-details" && <CardDetails />}
      {page === "user-account" && <UserAccount />}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 24px 16px;
  background-color: white;

  @media ${QUERIES.laptopAndUp} {
    padding: 48px 60px;
  }
`;

export default Main;
