import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { theme } from "./purpletheme"


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        
        <CssBaseline />

        {children}

    </ThemeProvider>
  )
}
