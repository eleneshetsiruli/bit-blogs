import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import { LayOut } from "./layOut";
import { HomeLayout } from "./pages/home";
import { SignIn } from "./pages/signIn/SignIn";
import { SignUp } from "./pages/signUp";

function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<LayOut />}>
        <Route path="home" element={<HomeLayout />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Navigate to="/en/home" />} />
    </Routes>
  );
}

export default App;
