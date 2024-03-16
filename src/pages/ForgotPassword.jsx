import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
import { PAGE_TITLES } from "../constants/titles";
import Logo from "../ui/Logo";
import Title from "../ui/Title";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

function ForgotPassword() {
  const navigate = useNavigate();
  const [isDataSending, setIsDataSending] = useState(false);

  useEffect(() => {
    document.title = PAGE_TITLES.forgotPassword;

    return () => (document.title = PAGE_TITLES.default);
  }, []);

  function handleFormSubmit({ email }) {
    setIsDataSending(true);

    axiosInstance
      .post("/password-reset", {
        email,
        redirect_url:
          "https://65f5dd16cdbd16e6c553264c--lucent-pixie-5851c1.netlify.app/create-new-password",
      })
      .then(() => {
        toast.success(
          "Please check your email to complete the password reset process."
        );
      })
      .catch((err) => {
        toast.error(err.response.data.detail);
      })
      .finally(() => setIsDataSending(false));
  }

  function handleCancel() {
    navigate(-1);
  }

  return (
    <>
      <Logo />
      <Title>Forgot Password?</Title>
      <ForgotPasswordForm
        onSubmit={handleFormSubmit}
        onCancel={handleCancel}
        isLoading={isDataSending}
      />
    </>
  );
}

export default ForgotPassword;
