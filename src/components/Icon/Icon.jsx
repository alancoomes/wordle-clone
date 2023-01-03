import React from "react";
import {
  Settings,
  Menu,
  BarChart2,
  HelpCircle,
  X,
  Delete,
} from "react-feather";
import styled from "styled-components";
import PropTypes from "prop-types";

const icons = {
  close: X,
  settings: Settings,
  menu: Menu,
  "bar-chart-2": BarChart2,
  "help-circle": HelpCircle,
  delete: Delete,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`no icon found for id ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size}></Component>
    </Wrapper>
  );
};

Icon.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
