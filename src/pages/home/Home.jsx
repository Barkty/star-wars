import React from 'react'
import { Cinema, Container, SelectContainer } from './styles'
import { motion } from "framer-motion"
import Layout from 'layout/Layout'
import Reviews from 'components/card/Reviews'
import starWars from 'assets/logo_big.png'

const Home = () => {

  return (
    <Layout>
      <Container>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
                }}
          >
          <Reviews/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
              }}
            >
            <Cinema>
              <h2 className='title'>Star Wars Movies</h2>
              <SelectContainer>
                <select placeholder='Select movies'>
                  <option> Select movies </option>
                </select>
              </SelectContainer>
              <div className='star_wars'>
                <img alt='Star wars' src={starWars}/>
              </div>
            </Cinema>
        </motion.div>
      </Container>
    </Layout>
  )
}

export default Home