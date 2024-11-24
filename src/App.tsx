import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { LayOut } from "./layOut";
import { HomeLayout } from "./pages/home";
import { SignIn } from "./pages/signIn/SignIn";
import { SignUp } from "./pages/signUp";
import { About } from "./pages/about/inedex";
import { IndividualAuthor } from "./pages/individualAuthor";
import { useAuthContext } from "./hooks/useContext";
import { useEffect } from "react";
import { supabase } from "./supabase";
import { AuthGuard } from "./route-guards/auth";
import { Profile } from "./pages/profile";
import { ProfileInfo } from "./pages/profile-info";

function App() {
  const { handleSetUser } = useAuthContext();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSetUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSetUser(session);
    });
  }, []);

  return (
    <Routes>
      <Route path="/:lang" element={<LayOut />}>
        <Route path="home" element={<HomeLayout />} />
        <Route path="about" element={<About />} />

        <Route
          path="sign-in"
          element={
            <AuthGuard>
              <SignIn />
            </AuthGuard>
          }
        />
        <Route
          path="sign-up"
          element={
            <AuthGuard>
              <SignUp />
            </AuthGuard>
          }
        />

        <Route path="profile-info" element={<ProfileInfo />} />
        <Route path="profile" element={<Profile />} />
        <Route path="ind-author" element={<IndividualAuthor />} />
      </Route>
      <Route path="/" element={<Navigate to="/en/home" />} />
    </Routes>
  );
}

export default App;
