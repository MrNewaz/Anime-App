import { Box, Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'

const pages = [
  { name: 'Home', to: '/' },
  { name: 'My List', to: '/mylist' },
]

const Navbar = () => {
  const location = useLocation()
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: '100%' }} variant="dense">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
            }}
          >
            Anime App
          </Typography>
          <Box style={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                color="inherit"
                variant={location.pathname === page.to ? 'outlined' : 'text'}
                component={Link}
                to={page.to}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
