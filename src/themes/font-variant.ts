import React from "react";

declare module "@mui/material/styles" {
    interface TypographyOptions {
        "lg-18-bold": React.CSSProperties;
        "sm-14-medium": React.CSSProperties;
        'lg-18-medium': React.CSSProperties;
        "xs-12-meidum": React.CSSProperties;
    }

    interface TypographyVariants {
        "lg-18-medium": React.CSSProperties;
        "sm-14-medium": React.CSSProperties;
        "lg-18-bold": React.CSSProperties;
        "xs-12-medium": React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        "lg-18-medium": React.CSSProperties;
        "sm-14-medium": React.CSSProperties;
        'lg-18-bold': React.CSSProperties;
        'xs-12-medium': React.CSSProperties;
    }

}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        "lg-18-medium": true;
        "sm-14-medium": true;
        'lg-18-bold': true;
        'xs-12-medium': true;

    }
}