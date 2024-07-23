import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Layout from "./Layout";

const Login = () => {
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [employmentStatus, setEmploymentStatus] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmial] = useState("");
  const [address, setAddress] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerOccupation, setEmployerOccupation] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [employerState, setEmployerState] = useState("");
  const [employerCity, setEmployerCity] = useState("");
  const [employerZip, setEmployerZip] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyDebt, setMonthlyDebt] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [rent, setRent] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [loanTerm, setLoanTerm] = useState("");

  const handleChange = (event) => {
    setEmploymentStatus(event.target.value);
  };

  const handleSubmit = () => {
    if (
      fullName === "" ||
      email === "" ||
      address === "" ||
      employerName === "" ||
      employerOccupation === "" ||
      employerAddress === "" ||
      employerState === "" ||
      employerCity === "" ||
      employerZip === "" ||
      monthlyIncome === "" ||
      (monthlyDebt === "") &
        (monthlyExpenses === "") &
        (rent === "") &
        (creditScore === "") &
        (loanAmount === "") &
        (loanPurpose === "") &
        (loanTerm === "")
    ) {
      console.log("name required");
      setErrorMessage("FEILD REQUIRED");
      setError(false);
      // return setError(true);
    }
    if (fullName === "") {
      setErrorMessage(" 'name' cannot be empty ");
      setError(false);
    }
    if (email === "") {
      setErrorMessage(" 'email' cannot be empty ");
    }
    if (address === "") {
      setErrorMessage(" 'email' cannot be empty ");
    }
    if (employerName === "") {
      setErrorMessage(" 'Employer's name' cannot be empty ");
    }
    if (employerOccupation === "") {
      setErrorMessage(" 'Employer's ocuupation' cannot be empty ");
    }
    if (employerAddress === "") {
      setErrorMessage(" 'Employer's address' cannot be empty ");
    }
    if (employerState === "") {
      setErrorMessage(" 'Employer's state' cannot be empty ");
    }
    if (employerCity === "") {
      setErrorMessage(" 'Employer's city' cannot be empty ");
    }
    if (employerZip === "") {
      setErrorMessage(" 'Employer's zip' cannot be empty ");
    }
    if (monthlyIncome === "") {
      setErrorMessage(" 'Monthly income' cannot be empty ");
    }

    return error;
  };
  const Submit = (e) => {
    e.preventDefault();
    handleSubmit();
    console.log("login successfull");
  };

  return (
    <div className="">
      <Layout>
        <Container
          //maxWidth="100%" //this will make the container span up the full with of th screen. if you dont want the container to span the full with of the screen de by you give it a specifiv with you dont have to include this use the width to give it the width u want on full screen and set the max-Width to 100% to talk up the full of screen when been responsive or mobile view
          sx={{
            width: "800px",
            maxWidth: "100%",
            // border: 2,
            // borderColor: "blue",
            color: "green",
            mt: { md: "70px", xs: "50px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{ textTransform: "capitalize", color: "green" }}
          >
            apply for loan
          </Typography>
          <Box
            sx={{
              display: "flex",
              textTransform: "capitalize",
              // justifyContent: "space-between",
              py: "15px",
              fontWeight: "600",
              color: "green",
              borderBottom: 1,
              borderColor: "GrayText",
            }}
          >
            <Typography
              sx={{
                borderRight: 2,
                borderColor: "black",
                pr: "10px",
                textDecoration: "none",
                color: "green",
              }}
              component="a"
              href="./"
            >
              home
            </Typography>
            <Typography sx={{ pl: "10px" }}>apply for loan</Typography>
          </Box>

          <Container
            disableGutters
            sx={{
              // width: "850px",
              // maxWidth: "100%",
              // border: 2,
              // borderColor: "red",
              // mx: "auto",
              px: "10px",
            }}
          >
            <Box sx={{ mt: "20px", textTransform: "capitalize" }}>
              <Typography variant="h5">apply for loan</Typography>
              <Box>
                <Typography
                  sx={{ lineHeight: "1.25rem", textTransform: "capitalize" }}
                >
                  <Typography
                    variant="h6"
                    sx={{ display: "inline", pr: "3px", pt: "8px" }}
                  >
                    application fees:
                  </Typography>
                  <Typography sx={{ display: "inline" }}>
                    This fee varies on 5% - 10% of there loans amount must be
                    paid upfront when submitting.
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    lineHeight: "1.25rem",
                    textTransform: "capitalize",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: "inline",
                      pr: "3px",
                    }}
                  >
                    orgination fee:
                  </Typography>
                  <Typography sx={{ display: "inline" }}>
                    This fee covers the cost of processing your loan
                    application. It’s usually a percentage of the loan amount,
                    commonly around 1-5%, and is often deducted from the loan
                    proceeds.
                  </Typography>
                </Typography>
              </Box>

              <Typography sx={{ py: "10px" }}>
                Ready to take the first step towards securing your financial
                future? TrustFlick makes it simple and convenient to apply for a
                loan that suits your needs, whether personal or
                business-related. Fill out the form below to get started
              </Typography>
            </Box>
            <Box
              sx={{
                width: { md: "850px", xs: "100%" },
                maxWidth: "100%",
                // border: 2,
                // borderColor: "red",
                // mx: "auto",
                // px: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  textTransform: "capitalize",
                  my: "5px",
                }}
              >
                contact information
              </Typography>
              <TextField
                fullWidth
                label="fullName"
                id="fullWidth"
                sx={{
                  my: "10px",
                  // width: "100%",
                }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <TextField
                fullWidth
                label="email address"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={email}
                onChange={(e) => setEmial(e.target.value)}
              />
              <TextField
                fullWidth
                label="time at current address (in years)"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
              <TextField
                fullWidth
                label="address"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                fullWidth
                label="address"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  textTransform: "capitalize",
                  my: "5px",
                }}
              >
                Employment Information
              </Typography>
              <InputLabel sx={{ color: "green" }}>
                employment status{" "}
              </InputLabel>
              <Select
                value={employmentStatus}
                onChange={handleChange}
                fullWidth
                placeholder="select employment status"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              >
                <MenuItem value={"employed"}>employed</MenuItem>
                <MenuItem value={"unemployed"}>unemployed</MenuItem>
                <MenuItem value={"retired"}>retired</MenuItem>
                <MenuItem value={"student"}>student</MenuItem>
              </Select>
              <InputLabel sx={{ color: "green" }}>employer's name </InputLabel>
              <TextField
                fullWidth
                placeholder="John deo"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={employerName}
                onChange={(e) => setEmployerName(e.target.value)}
              />
              <InputLabel sx={{ color: "green" }}>
                occupation/position
              </InputLabel>
              <TextField
                fullWidth
                placeholder="e.g Trader"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={employerOccupation}
                onChange={(e) => setEmployerOccupation(e.target.value)}
              />

              <Box
                fullWidth
                sx={{
                  // border: 2,
                  // borderColor: "red",
                  display: "flex",
                  // gap: "5px",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <InputLabel sx={{ color: "green" }}>
                    employer's state
                  </InputLabel>
                  <TextField
                    placeholder="lagos"
                    sx={{
                      flex: 1,
                      width: { md: "325px", xs: "100%" },
                      my: "10px",
                    }}
                    InputProps={{
                      style: {
                        border: "1px solid green",
                      },
                    }}
                    value={employerState}
                    onChange={(e) => setEmployerState(e.target.value)}
                  />
                </Box>
                <Box>
                  <InputLabel sx={{ color: "green" }}>
                    employer's city
                  </InputLabel>
                  <TextField
                    placeholder="city"
                    sx={{
                      flex: 1,
                      width: { md: "325px", xs: "100%" },
                      my: "10px",
                    }}
                    InputProps={{
                      style: {
                        border: "1px solid green",
                      },
                    }}
                    value={employerCity}
                    onChange={(e) => setEmployerCity(e.target.value)}
                  />
                </Box>
              </Box>
              <InputLabel sx={{ color: "green" }}>
                employer's address{" "}
              </InputLabel>
              <TextField
                fullWidth
                placeholder="address"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={employerAddress}
                onChange={(e) => setEmployerAddress(e.target.value)}
              />
              <InputLabel sx={{ color: "green" }}>
                employer's zip code{" "}
              </InputLabel>
              <TextField
                fullWidth
                placeholder="103929"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={employerZip}
                onChange={(e) => setEmployerZip(e.target.value)}
              />
              <InputLabel sx={{ color: "green" }}>
                length of employment(in years){" "}
              </InputLabel>
              <TextField
                fullWidth
                placeholder="103929"
                id="fullWidth"
                type="number"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
              <InputLabel sx={{ color: "green" }}>monthly income</InputLabel>
              <TextField
                fullWidth
                placeholder="103929"
                id="fullWidth"
                type="number"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
              />
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  textTransform: "capitalize",
                  my: "5px",
                }}
              >
                financial information
              </Typography>
              <InputLabel sx={{ color: "green" }}>
                total monthly debt
              </InputLabel>
              <TextField
                fullWidth
                placeholder="103929"
                id="fullWidth"
                type="number"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={monthlyDebt}
                onChange={(e) => setMonthlyDebt(e.target.value)}
              />
              <InputLabel sx={{ color: "green" }}>monthly expenses</InputLabel>
              <TextField
                fullWidth
                placeholder="103929"
                id="fullWidth"
                type="number"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(e.target.value)}
              />
              <InputLabel sx={{ color: "green" }}>rental payment</InputLabel>
              <TextField
                fullWidth
                placeholder="103929"
                id="fullWidth"
                type="number"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={rent}
                onChange={(e) => setRent(e.target.value)}
              />
              <InputLabel sx={{ color: "green" }}>credit score</InputLabel>
              <TextField
                fullWidth
                placeholder="12"
                id="fullWidth"
                type="number"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={creditScore}
                onChange={(e) => setCreditScore(e.target.value)}
              />
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  textTransform: "capitalize",
                  my: "5px",
                }}
              >
                loan detials
              </Typography>
              <InputLabel sx={{ color: "green" }}>loan amount</InputLabel>
              <TextField
                fullWidth
                placeholder="103929"
                id="fullWidth"
                type="number"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
              <InputLabel sx={{ color: "green" }}>loan purpose</InputLabel>
              <TextField
                fullWidth
                placeholder="loan purpose"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
              />
              <InputLabel sx={{ color: "green" }}>
                desired loan term (in months)
              </InputLabel>
              <TextField
                fullWidth
                placeholder="1"
                id="fullWidth"
                type="number"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  textTransform: "capitalize",
                  my: "5px",
                }}
              >
                bank account detials
              </Typography>
              <InputLabel sx={{ color: "green" }}>account name</InputLabel>
              <TextField
                fullWidth
                placeholder="name"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
              <InputLabel sx={{ color: "green" }}>bank name</InputLabel>
              <TextField
                fullWidth
                placeholder="bank name"
                id="fullWidth"
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
              <Box
                fullWidth
                sx={{
                  // border: 2,
                  // borderColor: "red",
                  display: "flex",
                  // gap: "5px",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <InputLabel sx={{ color: "green" }}>
                    account number
                  </InputLabel>
                  <TextField
                    placeholder="account name"
                    sx={{
                      flex: 1,
                      width: { md: "325px", xs: "100%" },
                      my: "10px",
                    }}
                    InputProps={{
                      style: {
                        border: "1px solid green",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <InputLabel sx={{ color: "green" }}>
                    routing number
                  </InputLabel>
                  <TextField
                    placeholder="routing number"
                    sx={{
                      flex: 1,
                      width: { md: "325px", xs: "100%" },
                      my: "10px",
                    }}
                    InputProps={{
                      style: {
                        border: "1px solid green",
                      },
                    }}
                  />
                </Box>
              </Box>
              <InputLabel sx={{ color: "green" }}>proof of income</InputLabel>
              <TextField
                type="file"
                fullWidth
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
              <InputLabel sx={{ color: "green" }}>identification</InputLabel>
              <TextField
                type="file"
                fullWidth
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
              <InputLabel sx={{ color: "green" }}>
                businness Documents
              </InputLabel>
              <TextField
                type="file"
                fullWidth
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
              <InputLabel sx={{ color: "green" }}>
                collateral Documents
              </InputLabel>
              <TextField
                type="file"
                fullWidth
                sx={{ my: "10px" }}
                InputProps={{
                  style: {
                    border: "1px solid green",
                  },
                }}
              />
            </Box>
            <Button
              sx={{
                // border: 2,
                // borderColor: "red",
                borderRadius: "50px",
                px: "25px",
                my: "20px",
                backgroundImage:
                  "Linear-gradient(to right bottom, lightgreen,black)",
                color: "white",
              }}
              onClick={Submit}
            >
              Submit{" "}
            </Button>

            {!error && <p>{errorMessage} </p>}
          </Container>
        </Container>
      </Layout>
      {!error && (
        <Box>
          <Typography
            sx={{
              // border: "2px solid red",
              borderRadius: "20px",
              width: "300px",
              height: "50px",
              display: "block",
              position: "absolute",
              top: 0,
              right: 0,
              p: "10px",
              m: "10px",
              backgroundColor: "whitesmoke",
            }}
          >
            {errorMessage}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default Login;
