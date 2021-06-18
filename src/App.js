import React, { useContext } from 'react';
import './App.css';
import Crudform from "./components/Crudform.js";
import { theme } from "./theme";
import { ThemeContext } from "./Provider";
import ThemeSwitch from "./ThemeSwitch";


const getStyles = (mode) => ({
  app: {
    height: "100%",
    width: "100%",
    padding: 16,
    backgroundColor: theme[mode].backgroundColor
  },
  theme: {
    color: theme[mode].highlight
  }
});

const App = () => {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div style={styles.app}>
     <div className="crud-app">
      <Crudform />
      <ThemeSwitch />
     </div>
    </div>
  );
}

export default App;
