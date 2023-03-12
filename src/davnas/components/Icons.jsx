import { AppBar, Toolbar } from "@mui/material"
import { Buttons } from "./Buttons"


export const Icons = () => {
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
