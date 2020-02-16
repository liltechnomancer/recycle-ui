import { darken, lighten } from "polished";

const background = "#f8f8ff";
const primary = "#A775FF";
export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace"
  },
  colors: {
    text: "#000",
    background: background,
    primary: primary,
    highlight: lighten(0.02, background),
    lowlight: darken(0.02, background),
    dark: "black"
  },
  images: {},
  cardHero: {},
  inset: {
    padding: "10px",
    borderRadius: "7px",
    boxShadow: theme => `inset 5px 5px 4px ${theme.colors.lowlight}, 
    inset -5px -5px 4px ${theme.colors.highlight};`
  },
  cards: {
    primary: {
      transition: "all 1s ease-out",
      padding: "10px",
      overflow: "hidden",
      background: theme =>
        `linear-gradient(145deg, ${theme.colors.lowlight}, ${
          theme.colors.highlight
        });`,
      boxShadow: theme => ` 5px 5px 4px ${theme.colors.lowlight}, 
        -5px -5px 4px ${theme.colors.highlight};`,
      margin: "10px",
      borderRadius: "7px",
      "&:hover": {
        boxShadow: theme => `inset 5px 5px 4px ${theme.colors.lowlight}, 
        inset -5px -5px 4px ${theme.colors.highlight};`
      }
    }
  },
  box: {
    inset: {
      padding: "10px",
      background: "red"
    }
  },
  buttons: {
    icon: {
      borderRadius: "50000px",
      color: "primary",
      background: theme =>
        `linear-gradient(145deg, ${theme.colors.lowlight}, ${
          theme.colors.highlight
        });`,
      boxShadow: theme => ` 5px 5px 4px ${theme.colors.lowlight}, 
       -5px -5px 4px ${theme.colors.highlight};`,
      "&:active": {
        boxShadow: theme => `inset 5px 5px 4px ${theme.colors.lowlight}, 
        inset -5px -5px 4px ${theme.colors.highlight};`,
        background: theme =>
          `linear-gradient(315deg, ${theme.colors.highlight}, ${
            theme.colors.lowlight
          });`
      }
    },
    primary: {
      margin: "10px",
      fontWeight: "bold",
      color: "primary",
      borderRadius: "7px",
      background: theme =>
        `linear-gradient(145deg, ${theme.colors.lowlight}, ${
          theme.colors.highlight
        });`,
      boxShadow: theme => ` 5px 5px 4px ${theme.colors.lowlight}, 
         -5px -5px 4px ${theme.colors.highlight};`,
      // boxShadow: theme =>
      //   `5px 5px 10px ${lighten("primary", 0.5)}, -5px -5px 10px ${darken(
      //     "primary",
      //     0.5
      //   )}`,
      "&:active": {
        boxShadow: theme => `inset 5px 5px 4px ${theme.colors.lowlight}, 
        inset -5px -5px 4px ${theme.colors.highlight};`,
        background: theme =>
          `linear-gradient(315deg, ${theme.colors.highlight}, ${
            theme.colors.lowlight
          });`
      }
    },
    primaryActive: {
      margin: "10px",
      fontWeight: "bold",
      color: "primary",
      borderRadius: "7px",
      textDecoration: "underline",
      boxShadow: theme => `inset 5px 5px 4px ${theme.colors.lowlight}, 
        inset -5px -5px 4px ${theme.colors.highlight};`,
      background: theme =>
        `linear-gradient(315deg, ${theme.colors.highlight}, ${
          theme.colors.lowlight
        });`
    }
  }
};
