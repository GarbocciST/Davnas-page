import { Grid } from "@mui/material"
import { Slider } from "./Slider"


export const Banner = () => {
  return (
    
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    padding={4}
    >

        <Grid
            item
            xs={12} sm={12} md={12} lg={12} xl={12} 
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              mb: 2,
            }}
        >
          
          <img src="/banner.png" alt=""  className="img" />
        </Grid>


        <Slider />

            

    </Grid>

  )
}

