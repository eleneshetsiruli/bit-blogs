import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { LayOut } from "./layOut";
import { HomeLayout } from "./pages/home";
import { SignIn } from "./pages/signIn/SignIn";
import { SignUp } from "./pages/signUp";
import { IndividualAuthor } from "./pages/individualAuthor";
import { useAuthContext } from "./hooks/useContext";
import { lazy, Suspense, useEffect } from "react";
import { supabase } from "./supabase";
import { AuthGuard } from "./route-guards/auth";
import { CreateBlogs } from "./pages/createBlogs";
import { ToastContainerWrapper } from "./toast";
import { LoadingPage } from "./pages/loadingPage";

const LazyAboutView = lazy(() => import("./pages/about/index"));
const LazyProfileView = lazy(() => import("./pages/profile/index"));
const LazyProfileInfo = lazy(() => import("./pages/profile-info/index"));

function App() {
  const { handleSetUser } = useAuthContext();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSetUser(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      handleSetUser(session);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/:lang" element={<LayOut />}>
          <Route path="home" element={<HomeLayout />} />

          <Route
            path="about"
            element={
              <Suspense fallback={<LoadingPage />}>
                <LazyAboutView />
              </Suspense>
            }
          />

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
          <Route
            path="profile-info"
            element={
              <Suspense fallback={<LoadingPage />}>
                <LazyProfileInfo />
              </Suspense>
            }
          />

          <Route path="createBlogs" element={<CreateBlogs />} />

          <Route
            path="profile"
            element={
              <Suspense fallback={<LoadingPage />}>
                <LazyProfileView />
              </Suspense>
            }
          />
          <Route path="ind-author" element={<IndividualAuthor />} />
        </Route>
        <Route path="/" element={<Navigate to="/en/home" />} />
      </Routes>
      <ToastContainerWrapper />
    </>
  );
}

export default App;
