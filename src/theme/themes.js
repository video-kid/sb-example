const mainTheme = {
  name: "mainTheme",
  heading: {
    primary: {
      fontSize: "24px",
      fontFamily: "var(--special-font)",
    },
    secondary: {
      fontSize: "20px",
      fontFamily: "var(--special-font)",
    },
    subheader: {
      fontSize: "16px",
      fontFamily: "var(--special-font)",
    },
  },
  navbars: {
    background: "#455a64",
    filter: "unset",
    color: "#ffffff",
  },
  buttons: {
    primary: {
      background: "#3700b3",
      text: "#ffffff",
      border: "#3700b3",
    },
    secondary: {
      background: "#ffffff",
      text: "#3700b3",
      border: "#3700b3",
    },
    danger: {
      background: "#b00020",
      text: "#ffffff",
      border: "#b00020",
    },
  },
};

const adminTheme = {
  name: "adminTheme",
  heading: {
    primary: {
      fontSize: "22px",
      fontFamily: "var(--special-font-admin)",
    },
    secondary: {
      fontSize: "20px",
      fontFamily: "var(--special-font-admin)",
    },
    subheader: {
      fontSize: "18px",
      fontFamily: "var(--special-font-admin)",
    },
  },
  navbars: {
    background: "#ffffff",
    filter: "drop-shadow(0 -0.5rem 0.5rem #000000)",
    color: "#000000",
  },
  buttons: {
    primary: {
      background: "#00e676",
      text: "#ffffff",
      border: "#00e676",
    },
    secondary: {
      background: "#ffffff",
      text: "#9e9e9e",
      border: "#9e9e9e",
    },
    danger: {
      background: "#f44336",
      text: "#ffffff",
      border: "#f44336",
    },
  },
};

export { mainTheme, adminTheme };
