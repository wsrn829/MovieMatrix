import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',},
  image: {
    width: '100%',
    height: '15%',
    margin: '0',
    padding: '8%',
    },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',},
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
    },     
}));
