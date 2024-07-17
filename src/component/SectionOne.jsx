// import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import back from "../image asset/banner-bg.0f93c72161a775eaf3de.webp";
import { Link } from "react-router-dom";

import React from "react";

// const StyledDiv = styled.div`
//   // background-color: blue;
//   // color: white;
//   height: 600px;

//   background-image: url(${back});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;
//if you use the above styled component u have to wrap the container or box with <StyledDiv>

const SectionOne = () => {
  return (
    <Container
      maxWidth="100%"
      sx={{
        // border: 2,
        // borderColor: "red",
        // backgroundImage: `url("${back}")`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        mt: { md: "70px", xs: "50px" },
        height: "85vh",
        display: { md: "flex", xs: "block" },
        justifyContent: "flex-start",
        alignItems: "center",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back}) center/cover no-repeat`,
      }}
    >
      <Box
        sx={{
          // border: 2,
          // borderColor: "blue",
          width: { md: "80%", xs: "100%" },
          height: "390px",
          mb: "90px",
          mx: { md: "0", xs: "auto" },
          textAlign: { md: "left", xs: "center" },
          py: { xs: "20px" },
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: "orange",
            width: "100%",
            lineHeight: "0.9",
            // fontSize: { xs: "26px" },
            my: "15px",
            fontSize: { md: "2rem", xs: "1rem" },
            fontStyle: "italic",
            fontWeight: "700",
          }}
        >
          Welcome to TrustFlick Loans
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "white",
            textTransform: "capitalize",
            fontSize: { md: "1.5rem", xs: "1rem" },
            fontWeight: "700",
          }}
        >
          your Reliable path to financial freedom
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            mt: "10px",
            fontSize: "18px",
            color: "white",
            lineHeight: "1.25rem",
          }}
        >
          Looking for a trustworthy partner to navigate your financial journey?
          Look no further than TrustFlick! We are committed to providing you
          with seamless lending solutions tailored to your unique needs,
          ensuring you have the financial support you need, precisely when you
          need it.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ mt: "10px", fontSize: "18px", color: "white" }}
        >
          Whether you're facing unexpected expenses, planning a dream vacation,
          or consolidating debt, TrustFlick has your back.
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to="/Login"
          sx={{
            border: 0,
            borderRadius: 50,
            backgroundColor: "white",
            color: "rgb(14 130 51)",
            p: "15px",
            mt: "15px",
            width: "200px",
            fontWeight: "600",

            "&:hover": {
              backgroundColor: "#fff",
              border: "none",
            },
          }}
        >
          Apply for loan
          {/* <Link to="/Login">Apply for loan</Link> */}
        </Button>
      </Box>
    </Container>
  );
};

export default SectionOne;
