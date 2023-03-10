import { AppBar, Toolbar, Typography } from "@mui/material"
import { Buttons } from "./Buttons"


export const Footer = () => {
  return (
    <AppBar
        sx={{
            marginTop: "100vh",
        }}
    >
        <Toolbar>
            <Buttons />
        </Toolbar>
    </AppBar>

  )
}
