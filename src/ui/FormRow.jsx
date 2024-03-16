import styled from "styled-components";

const StyledFormRow = styled.div`
  margin-bottom: 1.6rem;
`;

const Label = styled.label`
  font-size: 0.93rem;
  font-weight: 500;
  display: block;
  margin-bottom: 0.3rem;
`;

const Error = styled.p`
  color: var(--red-color);
  font-size: 0.8rem;
  margin-top: 7px;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children?.prop?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
