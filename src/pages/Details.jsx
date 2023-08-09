import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Typography,
} from '@mui/material'
import MDEditor from '@uiw/react-md-editor'
import noImage from 'assets/no-image.png'
import LoadingCard from 'components/Loading/LoadingCard'
import { useStateContext } from 'context/Context'
import useSingleAnimeFetch from 'hooks/useSingleAnimeSearch'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()
  const { addToList, animeExists } = useStateContext()

  const { loading, error, anime } = useSingleAnimeFetch(id)

  if (loading) {
    return (
      <Container
        sx={{
          py: 3,
        }}
      >
        <LoadingCard />
      </Container>
    )
  }
  return (
    <Container
      sx={{
        py: 3,
      }}
    >
      <Paper
        sx={{
          p: 5,
          borderRadius: 5,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          '& img': {
            borderRadius: 5,
            width: { xs: '100%', sm: '50%' },
          },
        }}
      >
        <img
          loading="lazy"
          src={
            anime.coverImage.extraLarge === 'N/A'
              ? noImage
              : anime.coverImage.extraLarge
          }
          alt={anime.title.english || anime.title.userPreferred}
        />
        <br />
        <Typography align="center" variant="h4" gutterBottom>
          {anime.title.english || anime.title.userPreferred}
        </Typography>
        {anime.description && (
          <MDEditor.Markdown
            style={{
              backgroundColor: 'transparent',
              color: 'grey',
              textAlign: 'center',
            }}
            source={anime.description}
          />
        )}

        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Chip color="info" label={`SEASON: ${anime.season || 'NYA'}`} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
            mt: 2,
          }}
        >
          {anime.genres.map((genre) => (
            <Chip key={genre} color="info" label={genre} />
          ))}
        </Box>
      </Paper>

      <Button
        disabled={animeExists(id)}
        fullWidth
        onClick={() => addToList(anime)}
        variant="contained"
        sx={{
          color: 'white !important',
        }}
      >
        {animeExists(id) ? 'Already added to list!' : 'Add to List'}
      </Button>
      <Box
        sx={{
          my: 6,
        }}
      >
        {error && <Alert severity="error">Unexpected error ocurred</Alert>}
      </Box>
    </Container>
  )
}

export default Details
