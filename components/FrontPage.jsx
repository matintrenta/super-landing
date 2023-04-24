'use client'
import Tooltip from '@/components/Tooltip.jsx'
import {
    Section,
    Title,
    Wrap,
    Wrapper
} from '@/components/index.jsx'
import animationData from '@/public/static/101819-mobile-apps.json'
import Lottie from 'lottie-react'

export default function FrontPage() {
    return <Section screen>
      <Wrapper>
        <Wrap center>
          <Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor {' '}
            <Tooltip title='hola'>incertidumbre</Tooltip>{' '}
            ut labore et dolore magna {' '}
            <Tooltip title='hola'>aliqua</Tooltip>.
          </Title>
        </Wrap>
        <Wrap center>
          <Lottie
            animationData={animationData}
            loop={true}
            style={{
              maxWidth: '400px',
            }}
          ></Lottie>
        </Wrap>
      </Wrapper>
    </Section>
  }