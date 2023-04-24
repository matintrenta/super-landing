'use client'
import * as React from 'react'
import FramerTabs from './FramerTabs'
import styled from 'styled-components'

export default function Switch({ tabs }) {
    const [activeTab, setActiveTab] = React.useState(0)

    return (
        <div>
            <Tabs>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={index}
                        active={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </TabButton>
                ))}
            </Tabs>
            <FramerTabs {...tabs[activeTab]}></FramerTabs>
        </div>
    )
}

const Tabs = styled.div`
    margin: 0 auto;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 1rem;
`

const TabButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: transparent;
    font-size: 1rem;
    font-family: Inter;
    font-weight: 500;
    cursor: pointer;
    color: var(--blue);
    border: 3px solid transparent;
    border-radius: 100px;
    transition: border 0.3s;
    whitespace: nowrap;
    ${props => props.active && `
        border: 3px solid var(--blue);
    `}
`