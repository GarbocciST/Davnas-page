import { Grid, Typography } from "@mui/material"


export const Footer = () => {
  return (
    <Grid
        sx={{
            display: "flex",
            flexDirection: "space-between",
            backgroundColor: "grey",
            height: "15vh",

            
        }}
    >
      <Typography
        component={"div"}
        fontFamily={ '"Montez","cursive"' }
        fontSize='2rem'
      >
        Davna's Nails
      </Typography>

      <Typography
        component={"div"}
        fontFamily={ '"Montez","cursive"' }
        fontSize='1.5rem'
      >
        <b>Contacto</b>
        <br />
      +549 2214944683
      </Typography>


    </Grid>
  )
}
