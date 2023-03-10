import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = () => {
  return (
      <AppBar position="static">
        <Toolbar
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'lightgrey'

            }}
        >
          <Typography variant="h6" color="black" 
            fontFamily=' "Montez","cursive"'
            fontSize='2rem'
            className='header'
          >
            Davnas Nails
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
