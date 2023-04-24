'use client'
import React from "react"
import styled from "styled-components"

// create a tooltip component, wich displays a tooltip when hovering over the component

const StyledTooltip = styled.span`
    position: relative;
    display: inline-block;

    & span.tooltip {
        font-size: 1.5rem;
        visibility: hidden;
        width: 120px;
        background-color: white;
        color: blue;
        border: 4px solid blue;
        text-align: center;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        top: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    & span.tooltip::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 20%;
        margin-left: -5px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent blue transparent;
    }

    &:hover span.tooltip {
        visibility: visible;
        opacity: 1;
    }
`

const HighlightedText = styled.span`
    color: blue;
    font-weight: bold;
`

export default function Tooltip({ title, children }) {
    return (
        <>
            <StyledTooltip>
                <HighlightedText>{children}</HighlightedText>
                <span className="tooltip">{title}</span>
            </StyledTooltip>
        </>
    )
}