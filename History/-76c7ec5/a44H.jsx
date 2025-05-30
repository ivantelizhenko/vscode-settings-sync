import styled from "styled-components";

const StoryBorders = styled.div`
  --padding: ${(props) => props.gap};

  &:not(:first-child) {
    padding-top: var(--padding);
  }

  &:not(:last-child) {
    padding-bottom: var(--padding);
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

export default StoryBorders;
