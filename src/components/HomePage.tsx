import { Typography, Button, AppBar, Toolbar, Box, Divider} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import MyImage from '../pictures/pexels-photo-2927523.jpeg'
import MyImage2 from "../pictures/laundry-ecommerce-instructions.png"


export default function HomePage() {

    return (
        <>
                <Box 
                sx={{
                    width: '2134px',
                    height: '1543px',
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
                                width: '135px',
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
                                width: '130px',
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
                        <img src={MyImage} width={2134} height={400}/>
                        <Stack spacing={0.5}
                        justifyContent='flex-end'
                        alignItems='right'
                        direction='row'
                        >
                        <Stack spacing={0.5}
                        justifyContent='flex-start'
                        alignItems= 'left'
                        direction='column'
                        >
                        <CardContent component='span'
                            sx={{
                                width: '446px',
                                height: '56px',
                                flexShrink: 0,
                            }}>
                                <Typography
                                sx={{
                                    color: '#000',
                                    fontFamily: 'Noto Sans JP, Sans-Serif',
                                    fontSize: '25px',
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                }}>
                                    How It Works 
                                </Typography>
                            </CardContent>
                            <CardContent component= 'span'
                                sx={{
                                    width: '424px',
                                    height: '184px',
                                    flexShrink: 0,
                                }}>
                                    <Typography
                                    sx={{
                                        color: '#000',
                                        fontFamily: 'Noto Sans JP, Sanss-Serif',
                                        fontSize: '25px',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        textAlign: 'left',
                                    }}>
                                        1. Create an account. <br/>
2. Schedule an order for pickup. <br/>
3. Package laundry for pickup. <br/>
4. Receive your clothes on delivery.
                                    </Typography>
                                </CardContent>    
                            </Stack>
                            <img src={MyImage2} width={1268} height={500}/>
                            </Stack>
                    </AppBar>
                </Box>
        </>
    )

}