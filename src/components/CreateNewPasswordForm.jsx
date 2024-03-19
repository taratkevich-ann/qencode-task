import { useForm } from "react-hook-form";
import { PASSWORD_VALIDATION } from "../constants/validation";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import PasswordField from "../ui/PasswordIField";

function CreateNewPasswordForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ defaultValues: { password: "", confirmedPassword: "" } });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Password" error={errors?.password?.message}>
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
      <FormRow
        label="Confirm password"
        error={errors?.confirmedPassword?.message}
      >
        <PasswordField
          placeholder="Password"
          {...register("confirmedPassword", {
            required: {
              value: true,
              message: PASSWORD_VALIDATION.requiredError,
            },
            validate: (val) =>
              val === getValues("password") ||
              PASSWORD_VALIDATION.confirmationPasswordError,
          })}
        />
      </FormRow>
      <Button disabled={isLoading}>Reset password</Button>
    </form>
  );
}

export default CreateNewPasswordForm;
