import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              My App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Typography variant="h4" gutterBottom>
            Welcome to My App
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Container>
      </div>
    );
  }
}

export default App;
