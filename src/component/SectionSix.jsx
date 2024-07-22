import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import facebook from "../image asset/facebook.png";
import { Link } from "react-router-dom";

const pages = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Loan",
    path: "/Login",
  },
];

const SectionSix = () => {
  return (
    <Container
      disableGutters //this remove the default padding inside the container
      maxWidth="100%"
      sx={{
        // border: 2,
        // borderColor: "red",
        color: "GrayText",
        backgroundColor: "black",
      }}
    >
      <Container
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "space-between",
          mt: "40px",
          py: "25px",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ mb: "10px", color: "white" }}>
            TrustFlick
          </Typography>
          <Typography sx={{ mt: "15px", fontStyle: "italic" }}>
            Where business meets family
          </Typography>
          <Typography sx={{ mt: "15px" }}>Tel:</Typography>
          <Typography>+1(831)2016623</Typography>
          <Typography sx={{ mt: "15px" }}>Contact:</Typography>
          <Typography>info@trustflick.com</Typography>
          <Typography sx={{ mt: "15px" }}>Social</Typography>
          <Box>
            <img src={facebook} alt="facebook" width={40} height={40} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ mb: "10px", color: "white" }}>
            Useful Links
          </Typography>
          <List>
            {pages.map((page, index) => (
              <ListItem button key={index} component={Link} href={page.path}>
                <ListItemText primary={page.text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ flex: 0.7 }}>
          <Typography variant="h5" sx={{ mb: "10px", color: "white" }}>
            Subscribe to Our NewsLetter
          </Typography>
          <TextField
            sx={{
              width: "100%",
              my: "10px",
              outline: "none",
            }}
            InputProps={{
              style: {
                borderRadius: "50px",
                border: "1px solid green",
                height: "40px",
                backgroundColor: "white",
              },
            }}
          />

          <Button
            sx={{
              backgroundColor: "green",
              color: "#fff",
              borderRadius: "50px",
              p: "10px",
              my: "10px",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
          >
            subscribe
          </Button>
          <Typography>
            Stay in the loop on the latest finance tips, product updates, and
            exclusive offers. Subscribe to our newsletter today!
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          textAlign: "center",
          height: "30px",
          backgroundColor: "#333",
          color: "GrayText",
          py: "8px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Copyright ©{" "}
        <Typography sx={{ color: "green", mx: "3px" }}>Trustflick</Typography> -
        2024. All Rights Reserved
      </Box>
    </Container>
  );
};

export default SectionSix;
