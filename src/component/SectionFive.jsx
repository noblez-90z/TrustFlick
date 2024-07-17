import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import withdraw from "../image asset/withdraw.021bbb7fcbcd3ffe0de3ac41935dad26.svg";
import custumer_service from "../image asset/customer-service.png";
import referral from "../image asset/referral.a7f7a3c13cfb0f4046796f4a4fd06ae4.svg";
import affilate_market from "../image asset/affiliate-marketing.493b3205c8465c746575f7f08ecd3a85.svg";
import sheild from "../image asset/shield.png";

const boxStyled = styled("div")({
  border: 2,
  borderColor: "red",
});

const SectionFive = () => {
  return (
    <Container
      disableGutters
      sx={{ textAlign: "center", py: "20px", px: "10px" }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", lineHeight: "1.75rem", fontWieght: "600" }}
      >
        Why Trust TrustFlick?
      </Typography>
      <Typography>
        Here are some of the many features that define our uniqueness
      </Typography>
      <Container
        disableGutters
        sx={{
          display: {
            md: "flex",
            lx: "block",
            flexFlow: "wrap",
            justifyContent: "space-around",
            textAlign: "left",
          },
          // border: 2,
          // borderColor: "orange",
          px: "5px",
          py: "15px",
        }}
      >
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "400px", xs: "100%" },
            display: { md: "flex", xs: "block" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              // border: 2,
              // borderColor: "green",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundImage: "Linear-gradient(to bottom, lightgreen,black)",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "30px",
                height: "30px",
                border: "none",
                display: "block",
                mx: "auto",
                mt: "10px",
                mb: "10px",
                pt: { xs: "8px", md: "0" },
              }}
              src={withdraw}
            />
          </Box>
          <Box sx={{ /*border: 2, borderColor: "brown",*/ width: "100%" }}>
            <Typography
              variant="h5"
              sx={{
                py: "10px",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
              }}
            >
              Swift Approval Process
            </Typography>
            <Typography sx={{ fontSixe: "18px" }}>
              Bid farewell to long waiting periods. Our efficient application
              process ensures you receive a prompt decision on your loan
              request, often within minutes.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "400px", xs: "100%" },
            display: { md: "flex", xs: "block" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              // border: 2,
              // borderColor: "green",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundImage: "Linear-gradient(to bottom, lightgreen,black)",
            }}
          >
            <Box
              component="img"
              sx={{
                border: "none",
                width: "30px",
                height: "30px",
                display: "block",
                mx: "auto",
                mt: "10px",
                mb: "10px",
                pt: { xs: "8px", md: "0" },
              }}
              src={withdraw}
            />
          </Box>
          <Box sx={{ /*border: 2, borderColor: "brown",*/ width: "350px" }}>
            <Typography
              variant="h5"
              sx={{
                py: "10px",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
              }}
            >
              Competitive Interest Rates
            </Typography>
            <Typography>
              At TrustFlick, we believe in fair and transparent pricing. Benefit
              from competitive interest rates and clear terms, ensuring you get
              the best value for your money.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "400px", xs: "100%" },
            display: { md: "flex", xs: "block" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              // border: 2,
              // borderColor: "green",
              width: "50px",
              height: "50px",
              // p: "8px",
              borderRadius: "50%",
              backgroundImage: "Linear-gradient(to bottom, lightgreen,black)",
            }}
          >
            <Box
              component="img"
              sx={{
                border: "none",
                width: "30px",
                height: "30px",
                display: "block",
                mx: "auto",
                mt: "10px",
                mb: "10px",
                pt: { xs: "8px", md: "0" },
              }}
              src={sheild}
            />
          </Box>

          <Box sx={{ /*border: 2, borderColor: "brown",*/ width: "350px" }}>
            <Typography
              variant="h5"
              sx={{
                py: "10px",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
              }}
            >
              Customized Loan Solutions
            </Typography>
            <Typography>
              We understand that one size doesn’t fit all. That’s why we offer a
              range of loan options with flexible terms, empowering you to
              choose the solution that aligns perfectly with your financial
              goals.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "400px", xs: "100%" },
            display: { md: "flex", xs: "block" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              // border: 2,
              // borderColor: "green",
              width: "50px",
              height: "50px",
              // p: "8px",
              borderRadius: "50%",
              backgroundImage: "Linear-gradient(to bottom, lightgreen,black)",
            }}
          >
            <Box
              component="img"
              sx={{
                border: "none",
                width: "30px",
                height: "30px",
                display: "block",
                mx: "auto",
                mt: "10px",
                mb: "10px",
                pt: { xs: "8px", md: "0" },
              }}
              src={referral}
            />
          </Box>
          <Box sx={{ /*border: 2, borderColor: "brown",*/ width: "350px" }}>
            <Typography
              variant="h5"
              sx={{
                py: "10px",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
              }}
            >
              Exceptional Customer Care
            </Typography>
            <Typography>
              Our dedicated team of financial experts is here to support you
              every step of the way. Whether you need guidance during the
              application process or assistance with repayment options, count on
              us to provide attentive and personalized service.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "400px", xs: "100%" },
            display: { md: "flex", xs: "block" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              // border: 2,
              // borderColor: "green",
              width: "50px",
              height: "50px",
              // p: "8px",
              borderRadius: "50%",
              backgroundImage: "Linear-gradient(to bottom, lightgreen,black)",
            }}
          >
            <Box
              component="img"
              sx={{
                border: "none",
                width: "30px",
                height: "30px",
                display: "block",
                mx: "auto",
                mt: "10px",
                mb: "10px",
                pt: { xs: "8px", md: "0" },
              }}
              src={affilate_market}
            />
          </Box>

          <Box sx={{ /*border: 2, borderColor: "brown",*/ width: "350px" }}>
            <Typography
              variant="h5"
              sx={{
                py: "10px",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
              }}
            >
              Credit Challenges? No Sweat!
            </Typography>
            <Typography>
              Your credit score shouldn’t dictate your financial future. Even if
              you have less-than-perfect credit, TrustFlick welcomes your
              application, offering personalized solutions to suit your needs.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // border: 2,
            // borderColor: "red",
            width: { md: "400px", xs: "100%" },
            display: { md: "flex", xs: "block" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              // border: 2,
              // borderColor: "green",
              width: "50px",
              height: "50px",
              // p: "5px",
              borderRadius: "50%",
              backgroundImage: "Linear-gradient(to bottom, lightgreen,black)",
            }}
          >
            <Box
              component="img"
              sx={{
                border: "none",

                width: "30px",
                height: "30px",
                display: "block",
                mx: "auto",
                mt: { md: "10px", xs: "0" },
                mb: { md: "10px", xs: "none" },
                pt: { xs: "8px", md: "0" },
              }}
              src={custumer_service}
            />
          </Box>
          <Box sx={{ /*border: 2, borderColor: "brown",*/ width: "350px" }}>
            <Typography
              variant="h5"
              sx={{
                py: "10px",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                fontWieght: "600",
              }}
            >
              24/7 Friendly Support
            </Typography>
            <Typography>
              Our customer care service is available at all time to attend to
              you and also offer solutions to all your needs
            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default SectionFive;
