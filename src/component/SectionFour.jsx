import { Box, Button, Container, Typography } from "@mui/material";
import meet from "../image asset/check-image.3f9badad60af66700143.webp";

const SectionFour = () => {
  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{
        display: { md: "flex", xs: "block" },
        justifyContent: "space-between",
        px: "10px",
        py: "30px",
        // border: 2,
        // borderColor: "darkorange",
        color: "white",
        backgroundImage: "Linear-gradient(to right bottom, lightgreen,black)",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "600",
            lineHeigt: "1.75rem",
            my: "15px",
          }}
        >
          What Makes Us Different
        </Typography>
        <Typography>
          At TrustFlick Loans, we stand out from the crowd by prioritizing your
          financial well-being and delivering unmatched service every step of
          the way. Here's why thousands of customers choose TrustFlick for their
          lending needs:
        </Typography>
        <Typography>
          Experience the TrustFlick difference for yourself. Apply now and
          discover a new standard of excellence in lending.
        </Typography>
        <Typography>Banking evolved. For life in hyperspeed.</Typography>
        <Button
          sx={{
            border: 0,
            borderRadius: 50,
            backgroundColor: "white",
            color: "rgb(14 130 51)",
            mt: "20px",
            px: "20px",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          Get Started now
        </Button>
      </Box>

      <Box
        component="img"
        sx={{
          // border: 2,
          // borderColor: "red",
          width: { md: "550px", xs: "100%" },
          borderRadius: "10px",
          mt: { xs: "20px" },
          // height: "400px",
        }}
        src={meet}
      />
    </Container>
  );
};

export default SectionFour;
