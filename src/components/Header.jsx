import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate();

  return (
    <div>
      <Container sx={{ padding: '20px' }}>
        <Box sx={{ bgcolor: '#fff', height: 'auto' }}>
          <Button
            variant="contained"
            onClick={() => {
              nav('/');
            }}
          >
            Home
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              nav('/inputs');
            }}
          >
            Inputs
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              nav('/layout');
            }}
          >
            Layout
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              nav('/utill');
            }}
          >
            Utill
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Header;
