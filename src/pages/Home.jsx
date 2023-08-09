import { Alert, Box, Grid, Pagination } from '@mui/material'
import Container from '@mui/material/Container'
import AnimeCard from 'components/Home/AnimeCard'
import Loading from 'components/Loading/Loading'
import useTrendingAnimeFetch from 'hooks/useTrendingAnimeFetch'
import { useState } from 'react'

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const { animes, pageInfo, loading, error } = useTrendingAnimeFetch(pageNumber)

  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {animes.map((anime) => (
          <Grid item xs={12} sm={4} key={anime.id}>
            <AnimeCard anime={anime} />
          </Grid>
        ))}
      </Grid>
      <Loading loading={loading} />
      <Box
        sx={{
          my: 6,
        }}
      >
        {error && <Alert severity="error">No animes to show!</Alert>}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pagination
          count={pageInfo.lastPage}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPageNumber(value)}
        />
      </Box>
    </Container>
  )
}

export default Home
