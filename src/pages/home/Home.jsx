import React, { useEffect } from 'react'
import { Cinema, Container, Option, SelectContainer } from './styles'
import { motion } from "framer-motion"
import Layout from 'layout/Layout'
import Reviews from 'components/card/Reviews'
import starWars from 'assets/logo_big.png'
import video from 'assets/video.png'
import { getCharacters, getFilm, getFilms } from 'services/films.service'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { HiOutlineRefresh } from 'react-icons/hi'
import { FaFemale, FaMale } from 'react-icons/fa'
import { Paper, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import formatter from 'format-number'
import Movie from 'components/card/Movie'
import Marquee from "react-fast-marquee";

const Home = () => {
  const [movies, setMovies] = useState([])
  const [select, setSelect] = useState(false)
  const [selected, setSelected] = useState(false)
  const [film, setFilm] = useState([])
  const [casts, setCasts] = useState([])
  const [castsCopy, setCastsCopy] = useState([])
  const [globalCasts, setGlobalCasts] = useState([])
  const [female, setFemale] = useState([])
  const [male, setMale] = useState([])

  useEffect(() => {
    (async function() {
      try {
        const res = await getFilms()
        setMovies(res)
      } catch (error) {

        console.log(error)

      }
    })()
  }, [])

  const fetchFilm = async (url, characters) => {
    try {
      const res = await getFilm(url)
      const cast = await getCharacters(characters)
      setFilm(res)
      setCasts(cast)
      setCastsCopy(cast)
      setGlobalCasts(cast)
    } catch (error) {

      console.log(error)
    }
  }

  let num = 1
  let total_heights = 0

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - casts.length) : 0;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
      num += rowsPerPage
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    
    useEffect(()=> {
      const filteredMale = casts?.filter(cast => cast.gender === 'male')
      const filteredFemale =  castsCopy?.filter(cast => cast.gender === 'female')
      setMale(filteredMale)
      setFemale(filteredFemale)
    }, [casts, castsCopy])

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
              <div className='wrap'>
                <h2 className='title'>Star Wars Movies</h2>
                <SelectContainer onClick={()=>{setSelect(!select)}}>
                  <div className='select'>
                    <div className='select_cta'>
                      <p>{film.length === 0 ? ( 'Select movies' ) : film?.title}</p>
                      <FiChevronDown/>
                    </div>
                    {select && (
                      <div className='options_wrap'>
                        {(select === true && movies?.results?.length === 0) && (
                          <Movie.Placeholder count={6}/>
                        )}
                        {(movies?.results?.length > 0) && (movies?.results?.sort((a, b) => b?.release_date - a?.release_date)?.map(movie => (
                          <Option key={movie?.episode_id} onClick={()=>{setSelected(true); fetchFilm(movie?.url, movie?.characters)}}>
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
                                  <p className='title'>{movie?.title}</p>
                                  <p className='info'>{movie?.opening_crawl.length > 52 ? `${movie?.opening_crawl.substring(0, 50)}...` : movie?.opening_crawl}</p>
                              </div>
                            </motion.div>
                          </Option>
                        )))}
                      </div>
                    )}
                  </div>
                </SelectContainer>
              </div>
              <div className='star_wars'>
                <img alt='Star wars' src={starWars}/>
              </div>
              {selected && (
                <div className='film'>
                  <div className='marquee_card'>
                    <Marquee pauseOnHover={true} gradientColor={false} speed={12}>
                      {film.opening_crawl}
                    </Marquee>
                  </div>
                  {casts.length === 0 && (
                    <Stack spacing={2} width='660px' height='93px'>
                      <Skeleton variant="text" sx={{ fontSize: '1rem', backgroundColor: 'rgba(58, 63, 70, 0.864)' }}/>
                      <Skeleton variant="rectangular" width={660} height={60} sx={{backgroundColor: 'rgba(58, 63, 70, 0.864)'}}/>
                    </Stack>
                  )}
                  <p className='selected_title'>{film.title}</p>
                  <p className='selected_crawl'>{film.opening_crawl}</p>
                  <p className='characters'>Characters</p>
                  <div className='selected_table'>
                        <div className='filter'>
                          <p>Filter by: Male <span onClick={()=>{setCasts(male)}}><FaMale/></span> Female: <span onClick={()=>{setCasts(female)}}><FaFemale/></span> All <span onClick={()=> {setCasts(globalCasts)}}><HiOutlineRefresh/></span></p>
                        </div>
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
                              {(rowsPerPage > 0 ? casts?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : casts)?.map(row => {
                                total_heights += parseInt(row.height)
                                return (
                                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" className='table_head'>{num++}</TableCell>
                                    <TableCell component="th" scope="row" className='table_name'>{row.name}</TableCell>
                                    <TableCell component="th" scope="row" className='table_gender'>{row.gender === 'female' ? <FaFemale/> : <FaMale/>}</TableCell>
                                    <TableCell component="th" scope="row" className='table_gender'>{row.height}cm</TableCell>
                                  </TableRow>
                                )
                              })}
                              </TableBody>
                              <TableFooter>
                                  <TableRow>
                                    <TableCell colSpan={3}>Total no of characters: {rowsPerPage - emptyRows}</TableCell>
                                    <TableCell colSpan={3}>Total height of characters: {formatter({prefix: '', suffix: ''})(Math.floor(total_heights))}cm ({formatter({prefix: '', suffix: ''})(Math.floor((total_heights*0.393700) / 12))}ft {formatter({prefix: '', suffix: ''})(Math.round((((total_heights*0.393700) / 12) - Math.floor((total_heights*0.393700) / 12)) * 12))}in)</TableCell>
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
                          <Stack spacing={2} width='660px' height='303px'>
                            <Skeleton variant="rectangular" sx={{ width: '600px', backgroundColor: 'rgba(58, 63, 70, 0.864)' }}/>
                            <Skeleton variant="rectangular" width={660} height={60} sx={{backgroundColor: 'rgba(58, 63, 70, 0.864)'}}/>
                            <Skeleton variant="rectangular" width={660} height={60} sx={{backgroundColor: 'rgba(58, 63, 70, 0.864)'}}/>
                            <Skeleton variant="rectangular" width={660} height={60} sx={{backgroundColor: 'rgba(58, 63, 70, 0.864)'}}/>
                            <Skeleton variant="rectangular" width={660} height={60} sx={{backgroundColor: 'rgba(58, 63, 70, 0.864)'}}/>
                          </Stack>
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