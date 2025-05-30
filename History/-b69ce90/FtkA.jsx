import styled from "styled-components";
import Photo from "./Photo";

const StyledPhotos = styled.ul`
  display: flex;
`;

const arr = [1, 2, 3, 4, 5];

function Photos() {
  return (
    <StyledPhotos>
      {arr.map((img) => (
        <Photo key={img} />
      ))}
    </StyledPhotos>
  );
}

export default Photos;
