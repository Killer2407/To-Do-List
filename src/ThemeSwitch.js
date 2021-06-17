import React, { useContext } from "react";
import Switch from "react-switch";
import { IoMdSunny, IoMdMoon } from "react-icons/all";
import { ThemeContext } from "./Provider";

const getStyles = (mode) => ({
  switch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 25,
    paddingRight: mode === "dark" ? 10 : 10
  }
});

const ThemeSwitch = () => {
  const { setTheme, mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <Switch
      checked={mode === "light" ? true : false}
      height={20}
      width={40}
      offColor="#1d1f2f"
      onColor="#FDB813"
      checkedIcon={
        <IoMdSunny style={styles.switch} color="white" className="light" />
      }
      uncheckedIcon={
        <IoMdMoon style={styles.switch} color="white" className="dark" />
      }
      onChange={setTheme}
    />
  );
};

export default ThemeSwitch;
