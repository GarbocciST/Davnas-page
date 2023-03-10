import { Grid, Slide, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const message = [
  "Bienvenido a Davnas",
  "Consulta al whatsapp o instagram",
]

export const Slider = () => {

  const [messageIndex, setmessageIndex] = useState(0)
  const [show, setshow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
        setmessageIndex((i) => (i + 1) % message.length)
        setshow(true);

        setTimeout(() => {
            setshow(false);
        }
            , 4000);
    }, 5000);
    return () => clearInterval(interval);

  }, [])

  return (
    <Grid
      item
      xs={10} sm={10} md={10} lg={10} xl={10} 
      sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgrey",
          borderRadius: "1rem",
      }}
    >
      <Slide 
        in={show} 
        direction='right'
        // timeout={1000}
      >
          <Typography
            fontFamily=' "Montez","cursive"'
            fontSize='2rem'
            sx={{ textAlign: "center"}
          }
          >
            {`${message[messageIndex]}`}
          </Typography>
      </Slide>

    </Grid>
  )
}
