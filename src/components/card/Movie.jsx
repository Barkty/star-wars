import { Skeleton, Stack } from '@mui/material'
import { Option, OptionPlaceholder } from 'pages/home/styles'
import { motion } from 'framer-motion'
import video from 'assets/video.png'
import React from 'react'
import _ from 'lodash';

const Movie = ({title, opening_crawl }) => {

  return (
    <Option>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
          <div className='movie_image'>
            <img alt='Movie' src={video}/> 
          </div>
          <div className='movie_info'>
            <p className='title'>{title}</p>
            <p className='info'>{opening_crawl.length > 52 ? `${opening_crawl.substring(0, 50)}...` : opening_crawl}</p>
          </div>
      </motion.div>
    </Option>
  )
}


const MoviePlaceholder = ({ count = 1 }) => _.range(count).map((index) => (
    <Stack spacing={2} key={index} sx={{ width: '45%', height: '93px' }}>
      <OptionPlaceholder>
        <Skeleton variant="circular" sx={{backgroundColor: 'rgba(58, 63, 70, 0.864)', width: '62px', height: '62px', marginRight: '15px' }}/>
        <div className='movie_info'>
          <Skeleton variant="text" sx={{ height:'30px', fontSize: '1rem', backgroundColor: 'rgba(58, 63, 70, 0.864)'}} />
          <Skeleton variant="rectangular" height={30} sx={{width: '100%', backgroundColor: 'rgba(58, 63, 70, 0.864)'}}/>
        </div>
      </OptionPlaceholder>
    </Stack>
))

Movie.Placeholder = MoviePlaceholder

export default Movie