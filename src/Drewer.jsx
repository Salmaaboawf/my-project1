import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Switch, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Create, AccountCircle, Settings, Logout } from '@mui/icons-material';

function Drewer() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My expenses
          </Typography>
          <Switch checked={darkMode} onChange={handleToggleDarkMode} />
          <Typography variant="body1">Salma saloma</Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <List>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ marginLeft: 240, padding: '20px' }}>
        {/* محتوى الصفحة الرئيسية */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#334155', borderRadius: '5px',color:"white" }}>
            <Typography variant="h6">Food</Typography>
            <Typography variant="h6">$13</Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#334155', borderRadius: '5px',color:"white" }}>
            <Typography variant="h6">Bills</Typography>
            <Typography variant="h6">$20</Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#334155', borderRadius: '5px',color:"white" }}>
            <Typography variant="h6">Water</Typography>
            <Typography variant="h6">$12</Typography>
          </div>
        </div>
        <Typography variant="h6" style={{ marginTop: '20px', textAlign: 'center' }}>
          👉 You Spend $45
        </Typography>
      </main>
    </ThemeProvider>
  );
}

export default Drewer;
