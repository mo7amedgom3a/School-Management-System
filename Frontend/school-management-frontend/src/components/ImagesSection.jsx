import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import studentAndTeacher from '../assets/images/StudentsAndTeacher.jpg'
import studentStudy from '../assets/images/StudentStudy.jpg';

const ImagesSection = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img src={studentAndTeacher} alt="Students and Teacher" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={studentStudy} alt="Student Studying" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ImagesSection;
