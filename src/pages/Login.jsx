import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { axiosInstance } from "../api/axiosInstance";
import { ROUTES } from "../constants/routes";
import { PAGE_TITLES } from "../constants/titles";
import Logo from "../ui/Logo";
import Title from "../ui/Title";
import LoginForm from "../components/LoginForm";
import Button from "../ui/Button";

const StyledText = styled.p`
  font-size: 0.875rem;
  line-height: 1.42;
  text-align: center;
  margin-top: 1.3rem;
`;

const Separator = styled.div`
  position: relative;
  color: var(--light-grey-color);
  text-transform: uppercase;
  font-size: 500px;
  font-size: 0.75rem;
  text-align: center;
  line-height: 1;
  margin: 2rem 0;

  &::after {
    content: "";
    height: 1px;
    background-color: var(--light-grey-color);
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: -1;
  }

  span {
    padding: 0 0.5rem;
    background-color: var(--white-color);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 361px) {
    flex-direction: column;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [isDataSending, setIsDataSending] = useState(false);

  useEffect(() => {
    document.title = PAGE_TITLES.login;

    return () => (document.title = PAGE_TITLES.default);
  }, []);

  function handleFormSubmit({ email, password }) {
    setIsDataSending(true);

    axiosInstance
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        Cookies.set("access-token", response.data.access_token, {
          expires: response.data.token_expire,
        });
        Cookies.set("refresh-token", response.data.refresh_token, {
          expires: response.data.refresh_token_expire,
        });

        navigate(ROUTES.home);
      })
      .catch((err) => {
        toast.error(err.response.data.detail);
      })
      .finally(() => setIsDataSending(false));
  }

  return (
    <>
      <Logo />
      <Title>Log in to your account</Title>
      <ButtonsWrapper>
        <Button variation="hasIcon">
          <img src="/google-icon.svg" alt="google icon" />
          Google
        </Button>
        <Button variation="hasIcon">
          <img src="/github-icon.svg" alt="github icon" />
          Github
        </Button>
      </ButtonsWrapper>
      <Separator>
        <span>or</span>
      </Separator>
      <LoginForm onSubmit={handleFormSubmit} isLoading={isDataSending} />
      <StyledText>
        Is your company new to Qencode? <Link to={ROUTES.signUp}> Sign up</Link>
      </StyledText>
    </>
  );
}

export default Login;
