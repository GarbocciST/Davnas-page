import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Buttons = () => {
  return (
    <>
        <IconButton
            className="instagram"
            sx={{
                position: "absolute",
                bottom: "130px",
                right: "18px",
                '&:hover': {
                    backgroundColor: "secondary.light",
                    opacity: 0.5,
                },
            }}
        >
            <InstagramIcon
                sx={{
                    color: "white",
                    fontSize: "20px",
                }}
            />
        </IconButton>

        <IconButton
            sx={{
                position: "absolute",
                bottom: "80px",
                right: "20px",
                backgroundColor: "secondary.light",
                '&:hover': {
                    backgroundColor: "secondary.light",
                    opacity: 0.5,
                },
            }}
        >
            <WhatsAppIcon 
                sx={{
                    color: "white",
                    fontSize: "32px",
                }}
            />
        </IconButton>
    </>
  )
}


{/* <Link href="https://www.instagram.com/davnas.nails/?igshid=YmMYMTA2M2Y">
    <Typography
        sx={{
            color: "blue",
            marginLeft: "1rem"
        }}
    >Instagram
    </Typography>
</Link> */}