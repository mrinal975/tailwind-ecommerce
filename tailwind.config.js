module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#FD3D57",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  Plugin: [],
};
