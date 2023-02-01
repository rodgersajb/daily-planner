

import "./setUp.scss";
import "./Components/Fontawesome";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Nav from "./Components/Nav";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Home" element={<Nav />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
