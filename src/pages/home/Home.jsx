import React, { useEffect } from 'react'
import { Cinema, Container, OptionPlaceholder, SelectContainer } from './styles'
import { motion } from "framer-motion"
import Layout from 'layout/Layout'
import Reviews from 'components/card/Reviews'
import starWars from 'assets/logo_big.png'
import marque from 'assets/marquee.png'
import video from 'assets/video.png'
import { getCharacters, getFilm, getFilms } from 'services/films.service'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { FaFemale, FaMale } from 'react-icons/fa'
import _ from 'lodash';
import { Paper, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([])
  const [select, setSelect] = useState(false)
  const [selected, setSelected] = useState(false)
  const [film, setFilm] = useState([])
  const [casts, setCasts] = useState([])

  useEffect(() => {
    (async function() {
      try {
        const res = await getFilms()
        setMovies(res)
      } catch (error) {

        throw error

      }
    })()
  }, [])

  const fetchFilm = async (url, characters) => {
    try {
      const res = await getFilm(url)
      const cast = await getCharacters(characters)
      setFilm(res)
      setCasts(cast)
      console.log(res)
      console.log(cast)
    } catch (error) {

      console.log(error)
    }
  }

  let num = 1

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - casts.length) : 0;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

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
            <Cinema size={selected ? 'cover' : null}>
              <h2 className='title'>Star Wars Movies</h2>
              <SelectContainer onClick={()=>{setSelect(!select)}}>
                <div className='select'>
                  <div className='select_cta'>
                    <p>{film.length === 0 ? ( 'Select movies' ) : film?.title}</p>
                    <FiChevronDown/>
                  </div>
                  {select && (
                    <div className='options_wrap'>
                      {(movies?.results?.length === 0) && (
                        <MoviePlaceholder count={6}/>
                      )}
                      {(movies?.results?.length > 0) && (movies?.results?.sort((a, b) => b?.release_date - a?.release_date)?.map(movie => (
                        <div className='options_list' key={movie?.episode_id} onClick={()=>{setSelected(true); fetchFilm(movie?.url, movie?.characters)}}>
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
              {selected && (
                <div className='film'>
                  <div className='marquee_card'>
                    <img src={marque} alt='Marquee'/>
                  </div>
                  <p className='selected_title'>{film.title}</p>
                  <p className='selected_crawl'>{film.opening_crawl}</p>
                  <p className='characters'>Characters</p>
                  <div className='selected_table'>

                        {casts.length > 0 ? (
                          <TableContainer component={Paper} sx={{backgroundColor: 'inherit'}}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell className='table_head'>S/N</TableCell>
                                  <TableCell className='table_name'>Name</TableCell>
                                  <TableCell className='table_gender'>Gender</TableCell>
                                  <TableCell className='table_gender'>Height</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                              {(rowsPerPage > 0 ? casts?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : casts)?.map(row => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                  <TableCell component="th" scope="row" className='table_head'>{num++}</TableCell>
                                  <TableCell component="th" scope="row" className='table_name'>{row.name}</TableCell>
                                  <TableCell component="th" scope="row" className='table_gender'>{row.gender === 'female' ? <FaFemale/> : <FaMale/>}</TableCell>
                                  <TableCell component="th" scope="row" className='table_gender'>{row.height}in</TableCell>
                                </TableRow>
                              ))}
                              {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                  <TableCell colSpan={6} />
                                </TableRow>
                              )}
                              </TableBody>
                              <TableFooter>
                                  <TableRow>
                                    <TableCell colSpan={3}>Total no of characters: {page * rowsPerPage}</TableCell>
                                  </TableRow>
                              </TableFooter>
                            </Table>
                            <TablePagination
                              component="div"
                              count={casts?.length}
                              page={page}
                              onPageChange={handleChangePage}
                              rowsPerPage={rowsPerPage}
                              onRowsPerPageChange={handleChangeRowsPerPage}
                              // className={styles.custom_page}
                              sx={{backgroundColor: '#181B20', color: '#fff'}}
                            />
                          </TableContainer>
                        ) : (
                          null
                        )}
                  </div>
                </div>
              )}
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