import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const { data, error, isLoading } = useGetMoviesQuery();
  console.log('Data:', data);
  console.log('Error:', error);
  console.log('Is Loading:', isLoading);
  
  return (
    <div>
      Movies
    </div>
  )
}

export default Movies;