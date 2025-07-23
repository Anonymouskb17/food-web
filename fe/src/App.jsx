import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import SignInPage from "./pages/signin.jsx";
import Signup from "./components/signup.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
