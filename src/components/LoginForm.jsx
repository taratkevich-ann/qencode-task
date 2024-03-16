import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../constants/routes";
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from "../constants/validation";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import PasswordField from "../ui/PasswordIField";

const StyledLink = styled(Link)`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.42;
  text-align: right;
  margin-top: -0.6rem;
  margin-bottom: 1.8rem;
`;

function LoginForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow error={errors?.email?.message}>
        <Input
          type="email"
          placeholder="Work email"
          {...register("email", {
            required: {
              value: true,
              message: EMAIL_VALIDATION.requiredError,
            },
            pattern: {
              value: EMAIL_VALIDATION.pattern,
              message: EMAIL_VALIDATION.invalidError,
            },
            minLength: {
              value: EMAIL_VALIDATION.minLength,
              message: EMAIL_VALIDATION.minLenghtError,
            },
          })}
        />
      </FormRow>

      {dirtyFields.email && (
        <>
          <FormRow error={errors?.password?.message}>
            <PasswordField
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: PASSWORD_VALIDATION.requiredError,
                },
                minLength: {
                  value: PASSWORD_VALIDATION.minLength,
                  message: PASSWORD_VALIDATION.invalidError,
                },
              })}
            />
          </FormRow>

          <StyledLink to={ROUTES.forgotPassword}>
            Forgot your password?
          </StyledLink>
        </>
      )}
      <Button disabled={isLoading}>Log in to Qencode</Button>
    </form>
  );
}

export default LoginForm;
