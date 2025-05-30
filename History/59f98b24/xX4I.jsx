import styled from "styled-components";
import { QUERIES } from "../constants";

function Image({ ...delegated }) {
  return (
    <ImageWrapper>
      <img {...delegated} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  img {
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-area: image;
  }
`;

export default Image;
