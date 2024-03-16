import { forwardRef, useState } from "react";
import styled from "styled-components";
import Input from "./Input";

const StyledPasswordField = styled.div`
  position: relative;
`;

const IconBtn = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--white-color);
  border: none;
`;

const Icon = styled.svg`
  display: block;

  path {
    transition: fill 0.2s ease-in-out;
  }
`;

const PasswordField = forwardRef(function PasswordField(props, ref) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleToggleVisibility() {
    setIsPasswordVisible((isViewed) => !isViewed);
  }

  return (
    <StyledPasswordField>
      <Input
        type={isPasswordVisible ? "text" : "password"}
        {...props}
        ref={ref}
      />
      <IconBtn
        type="button"
        onClick={handleToggleVisibility}
        aria-label={isPasswordVisible ? "hide password" : "show password"}
      >
        <Icon
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2861 6.3226C14.9713 4.38836 12.4175 1.56653 9 1.56653C5.58248 1.56653 3.02878 4.38836 1.71393 6.3226C1.51739 6.61168 1.51739 6.96488 1.71393 7.25395C3.02878 9.18819 5.58248 12.01 9 12.01C12.4175 12.01 14.9713 9.18819 16.2861 7.25395C16.4827 6.96488 16.4827 6.61168 16.2861 6.3226ZM0.418395 8.13465C-0.139465 7.314 -0.139465 6.26255 0.418395 5.4419C1.76382 3.46268 4.72813 0 9 0C13.2719 0 16.2362 3.46268 17.5816 5.4419C18.1395 6.26255 18.1395 7.314 17.5816 8.13465C16.2362 10.1139 13.2719 13.5766 9 13.5766C4.72813 13.5766 1.76382 10.1139 0.418395 8.13465ZM7.4329 6.78813C7.4329 7.64303 8.13376 8.35465 9.02136 8.35465C9.90895 8.35465 10.6098 7.64303 10.6098 6.78813C10.6098 5.93322 9.90895 5.2216 9.02136 5.2216C8.13376 5.2216 7.4329 5.93322 7.4329 6.78813ZM9.02136 3.65508C10.7638 3.65508 12.1763 5.05774 12.1763 6.78813C12.1763 8.51851 10.7638 9.92118 9.02136 9.92118C7.27892 9.92118 5.86641 8.51851 5.86641 6.78813C5.86641 5.05774 7.27892 3.65508 9.02136 3.65508Z"
            fill={isPasswordVisible ? "#316fea" : "#67717B"}
          />
        </Icon>
      </IconBtn>
    </StyledPasswordField>
  );
});

export default PasswordField;
