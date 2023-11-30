import { Card, Typography, Button, AppBar, Toolbar, Box, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import MyImage4 from "../pictures/laundry service logo.png";
import MyImage5 from '../pictures/Ironing.png';


export default function Pricing() {
    return(
        <>
        <Box 
                sx={{
                    width: '2134px',
                    height: '1543px',
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
                        </AppBar>
                        <Card 
                        sx={{
                            width: '968px',
                            height: '1400px',
                            margin: 'auto',
                            flexShrink: 0,
                            border: '1px solid #000',
                            boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
                        }}>
                            <img src={MyImage5} width={968} height={1400} />
                        </Card>
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
                        </Box>
        </>
    )
}