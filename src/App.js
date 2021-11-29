import { Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import Index from "./pages/Index";
import AdminIndex from "./pages/admin/Index";

const theme = {
  primary: "red",
};

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="admin" element={<AdminIndex />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
