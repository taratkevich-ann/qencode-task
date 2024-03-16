import { useForm } from "react-hook-form";
import { EMAIL_VALIDATION } from "../constants/validation";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

function ForgotPasswordForm({ onSubmit, onCancel, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "" } });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow error={errors?.email?.message}>
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: {
              value: true,
              message: EMAIL_VALIDATION.requiredError,
            },
            pattern: {
              value: EMAIL_VALIDATION.pattern,
              message: EMAIL_VALIDATION.requiredError,
            },
            minLength: {
              value: EMAIL_VALIDATION.minLength,
              message: EMAIL_VALIDATION.minLenghtError,
            },
          })}
        />
      </FormRow>

      <Button disabled={isLoading}>Send</Button>
      <Button
        type="button"
        variation="secondary"
        disabled={isLoading}
        onClick={onCancel}
      >
        Cancel
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
