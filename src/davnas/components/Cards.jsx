import { Grid , Typography } from "@mui/material"
import { nailsCard } from "../helpers/nailsCard"
import { CardImage } from "./CardImage"


export const Cards = () => {
  return (
    <Grid 
    container
    sx={{
        direction: "row",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        padding: "1rem",
    }}
    >
    
        <Grid
            item
            xs={9} sm={9} md={9} lg={9} xl={9}
            sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
          {
            nailsCard.map((card) => (
              <CardImage key={card.name} card={card} />
            ))
          }
        </Grid>



    </Grid>
  )
}
