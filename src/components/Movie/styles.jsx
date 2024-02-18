import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    movie: {
        padding: '10px',
    },
    links: {
        alignItems: 'center',
        fontWeight: 'bold',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: 
        {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer',
        },
    },
    image: {
        height: '300px',
        borderRadius: '20px',
        marginBottom: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    title: {
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '230px',
        whitespace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',
    },
}));
