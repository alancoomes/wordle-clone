import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// import { BoardContext } from "../../App";

const Alert = ({ alertMsg, duration = 1000 }) => {
  const [isAlertHide, setisAlertHide] = useState(false);
  //   const { setAlert } = useContext(BoardContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisAlertHide(true);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AlertMessage className={isAlertHide ? "hide" : ""}>
      {alertMsg}
    </AlertMessage>
  );
};

export default Alert;

Alert.propTypes = {
  alertMsg: PropTypes.string,
  duration: PropTypes.number,
};

const AlertMessage = styled.div`
  pointer-events: none;
  padding: 8px;
  border-radius: 4px;
  border: 4px solid white;
  background-color: white;
  opacity: 1;
  transition: opacity 500ms ease-in-out;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.hide {
    opacity: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
