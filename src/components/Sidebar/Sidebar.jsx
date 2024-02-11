import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

//   const demoCategories = ['Comedy', 'Action', 'Horror', 'Animation']
  const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' },
  ];

  return (
    <div>
      <Link to="/" className="classes.imageLink">
        <img
          className={classes.image}
          src={process.env.PUBLIC_URL + '/moviematrix.png'}
          alt="MovieMatrix logo"
        />
      </Link>
      <Divider />
      <List>
        <listSubheader>Categories</listSubheader>
        {categories.map(({ label, value }) => (
            <ListItem button key={label} onClick={() => {}}>   
                {/* <ListItemIcon>
                  <img src={process.env.PUBLIC_URL + '/moviematrixsmall.png'} alt="moviematrix" className={classes.genreImages} height={30} />
                </ListItemIcon> */}
                <ListItemText primary={label} />
            </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      <listSubheader>Genres</listSubheader>
        {demoCategories.map(({ label, value }) => (
            <ListItem button key={label} onClick={() => {}}>   
                {/* <ListItemIcon>
                  <img src={process.env.PUBLIC_URL + '/moviematrixsmall.png'} alt="moviematrix" className={classes.genreImages} height={30} />
                </ListItemIcon> */}
                <ListItemText primary={label} />
            </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Sidebar
