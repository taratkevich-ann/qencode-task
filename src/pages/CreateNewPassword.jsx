import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
import { PAGE_TITLES } from "../constants/titles";
import Logo from "../ui/Logo";
import Title from "../ui/Title";
import CreateNewPasswordForm from "../components/CreateNewPasswordForm";

function CreateNewPassword() {
  const navigate = useNavigate();
  const [isDataSending, setIsDataSending] = useState(false);

  useEffect(() => {
    document.title = PAGE_TITLES.createNewPassword;

    return () => (document.title = PAGE_TITLES.default);
  }, []);

  function handleFormSubmit({ password, confirmedPassword }) {
    setIsDataSending(true);

    axiosInstance
      .post("/password-set", {
        token: Cookies.get("access-token"),
        secret: Cookies.get("refresh-token"),
        password,
        password_confirm: confirmedPassword,
      })
      .then(() => {
        toast.success("The password is successfully created");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response.data.detail);
      })
      .finally(() => setIsDataSending(false));
  }

  return (
    <>
      <Logo />
      <Title>Create new Password?</Title>
      <CreateNewPasswordForm
        onSubmit={handleFormSubmit}
        isLoading={isDataSending}
      />
    </>
  );
}

export default CreateNewPassword;
