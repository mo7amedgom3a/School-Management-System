import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const CallToAction = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#1976d2', color: 'white', textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to get started?
        </Typography>
        <Button variant="contained" color="secondary" href="/register/student">
          Register as Student
        </Button>
        <Button variant="contained" color="secondary" href="/register/teacher" sx={{ ml: 2 }}>
          Register as Teacher
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
