import React from "react";
import styled from "styled-components";
import {
  Menu,
  X,
  ArrowUpRight,
  Edit2,
  Sliders,
  Search,
  Bookmark,
  Calendar,
  MapPin,
  Home,
  Phone,
} from "react-feather";
import { Venus, Mars } from "lucide-react";

const icons = {
  menu: Menu,
  close: X,
  link: ArrowUpRight,
  edit: Edit2,
  filters: Sliders,
  search: Search,
  bookmark: Bookmark,
  mars: Mars,
  venus: Venus,
  calendar: Calendar,
  "map-pin": MapPin,
  home: Home,
  phone: Phone,
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
