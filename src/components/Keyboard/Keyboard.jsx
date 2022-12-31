import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { BoardContext } from "../../App";
import Key from "../Key/Key";

const Keyboard = () => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const { board, setBoard } = useContext(BoardContext);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    if (e.key === "Enter") {
      submitGuess();
      return;
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      deleteLetter();
      return;
    }
    if (e.key.match(/[a-z]/)) {
      const newBoard = [...board];
      newBoard[0][0] = e.key.toUpperCase();
      setBoard(newBoard);
    }
  };

  return (
    <Wrapper>
      <Row>
        {row1.map((letter) => (
          <Key key={letter} keyVal={letter} />
        ))}
      </Row>

      <Row>
        <KeyHalf />
        {row2.map((letter) => (
          <Key key={letter} keyVal={letter} />
        ))}
        <KeyHalf />
      </Row>

      <Row>
        <Key bigKey keyVal={"Enter"} />
        {row3.map((letter) => (
          <Key key={letter} keyVal={letter} />
        ))}
        <Key bigKey keyVal={"Delete"} />
      </Row>
    </Wrapper>
  );
};

export default Keyboard;

const Row = styled.div`
  width: 100%;
  margin: 0 auto 8px;
  display: flex;
  gap: 6px;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: var(--keyboard-height);
  margin-left: 6px;
  margin-right: 6px;
`;

const KeyHalf = styled.div`
  flex: 0.5;
`;
