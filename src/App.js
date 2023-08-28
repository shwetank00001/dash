import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
// cssbaseline resets the css
// themeprovider gives the ability to pass the theem to mui


function App() {
  const [ theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <div className="App">
            <main className="content">

            </main>
        </div>
      </ThemeProvider>

    </ColorModeContext.Provider>

  );
}

export default App;
