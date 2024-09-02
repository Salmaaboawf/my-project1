import React from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function LoginPage() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      {/* Left Side Content */}
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        sx={{
          backgroundColor: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box>
          <img src="https://images.stockcake.com/public/a/c/2/ac2e7959-999a-43eb-8b9a-503c686abe85_large/elegant-boutique-logo-stockcake.jpg" alt="Logo" style={{ marginBottom: '20px',width:100 }} />
          <Typography variant="h5" gutterBottom>
            Adaptable performance
          </Typography>
          <Typography variant="body1" paragraph>
            Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Built to last
          </Typography>
          <Typography variant="body1" paragraph>
            Experience unmatched durability that goes above and beyond with lasting investment.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Great user experience
          </Typography>
          <Typography variant="body1" paragraph>
            Integrate our product into your routine with an intuitive and easy-to-use interface.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Innovative functionality
          </Typography>
          <Typography variant="body1" paragraph>
            Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side Form */}
      <Grid
        item
        xs={12}
        sm={6}
        md={7}
        component={Box}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="h4" gutterBottom>
            Sign in
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Button href="#" sx={{ textTransform: 'none' }}>
                Forgot your password?
              </Button>
            </Grid>
            <Grid item>
              <Button href="#" sx={{ textTransform: 'none' }}>
                Don't have an account? Sign up
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }}>or</Divider>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ textTransform: 'none', mb: 1 }}
          >
            Sign in with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ textTransform: 'none' }}
          >
            Sign in with Facebook
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginPage;