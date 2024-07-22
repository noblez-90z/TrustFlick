import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ADD_User from "../image asset/add-user.f614a40a023d9fd825df04dd6cfe5094.svg";
import fund from "../image asset/one1.f50603c8aeba1ebd6a51dad64eb5c011.svg";
import coin from "../image asset/coin.7c7cc8fa58d32b5046eec98378f7ebde.svg";

const SectionTwo = () => {
  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{
        // border: 2,
        // borderColor: "yellow",
        width: "100%",
        // height: "800px",
        textAlign: "center",
        backgroundImage: "Linear-gradient(to right bottom, lightgreen,black)",
        px: { md: "10px", xs: "15px" },
        py: "25px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          // mt: "20px",
          color: "#fff",
          fontSize: "2rem",
          lineHeight: "1.75rem",
          fontWieght: "600",
        }}
        gutterBottom
      >
        How it Works
      </Typography>
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          mt: "60px",
          // border: 1,
          // borderColor: "green",
        }}
      >
        <Box
          sx={{
            // border: 1,
            // borderColor: "yellow",
            width: "100%",
            display: "flex",
          }}
        >
          {/* <img src={ADD_ICON} /> */}
          <Box
            component="img"
            sx={{
              // border: 2,
              // borderColor: "red",
              width: "100px",
              height: "100px",
            }}
            src={ADD_User}
          />
          <Box
            sx={{
              // border: 1,
              // borderColor: "blue",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              disableGutters
              sx={{
                color: "#fff",
                fontSize: "1.50rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
                my: "10px",
              }}
            >
              Online Application
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#fff", fontSize: "18px" }}
            >
              Complete our straightforward online application form, providing
              basic details about yourself and your financial situation. It's
              quick and easy!
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            // border: 1,
            // borderColor: "yellow",

            width: "100%",
            display: " flex",
          }}
        >
          <Box
            component="img"
            sx={{
              // border: 2,
              // borderColor: "red",
              width: "100px",
              height: "100px",
            }}
            src={coin}
          />
          <Box
            sx={
              {
                /*border: 1, borderColor: "red"*/
              }
            }
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#fff",
                fontSize: "1.50rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
                my: "10px",
              }}
            >
              Approval in a Flash
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#fff", fontSize: "18px" }}
            >
              Once you submit your application, our advanced system swiftly
              reviews your information, delivering an instant decision on your
              loan approval.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            // border: 1,
            // borderColor: "yellow",

            width: "100%",
            display: " flex",
          }}
        >
          <Box
            component="img"
            sx={{
              // border: 2,
              // borderColor: "red",
              width: "100px",
              height: "100px",
            }}
            src={fund}
          />
          <Box
            sx={
              {
                /*border: 1, borderColor: "red"*/
              }
            }
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#fff",
                fontSize: "1.50rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
                my: "10px",
              }}
            >
              Funds Delivered Directly
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#fff", fontSize: "18px" }}
            >
              Upon approval, your funds will be deposited directly into your
              bank account within 24 hours. Simple, convenient, and hassle-free!
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: "#fff", my: "25px" }}
      >
        <Typography
          component={Link}
          to="/Login"
          sx={{ textDecoration: "none", pr: "3px", color: "orange" }}
        >
          Apply now
        </Typography>
        and Experience the TrustFlick Advantage!
      </Typography>
      <Box
        disableGutters
        sx={{
          // border: 2,
          // borderColor: "blue",
          width: { md: "70%", xs: "100%" },
          m: "auto",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            width: "100%",
            ml: "0px",
            mt: "15px",

            color: "#fff",
            fontSize: "18px",
          }}
          disableGutters
        >
          Don't let financial obstacles hold you back. Take charge of your
          finances today with TrustFlick Loans. Apply now to unlock the
          financial support you need, accompanied by the convenience and
          flexibility you deserve.
        </Typography>
      </Box>
    </Container>
  );
};

export default SectionTwo;
