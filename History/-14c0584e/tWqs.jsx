import styled from "styled-components";
import Overview from "./Overview";
import { QUERIES } from "../constants";
import CardsList from "./CardsList";
import CardDetails from "./CardDetails";
import UserAccount from "./UserAccount";
import DonatePage1 from "./DonatePage1";
import DonatePage2 from "./DonatePage2";
import CreatePost1 from "./CreatePost1";
import CreatePost2 from "./CreatePost2";

function Main({ page, setPage }) {
  return (
    <Wrapper>
      {page === "overview" && <Overview setPage={setPage} />}
      {page === "cardsList" && <CardsList setPage={setPage} />}
      {page === "card-details" && <CardDetails />}
      {page === "user-account" && <UserAccount setPage={setPage} />}
      {page === "donate" && <DonatePage1 setPage={setPage} />}
      {page === "donate-second-page" && <DonatePage2 setPage={setPage} />}
      {page === "createPost1" && <CreatePost1 setPage={setPage} />}
      {page === "createPost2" && <CreatePost2 setPage={setPage} />}
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
