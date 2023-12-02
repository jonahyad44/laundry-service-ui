import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 343,
            md: 768,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: ["Roboto"].join(","),
        fontSize: 14,
        "sm-14-medium": {
            fontFamily: 'RobotoMedium',
            fontWeight: 500,
            fontSize: '14px',
        },
        'lg-18-medium': {
            fontFamily: 'RobotoMedium',
            fontWeight: 500,
            fontSize: '18px',
        },
        'lg-18-bold' : {
            fontFamily: 'RobotoBold',
            fontWeight: 700,
            fontSize: '18px',
        },
        "xs-12-medium": {
            fontFamily: "RobotoMedium",
            fontWeight: 500,
            fontSize: "12px",
          },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '6px',
                    boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 0px 1px rgba(0, 0, 0, 0.025)",
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: 'none',
                    padding: 0,
                },
            },
        },
    },

});

export const MyThemeProvider: React.FC<{
    children: React.ReactNode;    
}> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}