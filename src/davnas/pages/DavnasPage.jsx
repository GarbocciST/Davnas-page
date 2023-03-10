import { Box} from "@mui/material"
import { Banner, Footer, Cards, NavBar } from "../components"


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

      <Footer />
      
    </Box>
  )
}
