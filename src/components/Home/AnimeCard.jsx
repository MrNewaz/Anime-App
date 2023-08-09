import { Card } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import noImage from 'assets/no-image.png'
import { Link } from 'react-router-dom'

const AnimeCard = ({ anime }) => {
  return (
    <Box
      component={Link}
      to={`/details/${anime.id}`}
      sx={{
        height: '100%',
      }}
    >
      <Card
        sx={{
          height: '100%',
          borderRadius: 5,
          p: 3,
          '& img': {
            aspectRatio: '3/4',
            width: '100%',
            objectFit: 'cover',
            borderRadius: 5,
          },
        }}
      >
        <Box
          sx={{
            px: 5,
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
        </Box>
        <Box
          sx={{
            p: 2,
            bgcolor: 'hsl(216deg, 37%, 20%)',
            borderRadius: 5,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant="body1"
            gutterBottom
          >
            {anime.title.english || anime.title.userPreferred}
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default AnimeCard
