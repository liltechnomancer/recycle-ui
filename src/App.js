/** @jsx jsx */
import "./styles.css";

import {
  ThemeProvider,
  Card,
  Heading,
  AspectImage,
  Button as Btn,
  Box,
  jsx
} from "theme-ui";
import theme from "./theme";
import Button from "./Button";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{ backgroundColor: "background", height: "100vh" }}
        className="App"
      >
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Card>
          <Box variant="inset">
            hello
            <AspectImage
              variant="cardHero"
              ratio={16 / 9}
              src="https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            />
          </Box>
          <Heading>Hello World</Heading> <Btn variant="icon">!</Btn>
        </Card>
        <Button>Hello</Button>
        <Button>World</Button>
      </div>
    </ThemeProvider>
  );
}
