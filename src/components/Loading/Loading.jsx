import { Grid, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import LoadingCard from './LoadingCard'

const Loading = ({ loading }) => {
  const isSmall = useMediaQuery('(max-width:500px)')
  return (
    <Box
      sx={{
        my: 3,
      }}
    >
      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {loading &&
          Array(isSmall ? 3 : 6)
            .fill(0)
            .map((_, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <LoadingCard />
              </Grid>
            ))}
      </Grid>
    </Box>
  )
}

export default Loading
