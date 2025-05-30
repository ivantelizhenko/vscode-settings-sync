import styled from "styled-components";

const StoryBorders = styled.div`
  &:not(:first-child) {
    padding-top: 16px;
  }

  &:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

export default StoryBorders;
