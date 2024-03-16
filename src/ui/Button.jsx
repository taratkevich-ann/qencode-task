import styled, { css } from "styled-components";

const variations = {
  primary: css`
    color: var(--white-color);
    background-color: var(--blue-color);
    border: none;
    margin-bottom: 1.3rem;

    &:last-child {
      margin-bottom: 0;
    }
  `,
  secondary: css`
    background-color: transparent;
    border: 1px solid var(--grey-color);
  `,
  hasIcon: css`
    font-size: 0.875rem;
    background-color: transparent;
    border: 1px solid var(--grey-color);
    border-radius: var(--sm-border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  `,
};

const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  min-height: 3rem;
  border-radius: var(--md-border-radius);

  ${(props) => variations[props.variation]}

  &:disabled {
    cursor: "not-allowed";
    opacity: 0.5;
  }
`;

Button.defaultProps = { variation: "primary" };

export default Button;
