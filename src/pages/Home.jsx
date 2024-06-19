import Header from '../components/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Home() {
  return (
    <div>
      <Header />

      <Container sx={{ padding: '20px' }}>
        <Box sx={{ padding: '10px 0', textAlign: 'center' }}>
          create-react-app + Material UI 테스트.
        </Box>
      </Container>
    </div>
  );
}

export default Home;
