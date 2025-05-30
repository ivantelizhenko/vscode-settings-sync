/**
 * We're given this component "for free" since it's really more
 * specific to React and React Feather. Feel free to read if you're
 * interested, but otherwise you can rely on our docs to learn its
 * API / which props it takes.
 */
import React from "react";
import styled from "styled-components";
import { AlignJustify } from "react-feather";
import { WrapperInput } from "../IconInput/IconInput";

const icons = {
  "align-justify": AlignJustify,
};

const Icon = ({ id, size, strokeWidth = 1, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
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
