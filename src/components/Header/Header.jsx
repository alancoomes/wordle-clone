import React from 'react'

export default function Header() {
  return (
    <header>
        <Wrapper>
            <div>Menu Button</div>
            <h2>Wordle</h2>
            <div>Icon Wrapper
                <div>Question Icon</div>
                <div>Stats Icon</div>
                <div>Settings Icon</div>
            </div>
        </Wrapper>
    </header>
  )
}

const Wrapper = styled.div`
    background-color: var(--color-gray-700);
    display: flex;
`;
