import React, { useState } from "react";
import Icon from "../Icon/Icon";
import styled from "styled-components";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import MenuModal from "../MenuModal/MenuModal";
import InstructionsModal from "../InstructionsModal/InstructionsModal";
import SettingsModal from "../SettingsModal/SettingsModal";

export default function Header() {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <header>
      <Wrapper>
        <Side>
          <UnstyledButton onClick={() => setShowMenuModal(true)}>
            <VisuallyHidden>Menu Button</VisuallyHidden>
            <Icon id="menu" size={32} strokeWidth={2}></Icon>
          </UnstyledButton>
        </Side>
        <Logo>Randordle</Logo>
        <IconWrapper>
          <UnstyledButton onClick={() => setShowInstructionsModal(true)}>
            <VisuallyHidden>Instructions</VisuallyHidden>
            <Icon id="help-circle" size={32} strokeWidth={2}></Icon>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowSettingsModal(true)}>
            <VisuallyHidden>Settings</VisuallyHidden>
            <Icon id="settings" size={32} strokeWidth={2}></Icon>
          </UnstyledButton>
        </IconWrapper>
      </Wrapper>
      <MenuModal
        isOpen={showMenuModal}
        whenDismiss={() => setShowMenuModal(false)}
      />
      <InstructionsModal
        isOpen={showInstructionsModal}
        whenDismiss={() => setShowInstructionsModal(false)}
      />
      <SettingsModal
        isOpen={showSettingsModal}
        whenDismiss={() => setShowSettingsModal(false)}
      />
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
  border-bottom: 2px solid var(--color-gray-500);
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
