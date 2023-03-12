import { Box} from "@mui/material"
import { Banner, Icons, Cards, NavBar, Footer } from "../components"


export const DavnasPage = () => {
  return (
    <Box
        sx={{
            height: "100vh",
        }}
    >

      <NavBar />

      <Banner />

      <Cards/>

      <Icons />

      <Footer />
      
    </Box>
  )
}
