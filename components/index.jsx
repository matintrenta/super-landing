'use client'
import styled from 'styled-components';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

// create a styled div, called "Wrapper", wich displays as a column on mobile, and as a row on desktop
export const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  display: grid;
  padding: 2rem;
  gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(40px, auto) 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`

export const Wrap = styled.div`
  ${props => props.center && `
    margin: auto;
  `}
`

export const TopNavbar = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-sizing: border-box;
  background-color: #ffffff;
`

export const Logo = styled.div`
  font-size: 24px;
  color: var(--blue);
`

export const Button = styled.button`
  padding: 0.4rem 1rem;
  border: 3px solid var(--blue);
  border-radius: 2rem;
  background-color: transparent;
  color: var(--blue);
  font-weight: 500;
  font-size: 1.2rem;
  font-family: ${inter};
  cursor: pointer;
`

export const Title = styled.h1`
  font-size: 1.6rem;
  font-family: ${inter};
  font-weight: 500;
  letter-spacing: 0.04rem;
  color: var(--blue);
  margin-bottom: 2rem;
  ${props => props.center && `
    text-align: center;
  `}
`

export const Subtitle = styled.h2`
  font-size: 24px;
  font-family: ${inter};
  color: var(--blue);
  margin: 0;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  font-size: 20px;
  font-family: ${inter};
  color: var(--blue);
  margin: 0;
`

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  ${props => props.screen && `
    @media (min-width: 768px) {
      height: 80vh;
      max-height: 800px;
    }
  `}
  ${props => props.center && `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`
