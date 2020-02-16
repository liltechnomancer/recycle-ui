/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { useState } from "react";
import { lighten } from "polished";
const activeColor = "#80FF80";
const Indicator = ({ active }) => (
  <div
    sx={{
      margin: "0 5px 0 0",
      background: active ? activeColor : "#D1D6D7",
      boxShadow: active
        ? `1px 1px 5px 1px ${lighten(
            0.1,
            activeColor
          )}, inset 1px 1px 1px 1px #BBBBC4`
        : "inset 1px 1px 1px 1px #BBBBC4, inset -1px -1px 1px 1px white",
      height: "6px",
      width: "6px",
      borderRadius: "100px"
    }}
  />
);

export default props => {
  const [isActive, setActive] = useState(false);
  return (
    <Button
      onClick={() => setActive(!isActive)}
      {...props}
      css={{
        display: "flex",
        alignItems: "center"
      }}
      variant={isActive ? "primaryActive" : "primary"}
    >
      <Indicator active={isActive} />
      {props.children}
    </Button>
  );
};
