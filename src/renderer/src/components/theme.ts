import { createTheme } from '@mui/material'

declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    mobile: true
    laptop: true
    tablet: true
    desktop: true
    // Remove default breakpoints
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1280
    }
  }
})
