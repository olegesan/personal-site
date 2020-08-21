import {theme} from '@chakra-ui/core'

export const customTheme = {
    ...theme,
    colors: {
        gray:{
            50:'#F7FAFC',
            700:'#2D3748'
        }
    },
    fonts:{
        body: "Menlo, monospace",
        heading: "Menlo, monospace",
        mono: "Menlo, monospace",
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
      },
      breakpoints: ["30em", "48em", "62em", "80em"],
      space: {
        px: "1px",
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
      },
      sizes: {
        ...theme.space,
        full: "100%",
        "3xs": "14rem",
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
      }





}