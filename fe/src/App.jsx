import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import SignInPage from "./pages/Login.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
