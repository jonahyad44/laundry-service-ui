import { Typography, Button, AppBar, Toolbar, Box, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import MyImage3 from "../pictures/laundry services.png";
import MyImage4 from "../pictures/laundry service logo.png";

export default function AboutUs() {
    return(
        <>
            <Box 
                sx={{
                    width: '2134px',
                    height: '1703px',
                }}
                display={'flex'}>
                    <AppBar
                    position= "fixed"
                    sx={{
                        height: '150px',
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
                        <img src={MyImage3} width={1500} height={400}/>
                        <Stack spacing={0.5}>
                            <CardContent
                            sx={{
                                width: '252px',
                                height: '56px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Typography
                                variant="h6"
                                sx={{
                                    color: '#000',
                                    textAlign: 'center',
                                    fontFamily: 'Playfair Display',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                }}>
                                    About Us
                                </Typography>
                            </CardContent>
                            <CardContent
                            sx={{
                                width: '1000px',
                                height: '271px',
                            }}>
                                <Typography
                                variant="h5"
                                sx={{
                                    color: '#000',
                                    textAlign: 'center',
                                    fontFamily: 'Noto Sans JP, Sans-Serif',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                }}>
                                    Suds N' Soak is a 24/7 an online laundromat service that  provides e-commerce laundry services to citizens across the Fort Lauderdale area to save you the hassle of your laundry needs. Suds N’ Soak is accessible on any device and we offer wash/dry, folding, iron, and pick-up and delivery between one to two business days. 
                                </Typography>
                            </CardContent>
                        </Stack>
                        <AppBar position="fixed"
                        sx={{
                            backgroundColor: '#F4EDE4',
                            height: '150px',
                            top: 'auto',
                            bottom: 0,
                        }}
                         elevation={0}
                         >
                          <Stack direction="row" spacing={3}>
                                <CardContent component='span'
                                sx={{
                                    width: '327px',
                                    height: '101px',
                                    flexShrink: 0,
                                }}>
                                    <Typography
                                    sx={{
                                        color: '#000',
                                        textAlign: 'center',
                                        fontFamily: 'Noto Sans JP, Sans-Serif',
                                        fontSize: '15px',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                    }}>
                                        1234 Main St. Fort Lauderdale 33323
United States<br/>
954-999-8999<br/>
support@sudsnsoak.com
                                    </Typography>
                                </CardContent>
                                <img src={MyImage4} width={200} height={200} style={{ margin: 'auto'}}/>
                                <CardContent component='span'
                                    sx={{
                                        width: '481px',
                                        height: '28px',
                                        flexShrink: 0,
                                    }}>
                                        <Typography
                                            sx={{
                                                color: '#000',
                                                textAlign: 'center',
                                                fontFamily: 'Noto Sans JP, Sans-Serif',
                                                fontSize: '15px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                            }}>
                                                Areas We Pick-Up & Deliver<br/>

Davie<br/>
Sunrise<br/>
Plantation<br/>
Hollywood<br/>
Hallandale
                                            </Typography>
                                    </CardContent>
                            </Stack>  
                        </AppBar>
                        </AppBar>
                        </Box>
        </>
    )
}