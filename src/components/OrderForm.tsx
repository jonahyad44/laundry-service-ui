import Card from "@mui/material/Card";
import { Button, Stack, TextField, Grid, Typography, Select, SelectChangeEvent, FormHelperText, Divider, FormControl, MenuItem } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { MyThemeProvider } from "../themes/themeprovider";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        telephone: '',
        state: '',
        city: '',
        zipCode: '',
        address1: '',
        address2: '',
    });

    const [emailValid, setEmailValid] = useState(true);
    const [telephoneValid, setTelephoneValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/ShoppingCart");
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        console.log(formValues);
        await fetch("/api/submitorder", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formValues }),
        })
        .then((response) => {
            if(response.ok) {
                console.log("Form successful!");
            } else {
                console.log("Form failed.");
            }
        })
        .catch((error) => {
            console.error("Error within form", error);
        });
        setLoading(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        if (name === 'email') {
            const emailChar = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            setEmailValid(emailChar.test(value));
        }

        if (name === 'telephone') {
            const phoneChar = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
            setTelephoneValid(phoneChar.test(value) || /^\d{10}$/.test(value));
        }
    };

    const handleChangeSelect = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,    
        }));
    }

    return (
        <>
        <MyThemeProvider>
            <form
            onSubmit={handleSubmit}
            style={{ width: '94%', margin: '3% auto', maxWidth: '1046px'}}
            >
                <Stack spacing={3}>
                    <Grid container>
                        <Grid item md={4} xs={12} marginBottom={'24px'}>
                            <Typography variant="lg-18-bold"> Basic Info</Typography>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Card>
                                <Grid container spacing={3} padding= '16px 20px 20px 20px'>
                                    <Grid item xs={12}>
                                        <Stack spacing='4px'>
                                            <Typography variant="sm-14-medium">Name</Typography>
                                            <TextField
                                            size="small"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            type="text"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleChange}
                                            autoComplete="name"
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing= '4px'>
                                            <Typography variant="sm-14-medium">Email</Typography>
                                            <TextField
                                            size="small"
                                            required
                                            fullWidth
                                            name="email"
                                            value={formValues.email}
                                            type="email"
                                            onChange={handleChange}
                                            error={!emailValid}
                                            autoComplete="email"
                                            />
                                            {!emailValid && (
                                                <FormHelperText error>
                                                    {"Enter a valid email address"}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing="4px">
                                            <Typography variant="sm-14-medium">Telephone</Typography>
                                            <TextField
                                            size="small"
                                            required
                                            fullWidth
                                            name="telephone"
                                            type="tel"
                                            value={formValues.telephone}
                                            onChange={handleChange}
                                            error={!telephoneValid}
                                            autoComplete="tel"
                                            />
                                            {!telephoneValid && (
                                                <FormHelperText error>
                                                    {'Enter a valid phone number'}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                    <Divider/>

                    <Grid container>
                        <Grid item md={4} xs={12} marginBottom={"24px"}>
                            <Typography variant="lg-18-bold">Address</Typography>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Card>
                             <Grid container spacing={3} padding="16px 20px 20px 20px">
                                <Grid item sm={4.5} xs={12}>
                                    <Stack spacing='4px'>
                                        <Typography variant="sm-14-medium">State</Typography>
                                        <FormControl>
                                            <Select
                                            defaultValue=""
                                            variant="outlined"
                                            required
                                            displayEmpty
                                            size="small"
                                            fullWidth
                                            type="select"
                                            name="state"
                                            value={formValues.state}
                                            onChange={handleChangeSelect}
                                            autoComplete="address-level1"
                                            >
                                                <MenuItem value="" disabled>
                                                    <Typography
                                                    variant="sm-14-medium"
                                                    >
                                                        Select Florida
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem value="Florida">Florida</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </Grid>
                                <Grid item sm={4.5} xs={12}>
                                    <Stack spacing='4px'>
                                        <Typography variant="sm-14-medium">City</Typography>
                                        <FormControl>
                                            <Select
                                            size="small"
                                            defaultValue=""
                                            variant="outlined"
                                            required
                                            displayEmpty
                                            fullWidth
                                            type="select"
                                            name="city"
                                            value={formValues.city}
                                            onChange={handleChangeSelect}
                                            autoComplete="address-level2"
                                            >
                                                <MenuItem value="" disabled>
                                                    <Typography
                                                    variant="sm-14-medium"
                                                    >
                                                        Select city
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem value='Davie'>Davie</MenuItem>
                                                <MenuItem value="Sunrise">Sunrise</MenuItem>
                                                <MenuItem value="Hollywood">Hollywood</MenuItem>
                                                <MenuItem value="Plantation">Plantation</MenuItem>
                                                <MenuItem value="Hallandale">Hallandale</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </Grid>
                                <Grid item sm={3} xs={12}>
                                    <Stack spacing='4px'>
                                        <Typography variant="sm-14-medium">
                                            Zip Code
                                        </Typography>
                                        <TextField
                                        required
                                        fullWidth
                                        size="small"
                                        name="zipCode"
                                        type="text"
                                        value={formValues.zipCode}
                                        onChange={handleChange}
                                        autoComplete="zip-code"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing='4px'>
                                        <Typography variant="sm-14-medium">Address 1</Typography>
                                        <TextField
                                        required
                                        size="small"
                                        fullWidth
                                        name="address1"
                                        type="text"
                                        value={formValues.address1}
                                        onChange={handleChange}
                                        autoComplete="address-line1"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing='4px'>
                                        <Typography variant="sm-14-medium">
                                            Address 2{""}
                                            <Typography
                                            variant="xs-12-medium"
                                            >
                                                (Optional)
                                            </Typography>
                                        </Typography>

                                        <TextField
                                        size="small"
                                        fullWidth
                                        name="address2"
                                        value={formValues.address2}
                                        type="text"
                                        onChange={handleChange}
                                        />
                                    </Stack>
                                </Grid>                                
                             </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Stack direction={"row-reverse"}>
                        <Button
                        onClick={handleNavigation}
                        sx={{
                            backgroundColor: '#F3DE19',
                            color: 'black',
                            textTransform: 'none',
                            typography: 'sm-14-medium',
                        }}
                        variant="contained"
                        type="submit"
                        disabled={
                            Object.entries(formValues).some(([fieldName, fieldValue]) => {
                                if (
                                    !(
                                        fieldName === 'address2'
                                    )
                                ) {
                                    return (
                                        fieldValue.trim() === "" || !emailValid || !telephoneValid
                                    );
                                }
                            }) || loading
                        }
                        disableElevation
                        >
                            Continue to payment
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </MyThemeProvider>
        
        </>
    )

}