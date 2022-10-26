import React, { useEffect } from 'react'
import { Cinema, Container, OptionPlaceholder, SelectContainer } from './styles'
import { motion } from "framer-motion"
import Layout from 'layout/Layout'
import Reviews from 'components/card/Reviews'
import starWars from 'assets/logo_big.png'
import video from 'assets/video.png'
import { getFilms } from 'services/films.service'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import _ from 'lodash';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Home = () => {
  const [movies, setMovies] = useState([])
  const [select, setSelect] = useState(false)

  useEffect(() => {
    (async function() {
      try {
        const res = await getFilms()
        console.log(res.results)
        setMovies(res)
      } catch (error) {

        throw error

      }
    })()
  }, [])

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
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
              }}
            >
            <Cinema>
              <h2 className='title'>Star Wars Movies</h2>
              <SelectContainer onClick={()=>{setSelect(!select)}}>
                <div placeholder='Select movies' className='select'>
                  <div className='select_cta'>
                    <p> Select movies </p>
                    <FiChevronDown/>
                  </div>
                  {select && (
                    <div className='options_wrap'>
                      {(movies?.results?.length === 0) && (
                        <MoviePlaceholder count={6}/>
                      )}
                      {(movies?.results?.length > 0) && (movies?.results?.sort((a, b) => b?.release_date - a?.release_date)?.map(movie => (
                        <div className='options_list' key={movie?.episode_id}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 2,
                              delay: 0.5,
                              ease: [0, 0.71, 0.2, 1.01]
                                }}
                            >
                            <div className='movie_image'>
                              <img alt='Movie' src={video}/> 
                            </div>
                            <div className='movie_info'>
                              <p className='title'>{movie.title}</p>
                              <p className='info'>{movie.opening_crawl.length > 52 ? `${movie.opening_crawl.substring(0, 50)}...` : movie.opening_crawl}</p>
                            </div>
                          </motion.div>
                        </div>
                      )))}
                    </div>
                  )}
                </div>
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

export const MoviePlaceholder = ({ count = 1 }) => _.range(count).map((index) => (
  <Stack spacing={2} key={index} width='100%' height='93px'>
    <OptionPlaceholder>
      <Skeleton variant="circular" width={40} height={40}/>
      <div className='movie_info'>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </div>
    </OptionPlaceholder>
  </Stack>
))