import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0 12px;
  min-height: 3rem;
  border: 1px solid var(--grey-color);
  border-radius: var(--sm-border-radius);
  outline: none;

  &::placeholder {
    opacity: 1;
    color: var(--light-grey-color);
  }
`;

export default Input;
