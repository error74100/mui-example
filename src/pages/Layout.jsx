import * as React from 'react';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Layout() {
  return (
    <div>
      <Header />

      <Container>
        <Box sx={{ bgcolor: '#f2f2f2', height: '20vh' }}>
          <div className="mui_group">
            <h2>Container & Box</h2>
          </div>
        </Box>
      </Container>

      <Container>
        <Box sx={{ padding: '10px 0' }}>
          <div className="mui_group">
            <h2>Grid</h2>
          </div>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Layout;
