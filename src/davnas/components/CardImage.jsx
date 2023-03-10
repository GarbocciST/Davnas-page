import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"


export const CardImage = ({card}) => {
  return (
    <Card
    className={card.name}
    sx={{
      // marginLeft: {xs: 1, sm : 2},
      maxHeight: {xs: "400px" , sm : "315px"},
      minHeight: {xs: "400px", sm : "315px"},
      maxWidth: {xs: "100px" , sm : "220px"},
      minWidth: {xs: "125px" , sm : "220px"},
    }}
    >
      <CardMedia 
        component={"img"}
        alt={"Davnas"}
        height={"150px"}
        image={card.img}
      />

      <CardContent>
        <Typography variant={"h7"} component={"div"}>
          {card.price}
        </Typography>

        <Typography variant={"body2"} color={"text.secondary"}>
          {card.disclaimer}
        </Typography>

      </CardContent>

      <CardActions>
        <Button 
          size={"small"}
        >
          Mirar
        </Button>
      </CardActions>

    </Card>
  )
}
