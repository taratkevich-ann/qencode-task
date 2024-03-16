export const EMAIL_VALIDATION = {
  pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  minLength: 15,
  minLenghtError: "The email field should be at least 15 characters long.",
  invalidError: "Email is not valid",
  requiredError: "Email is required",
};

export const PASSWORD_VALIDATION = {
  minLength: 8,
  invalidError: "The password field should be at least 8 characters long.",
  requiredError: "Password is required",
  confirmationPasswordError: "Password mismatch",
};
