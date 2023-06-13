module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extends: {
      screen: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        "color-primary": "red",
      },
    },
  },
  Plugin: [],
};
