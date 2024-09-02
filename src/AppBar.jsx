import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import HomePage from './New';

const rentalTypes = [
  { title: 'Type 1', price: '$500', img: 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  { title: 'Type 2', price: '$600', img: 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  { title: 'Type 3', price: '$700', img: 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
];

function Home() {
  return (
    <>
      <Container
        style={{
          marginTop: '20px',
          textAlign: 'center',
          backgroundImage: 'url(https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0'
        }}
      >
        <Typography variant="h4" style={{ color: '#fff' }}>Best Vacation Rentals</Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>Start Now!</Button>
      </Container>

      <Container style={{ marginTop: '40px' }}>
        <Grid container spacing={4}>
          {rentalTypes.map((rental, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={rental.img}
                  alt={rental.title}
                  sx={{
                    borderRadius: '50%',
                    width: '140px',
                    height: '140px',
                    margin: '20px auto 0'
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                    {rental.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
                    {rental.description}
                  </Typography>
                </CardContent>
                <Button
                  size="large"
                  sx={{
                    backgroundColor: index === 0 ? 'red' : index === 1 ? 'green' : 'blue',
                    color: '#fff',
                    marginBottom: '20px',
                    display: 'block',
                    margin: 'auto',
                    '&:hover': {
                      backgroundColor: index === 0 ? '#b71c1c' : index === 1 ? '#2e7d32' : '#1565c0',
                    }
                  }}
                >
                  Book Now @ {rental.price}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );rre
}



function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Vacation Rentals</Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/top-rated">Top Rated</Button>
          </Toolbar>
        </AppBar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
