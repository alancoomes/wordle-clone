import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

// eslint-disable-next-line react/prop-types
const SettingsModal = ({ isOpen, whenDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} whenDismiss={whenDismiss}>
      <Content aria-label="Menu Content">
        <DismissButton onClick={whenDismiss}>
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} />
        </DismissButton>
      </Content>
    </Overlay>
  );
};

export default SettingsModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Content = styled.div`
  position: relative;
  margin: auto;
  width: 300px;
  height: var(--modal-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: var(--color-white);

  @media (max-width: 450px) {
    margin: 0;
  }
`;
