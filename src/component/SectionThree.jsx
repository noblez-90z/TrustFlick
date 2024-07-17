import { Box, Container, Typography } from "@mui/material";

const SectionThree = () => {
  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{
        // border: 2,
        // borderColor: "blue",
        textAlign: "center",
        px: "10px",
      }}
    >
      <Typography
        sx={{
          mt: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: { md: "2rem", xs: "1rem" },
          lineHeight: "1.75rem",
          fontWieght: "600",
        }}
      >
        What set
        <Typography
          sx={{
            textTransform: "uppercase",
            fontStyle: "italic",
            color: "green",
            mx: "5px",
            fontSize: { md: "2rem", xs: "1rem" },
          }}
        >
          TrustFlick
        </Typography>
        Apart?
      </Typography>
      <Container
        disableGutters
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "space-between",
          flexFlow: "wrap",
          textAlign: "left",
          mt: "30px",
          my: "15px",
          px: "5px",
        }}
      >
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "550px", xs: "100%" },

            // p: "10px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "1rem", fontWeight: "600", lineHeigt: "1.5rem" }}
          >
            Personalized Approach
          </Typography>
          <Typography variant="body1" gutterBottom>
            We understand that each financial situation is unique. That's why we
            take the time to listen to your needs and tailor our solutions
            accordingly. Whether you're a seasoned entrepreneur or a first-time
            borrower, TrustFlick is dedicated to finding the perfect lending
            option for you.
          </Typography>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "550px", xs: "100%" },
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "1rem", fontWeight: "600", lineHeigt: "1.5rem" }}
          >
            Accessibility for All
          </Typography>
          <Typography variant="body1" gutterBottom>
            Whether you have excellent credit, a few blemishes on your record,
            or are just starting to build credit, TrustFlick welcomes applicants
            from all financial backgrounds. We believe that everyone deserves
            access to fair and flexible lending options, regardless of their
            credit score.
          </Typography>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "550px", xs: "100%" },
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "1rem", fontWeight: "600", lineHeigt: "1.5rem" }}
          >
            Transparency and Integrity
          </Typography>
          <Typography variant="body1" gutterBottom>
            We believe in honest, transparent communication. You'll never
            encounter hidden fees or confusing terms with TrustFlick. Our
            commitment to integrity ensures that you know exactly what to expect
            throughout the loan process, from application to repayment.
          </Typography>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "550px", xs: "100%" },
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "1rem", fontWeight: "600", lineHeigt: "1.5rem" }}
          >
            Comprehensive Support
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our commitment to your financial success doesn't end once your loan
            is approved. The TrustFlick team is here to support you every step
            of the way, providing expert guidance and assistance whenever you
            need it. From answering your questions to exploring repayment
            options, we're dedicated to helping you thrive.
          </Typography>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "550px", xs: "100%" },
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "1rem", fontWeight: "600", lineHeigt: "1.5rem" }}
          >
            Lightning-Fast Approval
          </Typography>
          <Typography variant="body1" gutterBottom>
            Say goodbye to lengthy approval processes. With TrustFlick, you'll
            receive a decision on your loan application in record time, often
            within minutes. We understand that time is of the essence when
            you're in need of financial assistance, and we're here to deliver
            prompt solutions.
          </Typography>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "550px", xs: "100%" },
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: "1rem", fontWeight: "600", lineHeigt: "1.5rem" }}
          >
            Cutting-Edge Technology
          </Typography>
          <Typography variant="body1" gutterBottom>
            TrustFlick leverages advanced technology to streamline the lending
            process and enhance your experience. Our user-friendly online
            platform makes it easy to apply for a loan, upload documents, and
            track your application status from anywhere, at any time.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default SectionThree;
