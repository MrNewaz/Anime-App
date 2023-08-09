import { Box, Card, Skeleton } from '@mui/material'

const LoadingCard = () => {
  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
        borderRadius: 5,
        p: 3,
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          px: 5,
        }}
      >
        <Skeleton
          sx={{
            paddingTop: '80%',
            width: '100%',
          }}
          variant="rounded"
          animation="wave"
        />
        <Box
          sx={{
            mt: 2,
          }}
        >
          <Skeleton variant="text" sx={{ typography: 'h6' }} animation="wave" />
          <Skeleton
            variant="text"
            sx={{ typography: 'body2' }}
            animation="wave"
          />
          <Skeleton
            variant="text"
            sx={{ typography: 'body2' }}
            animation="wave"
          />
        </Box>
      </Box>
    </Card>
  )
}

export default LoadingCard
