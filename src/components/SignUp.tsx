import React, { useState, FormEvent } from "react";
import Stack from "@mui/material/Stack";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, useNavigate } from "react-router-dom";


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
      });

      if (response.status === 201) {
        alert("Registration successful");
        navigate("/SignIn");
      } else {
        alert("Registration failed");
      }

  };


  return (
    <>
    <form onSubmit={handleSignUp}>
    <Card   
                    sx={{
                        boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
                        display: 'flex',
                        width: '700px',
                        height: '500px',
                        borderRadius: '6px',
                        padding: '16px 24px 32px 24px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        border: '2px solid #000',
                        gap: '32px',
                        background: '#D9D9D9',
                        flexShrink: 0,
                        margin: 'auto',
                    }}>
                            <Stack spacing={2}>
                            <CardContent component='span'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '4px',
                                alignSelf: 'stretch',
                                width: '229px',
                                height: '25px',
                            }}>
                                    <CardContent component='header'
                                        sx={{
                                            width: '100% 229px',
                                            height: 'auto 25px',
                                            gap: '4px',
                                            alignItems: 'center',
                                            alignSelf: 'stretch',
                                            display: 'flex',
                                            flexShrink: 0,
                                        }}>
                                          <Typography
                                          variant="h5"
                                          sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignSelf: 'stretch',
                                            textAlign: 'center',
                                            fontSize: '25px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: 'normal',
                                            color: '#000',
                                            fontFamily: 'Noto Sans JP, Sans-Serif',
                                          }}>
                                            Username
                                          </Typography>
                                        </CardContent>
                                        <TextField
                                        required
                                        fullWidth
                                        sx={{
                                          fontFamily: 'Noto Sans JP, Sans-Serif',
                                          fontWeight: 400,
                                          justifyContent: 'center',
                                          flexDirection: 'column',
                                          fontSize: '14px',
                                          alignSelf: 'stretch',
                                          gap: '8px',
                                          flex: 100,
                                          background: "#FFFFFF",
                                        }} onChange={(e) => {
                                          setUsername(e.target.value);
                                        }}></TextField>
                            </CardContent>
                            </Stack>

                            <Stack spacing={2}>
                              <CardContent component='span'
                                sx={{
                                  width: '229px',
                                  height: '25px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'flex-start',
                                  alignSelf: 'stretch',
                                  gap: '4px',
                                }}>
                                  <CardContent component = 'header'
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'flex-start',
                                      width: '100% 229px',
                                      height: 'auto 25px',
                                      gap: '4px',
                                      alignSelf: 'stretch',
                                    }}>
                                      <Typography
                                      sx={{
                                        fontStyle: 'normal',
                                        lineHeight: '40px',
                                        fontSize: '25px',
                                        color: '#000',
                                        fontFamily: 'Noto Sans JP, Sans-Serif',
                                        fontWeight: 400,
                                      }}>
                                        Password
                                      </Typography>
                                    </CardContent>
                                    <TextField
                                    fullWidth
                                    required
                                    placeholder="Password"
                                    sx={{
                                      gap: '8px',
                                      fontWeight: 400,
                                      alignSelf: 'stretch',
                                      alignItems: 'center',
                                      flex: 100,
                                      fontFamily: 'Noto Sans JP, Sans-Serif',
                                      fontSize: '14px',
                                      fontStyle: 'normal',
                                      display: "flex",
                                      flexDirection: "column",
                                      background: '#FFFFFF',
                                    }}
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                          >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                          </IconButton>
                                        </InputAdornment>
                                      ),
                                    }} onChange={(e) => {
                                      setPassword(e.target.value);
                                    }}></TextField>
                                    <Link to={"/SignIn"}>
                                      <Typography>
                                        Already Have An Account? Sign In Here!
                                      </Typography>
                                    </Link>
                                    <Button
                                    fullWidth
                                    type="submit"
                                    variant= 'contained'
                                    sx={{
                                      backgroundColor: '#F02C2C',
                                      width: '100% 284px',
                                      height: 'auto 84px',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      alignSelf: 'stretch',
                                      color: '#FFFFFF',
                                      fontFamily: 'Noto Sans JP, Sans-Serif',
                                      fontSize: '14px',
                                      fontWeight: 500,
                                      gap: '4px',
                                      textTransform: 'capitalize',
                                    }}
                                    >
                                      Sign Up
                                    </Button>
                                </CardContent>
                            </Stack>
                                
                    </Card>
    </form>
    </>
  )

}