import React from 'react'
import Icon from '../Icon/Icon';
import styled from 'styled-components';

export default function Header() {
  return (
    <header>
        <Wrapper>
            <Icon id="menu" strokeWidth={2}></Icon>
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
    background-color: var(--color-gray-900);
    color: var(--color-white);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0px 8px;
    border-bottom: 2px solid var(--color-gray-500);
`;

const IconWrapper = styled.div`
    display: flex;
    gap: 2px;
`;

const Logo = styled.h1`
    font-size: 2rem;
`;
