import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import Index from "./pages/Index";
import AdminIndex from "./pages/admin/Index";
import { mainTheme, adminTheme } from "./theme/themes";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <ThemeProvider theme={mainTheme}>
              <Index />
            </ThemeProvider>
          }
        />
        <Route
          path="admin"
          element={
            <ThemeProvider theme={adminTheme}>
              <AdminIndex />
            </ThemeProvider>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
