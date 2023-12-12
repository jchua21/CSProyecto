const breakpoints = {
  xs: "320px",
  sm: "600px",
  md: "868px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};

export default devices;
