import { BrowserRouter, Router, Routes } from "react-router";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
