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
import { DataGrid } from '@mui/x-data-grid';
import { TablePagination, Skeleton, Stack, TableContainer, Paper, Table, TableHead, TableRow, TableCell, Checkbox, TableSortLabel, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils'

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

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    { id: 'name', label: 'Name', width: 250, numeric: false, disablePadding: true },
    { id: 'gender', label: 'Gender', width: 170, numeric: false, disablePadding: true },
    {
      id: 'height',
      label: 'Height',
      numeric: false, disablePadding: true,
    }
  ]

  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
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
                    {/* <table>
                      <thead>
                        <tr>
                          <th>
                            <div className='table_head'>S/N</div>
                          </th>
                          <th>
                            <div className='table_name'>Name</div>
                          </th>
                          <th>
                            <div className='table_gender'>Gender</div>
                          </th>
                          <th>
                            <div className='table_gender'>Height</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {casts.map(cast => (
                          <tr key={cast.name}>
                            <th>
                              <div className='table_head'>{num++}</div>
                            </th>
                            <th>
                              <div className='table_name'>{cast.name}</div>
                            </th>
                            <th>
                              <div className='table_gender'>{cast.gender === 'male' ? <FaMale/> : <FaFemale/>}</div>
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table> */}
                    {/* <DataGrid
                      rows={casts}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                      getRowId={num++}
                    /> */}
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                                inputProps={{
                                  'aria-label': 'select all desserts',
                                }}
                              />
                            </TableCell>
                            {headCells.map((headCell) => (
                              <TableCell
                                key={headCell.id}
                                align={headCell.numeric ? 'right' : 'left'}
                                padding={headCell.disablePadding ? 'none' : 'normal'}
                                sortDirection={orderBy === headCell.id ? order : false}
                              >
                                <TableSortLabel
                                  active={orderBy === headCell.id}
                                  direction={orderBy === headCell.id ? order : 'asc'}
                                  onClick={createSortHandler(headCell.id)}
                                >
                                  {headCell.label}
                                  {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                  ) : null}
                                </TableSortLabel>
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                      </Table>
                    </TableContainer>
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

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};