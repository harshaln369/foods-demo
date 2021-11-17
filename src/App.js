import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
