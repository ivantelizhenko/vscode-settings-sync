import React from "react";
import styled from "styled-components";
import { Menu, X, ArrowUpRight } from "react-feather";

const icons = {
  menu: Menu,
  close: X,
  link: ArrowUpRight,
};

const Icon = ({ id, size, strokeWidth = 1, style, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
        ...style,
      }}
      {...delegated}
    >
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
