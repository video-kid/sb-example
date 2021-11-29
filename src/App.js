import { Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import Index from "./pages/Index";
import AdminIndex from "./pages/admin/Index";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="admin" element={<AdminIndex />} />
      </Routes>
    </div>
  );
};

export default App;
