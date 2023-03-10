import { AppBar, Toolbar, Typography } from "@mui/material"
import { Buttons } from "./Buttons"


export const Footer = () => {
  return (
    <AppBar
        sx={{
            marginTop: "100vh",
            rotate: "180deg",
            // height: "1vh",
        }}
    >
        <Toolbar
            sx={{
                rotate: "180deg",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'lightgrey',
                height: "1vh",
            }}
        >
            <Typography
                sx={{
                    color: "black",
                    marginRight: "1rem"
                }}
            >
                Para mas consultas escribir al whatsapp o al instagram.
            </Typography>

            <Buttons />

        </Toolbar>
    </AppBar>

  )
}
