import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

// eslint-disable-next-line react/prop-types
const InstructionsModal = ({ isOpen, whenDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onClick={whenDismiss}>
      <Content onClick={(e) => e.stopPropagation()} aria-label="Menu Content">
        <DismissButton onClick={whenDismiss}>
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} />
        </DismissButton>
        <Heading>
          <h2>How To Play:</h2>
          <h4>Guess the word in 6 tries.</h4>
        </Heading>
        <Instructions>
          <li>Each guess must be a valid 5 letter word.</li>
          <li>
            <span className="green">Green</span> means letter is in the correct
            spot!
          </li>
          <li>
            <span className="yellow">Yellow</span> means letter exists in a
            different spot.
          </li>
          <li>
            <span className="gray">Gray</span> means letter is not in the word.
          </li>
        </Instructions>
      </Content>
    </Overlay>
  );
};

export default InstructionsModal;

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

const Heading = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 4px;
  }

  h4 {
    font-size: 1rem;
  }
`;

const Instructions = styled.ul`
  font-size: 0.825rem;
  margin-left: 16px;
  list-style: square;
  display: flex;
  flex-direction: column;
  gap: 4px;

  span.green {
    color: var(--color-primary);
  }

  span.yellow {
    color: var(--color-secondary);
  }

  span.gray {
    color: var(--color-gray-300);
  }
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
  /* height: var(--modal-height); */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  padding: 32px;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: var(--color-gray-700);
  color: var(--color-white);

  @media (max-width: 450px) {
    margin: 0;
    justify-content: center;
  }
`;
