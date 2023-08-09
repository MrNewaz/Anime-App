import { Button, Card } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import noImage from 'assets/no-image.png'
import { Link } from 'react-router-dom'

const MyAnimeCard = ({ anime, handleRemove }) => {
  return (
    <Box
      component={Link}
      to={`/mylist/${anime.id}`}
      sx={{
        height: '100%',
        width: '100%',
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
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant="h6"
            gutterBottom
          >
            {anime.title.english || anime.title.userPreferred}
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="error"
          onClick={(e) => handleRemove(e, anime.id)}
        >
          Remove
        </Button>
      </Card>
    </Box>
  )
}

export default MyAnimeCard
