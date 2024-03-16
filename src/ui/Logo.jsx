import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  max-width: 178px;
  margin: 0 auto 4.5rem;

  a {
    display: block;
  }

  @media screen and (max-width: 471px) {
    margin: 0 auto 2rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <Img src="/logo.svg" width={178} height={32} alt="logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
