import React, { useState } from "react";
import Icon from "../Icon/Icon";
import styled from "styled-components";

export default function Header() {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showInstructionsModal, setInstructionsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <header>
      <Wrapper>
        <Side>
          <Icon id="menu" size={32} strokeWidth={2}></Icon>
        </Side>
        <Logo>Randordle</Logo>
        <IconWrapper>
          <Icon id="help-circle" size={32} strokeWidth={2}>
            Question Icon
          </Icon>
          <Icon id="settings" size={32} strokeWidth={2}>
            Settings Icon
          </Icon>
        </IconWrapper>
      </Wrapper>
    </header>
  );
}

const Wrapper = styled.div`
  height: var(--header-height);
  background-color: var(--color-gray-900);
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 2px solid var(--color-gray-300);
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  flex: 1;

  & > svg {
    display: block;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
`;

const Side = styled.div`
  flex: 1;
`;
