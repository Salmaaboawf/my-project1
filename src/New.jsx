import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img 
              src="https://images.stockcake.com/public/9/9/7/9974398f-23c0-4cbb-a072-8d4c89fcb27f_large/cosmic-neon-art-stockcake.jpg" 
              alt="logo" 
              style={{ width: 40 }} 
            />
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Components</Button>
          <Button color="inherit">Pages</Button>
          <Button color="inherit">Docs</Button>
          <Button color="inherit">Sign in</Button>
          <Button variant="contained" sx={{ ml: 2 }}>Purchase</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          backgroundImage: 'url(https://minimal-assets-api.vercel.app/assets/images/home/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: '#fff',
          padding: 2,
        }}
      >
        <Typography variant="h3" sx={{ color: 'gray', fontWeight: 'bold' }}>
          Boost your building
        </Typography>
        <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold' }}>
          process with
        </Typography>
        <Typography variant="h3" sx={{ color: '#36B37E', fontWeight: 'bold' }}>
          Minimal
        </Typography>
        <Typography variant="h6" component="p" sx={{ mt: 2, maxWidth: '600px' ,color:"black"}}>
          The starting point for your next project is based on MUI. Easy customization helps you build apps faster and better.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" size="large" sx={{ mr: 2 }}>
            Live Preview
          </Button>
          <Button variant="outlined" size="large">
            Figma Preview
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
