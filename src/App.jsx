import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CreateNewPassword from "./pages/CreateNewPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Title from "./ui/Title";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
            <Route
              path={ROUTES.createNewPassword}
              element={<CreateNewPassword />}
            />
            <Route path="*" element={<Title>Page Not Found</Title>} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "0.5rem" }}
        toastOptions={{
          success: 3000,
          error: 5000,
          style: {
            fontSize: "1rem",
            maxWidth: "400px",
            padding: "0.7rem 1rem",
            border: "1px solid var(--grey-color)",
            borderRadius: "var(--md-border-radius)",
          },
        }}
      />
    </>
  );
}

export default App;
