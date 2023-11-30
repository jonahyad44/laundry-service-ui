import React, {useState} from "react";
import { Typography, Button, Box, Toolbar, AppBar, Divider} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Textarea from "@mui/joy/Textarea";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { backendUrl } from "../config";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleEmail = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch(`${backendUrl}/mail/contactform`, {
          method: "POST",
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify({name, email, message}),
        });
        if (response.status === 201) {
          alert('Message Sent');
        } else {
          alert("error")
        }
    }



    return (
        <>
        <Box
        sx={{
            width: '2149px',
            height: '1300px',
            backgroundColor: '#D7F2FE',
        }}
        display={'flex'}>
                    <AppBar
                    position= "fixed"
                    sx={{
                        height: '100px',
                        backgroundColor: '#D9D9D9',
                    }}
                    elevation={0}
                    >
                        <Toolbar
                        sx={{
                            position: 'static',
                            bottom: '50px',
                            alignSelf: 'flex-start',
                            "&.MuiToolbar-regular": {
                                padding: '0',
                            },
                        }}>
                            <Stack
              direction="row"
              display={"flex"}
              alignItems={"center"}
              divider={<Divider orientation="vertical" flexItem />}
            >
                 <CardContent component='span'
                                sx={{
                                    width: '138px',
                                    height: '43px',
                                    flexShrink: 0,
                                }}>
                                    <Link to={"/HomePage"}>
                                    <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#000',
                                        fontFamily: 'Inter',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                    }}>
                                        Home
                                    </Typography>
                                    </Link>
                                </CardContent>
                                <CardContent component='span'
                                sx={{
                                    width: '138px',
                                    height: '43px',
                                    flexShrink: 0,
                                }}>
                                    <Link to={"/Pricing"}>
                                    <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#000',
                                        fontFamily: 'Inter',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                    }}>
                                        Pricing
                                    </Typography>
                                    </Link>
                                </CardContent>
                                <CardContent component='span'
                                sx={{
                                    width: '138px',
                                    height: '43px',
                                    flexShrink: 0,
                                }}>
                                    <Link to={"/Contact"}>
                                    <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#000',
                                        fontFamily: 'Inter',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                    }}>
                                        Contact
                                    </Typography>
                                    </Link>
                                </CardContent>
                                <CardContent component='span'   
                                    sx={{
                                        width: '138px',
                                        height: '43px',
                                    }}>
                                        <Link to={"/AboutUs"}>
                                        <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#000',
                                            fontFamily: 'Inter',
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                        }}>
                                            About Us
                                        </Typography>
                                        </Link>
                                    </CardContent>

            </Stack>    
        </Toolbar>
        <Toolbar
                         sx={{
                            position: 'relative',
                            bottom: '50px',
                            alignSelf: 'flex-end',
                            "&.MuiToolbar-regular": {
                                padding: '0',
                            },
                        }}>
                            <CardContent component='span'
                            sx={{
                                width: '147px',
                                height: '73px',
                                flexShrink: 0,
                            }}>
                                <Link to={"/SignIn"}>
                                <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                width: '147px',
                                height: '73px',
                                flexShrink: 0,
                                backgroundColor: '#FFFFFF',
                                color: '#000',
                                fontWeight: 400,
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontFamily: 'Inter',
                                textTransform: 'capitalize',
                            }}>
                                Sign In
                            </Button>
                            </Link>
                            </CardContent>

                            <CardContent component='span'
                            sx={{
                                width: '147px',
                                height: '73px',
                                flexShrink: 0,
                            }}>
                                <Link to={"/SignUp"}>
                                <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                width: '147px',
                                height: '73px',
                                flexShrink: 0,
                                backgroundColor: '#F02C2C',
                                color: '#FFFFFF',
                                fontWeight: 400,
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontFamily: 'Inter',
                                textTransform: 'capitalize',
                            }}>
                                Sign Up
                                </Button>
                                </Link>
                            </CardContent>
                        </Toolbar>
                        <form 
        onSubmit={(event) => {
            event.preventDefault();
        }} 
        >
            <Card
            sx={{
                display: 'flex',
                width: '700px',
                height: '600px',
                flexShrink: 0,
                borderRadius: '6px',
                boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
                padding: '16px 24px 32px 24px',
                backgroundColor: '#D9D9D9',
                flexDirection: 'column',
                alignItems: 'flex-start',
                border: '2px solid #000',
                gap: '32px',
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
                                width: '204px',
                                height: '40px',
                            }}>
                                <CardContent component='header'
                                        sx={{
                                            width: '100% 204px',
                                            height: 'auto 40px',
                                            gap: '4px',
                                            alignItems: 'center',
                                            alignSelf: 'stretch',
                                            display: 'flex',
                                            flexShrink: 0,
                                        }}>
                                            <Typography
                                            sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignSelf: 'stretch',
                                            textAlign: 'center',
                                            fontSize: '36px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: 'normal',
                                            color: '#000',
                                            fontFamily: 'Noto Sans JP, Sans-Serif',
                                            }}>
                                                Name
                                            </Typography>
                                        </CardContent>
                                        <CardContent
                component="input"
                required
                sx={{
                  width: "400px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  padding: "9px 13px",
                  flexDirection: "column",
                  flex: 100,
                  fontSize: "14px",
                  fontFamily: "Noto Sans JP, Sans-Serif",
                  lineHeight: "20px",
                  color: "#111827",
                  fontStyle: "normal",
                  fontWeight: 400,
                  borderRadius: "6px",
                  background: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></CardContent>
                            </CardContent>
                </Stack>
                <Stack spacing={2}>
                <CardContent component='span'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '4px',
                                alignSelf: 'stretch',
                                width: '152px',
                                height: '28px',
                            }}>
                                <CardContent component='header'
                                        sx={{
                                            width: '100% 152px',
                                            height: 'auto 28px',
                                            gap: '4px',
                                            alignItems: 'center',
                                            alignSelf: 'stretch',
                                            display: 'flex',
                                            flexShrink: 0,
                                        }}>
                                            <Typography
                                            sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignSelf: 'stretch',
                                            textAlign: 'center',
                                            fontSize: '36px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: 'normal',
                                            color: '#000',
                                            fontFamily: 'Noto Sans JP, Sans-Serif',
                                            }}>
                                                Email
                                            </Typography>
                                        </CardContent>
                                        <CardContent
                component="input"
                required
                sx={{
                  width: "400px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                  padding: "9px 13px",
                  flexDirection: "column",
                  flex: 100,
                  fontSize: "14px",
                  fontFamily: "Noto Sans JP, Sans-Serif",
                  lineHeight: "20px",
                  color: "#111827",
                  fontStyle: "normal",
                  fontWeight: 400,
                  borderRadius: "6px",
                  background: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></CardContent>
                                 </CardContent>
                </Stack>
                <Stack spacing={2}>
                <CardContent component='span'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '4px',
                                alignSelf: 'stretch',
                                width: '216px',
                                height: '34px',
                            }}>
                                <CardContent component='header'
                                        sx={{
                                            width: '100% 216px',
                                            height: 'auto 34px',
                                            gap: '4px',
                                            alignItems: 'center',
                                            alignSelf: 'stretch',
                                            display: 'flex',
                                            flexShrink: 0,
                                        }}>
                                            <Typography
                                      sx={{
                                        fontStyle: 'normal',
                                        fontSize: '36px',
                                        color: '#000',
                                        fontFamily: 'Noto Sans JP, Sans-Serif',
                                        fontWeight: 400,
                                        lineHeight: '70px',
                                      }}>
                                        Message
                                      </Typography>
                 </CardContent>  
                 <Textarea
                 required
                 size="lg"
                 name="Size"
                 placeholder="Type here"
                 minRows={2}
                 sx={{ borderRadius: '6px'}}
                 onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                 />
                 
                 <Button
                 onSubmit={handleEmail}
                 variant="contained"
                 type="submit"
                 sx={{
                    backgroundColor: '0D65EA',
                    display: 'flex',
                    color: '#FFFFFF',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    fontFamily: 'Noto Sans JP, Sans-Serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    justifyContent: 'center',
                    width: '100% 150px',
                    height: 'auto 32px',
                    gap: '10px',
                 }}>
                    Send
                 </Button>
                 </CardContent>                         
                </Stack>
            </Card>
        </form>
        </AppBar>
        
        </Box>
        
        </>
    )
}