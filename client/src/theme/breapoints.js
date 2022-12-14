const size = {
    xs: '0px', 
    sm: '760px', 
    md: '960px', 
    lg: '1280px', 
    xl: '1920px'
}
const breakpoints = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    mxs: `(max-width: ${size.xs})`,
    msm: `(max-width: ${size.sm})`,
    mmd: `(max-width: ${size.md})`,
    mlg: `(max-width: ${size.lg})`,
    mxl: `(max-width: ${size.xl})`,
}
export default breakpoints