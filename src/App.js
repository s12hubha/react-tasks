import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUpPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
