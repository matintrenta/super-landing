'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Wrapper, Wrap, Subtitle, Description } from "@/components"

export default function FramerTabs({ src, description }) {

    return <AnimatePresence>
        <Wrapper>
            <motion.div key={description} {...textAnimation}>
                <Subtitle>Somos especialistas</Subtitle>
                <Description key={description}>{description}</Description>
            </motion.div>
            <motion.img key={src} src={src} {...imageAnimation} />
        </Wrapper>
    </AnimatePresence>
}

const imageAnimation = {
    style: {
        maxHeight: 280,
        maxWidth: 280,
        margin: 'auto'
    },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

const textAnimation = {
    style: { margin: 'auto' },
    initial: { opacity: 0, x: '-80px' },
    animate: { opacity: 1, x: '0' },
    exit: { opacity: 0, x: '0' }
}