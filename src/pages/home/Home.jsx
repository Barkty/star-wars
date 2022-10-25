import React from 'react'
import { Container, Logo } from './styles'
import { motion } from "framer-motion"
import logo from 'assets/logo.png'

const Home = () => {

  return (
    <Container>
        <Logo>
            <img alt='Star Wars' src={logo}/>
        </Logo>
        <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{
                 duration: 0.8,
                 delay: 0.5,
                 ease: [0, 0.71, 0.2, 1.01]
                }}
        >
        </motion.div>
    </Container>
  )
}

export default Home