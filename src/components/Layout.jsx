import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  padding: 1.5rem;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

function Layout() {
  return (
    <StyledLayout>
      <Container>
        <Outlet />
      </Container>
    </StyledLayout>
  );
}

export default Layout;
