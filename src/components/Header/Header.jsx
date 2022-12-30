import React from 'react'
import Icon from '../Icon/Icon';
import styled from 'styled-components';

export default function Header() {
  return (
    <header>
        <Wrapper>
            <Side>
                <Icon id="menu" strokeWidth={2}></Icon>
            </Side>
            <Logo>Wordle</Logo>
                <IconWrapper>
                    <Icon id="help-circle" strokeWidth={2}>Question Icon</Icon>
                    <Icon id="bar-chart-2" strokeWidth={2}>Stats Icon</Icon>
                    <Icon id="settings" strokeWidth={2}>Settings Icon</Icon>
                </IconWrapper>
        </Wrapper>
    </header>
  )
}

const Wrapper = styled.div`
    height: var(--header-height);
    background-color: var(--color-gray-900);
    color: var(--color-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8px;
    border-bottom: 2px solid var(--color-gray-300);
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2px;
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

