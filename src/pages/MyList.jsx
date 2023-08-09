import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import MyAnimeCard from 'components/MyList/MyAnimeCard'
import { useStateContext } from 'context/Context'
import { Link } from 'react-router-dom'

const MyList = () => {
  const { animeList, removeFromList } = useStateContext()

  const handleRemove = (e, id) => {
    e.preventDefault()
    removeFromList(id)
  }

  return (
    <Container
      sx={{
        py: 3,
      }}
    >
      <Card
        sx={{
          mb: 3,
          p: { xs: 2, sm: 3 },

          borderRadius: 5,
        }}
      >
        <Typography align="center" variant="h3">
          My Anime List
        </Typography>
      </Card>
      {animeList && animeList.length !== 0 ? (
        <Grid container spacing={3} alignItems="stretch">
          {animeList.map((anime) => (
            <Grid item xs={12} sm={6} key={anime.id}>
              <MyAnimeCard anime={anime} handleRemove={handleRemove} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            p: 5,
            bgcolor: 'grey.200',
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="primary">
            List is empty
          </Typography>
          <Button variant="outlined" component={Link} to="/">
            Go to Home
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default MyList
