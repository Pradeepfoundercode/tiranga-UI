import React from "react";
import { Routes, Route } from "react-router-dom";
import WingoPage from "./pages/wingo/WingoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WingoPage />} />
      </Routes>
    </div>
  );
}

export default App;

