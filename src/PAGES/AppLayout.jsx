import { Outlet } from "react-router-dom";
import Header from "../COMPONENTS/Header";
import Sidebar from "../COMPONENTS/Sidebar";
import styled from "styled-components";
import { useSelector } from "react-redux";
const StyledAppLayout = styled.div`
  min-height: 100vh;
  margin: auto;
`;
const Right = styled.div`
  background-color: #f4f4f4;
`;
const AppLayout = () => {
  const { sidebarVisible } = useSelector((state) => state.company);
  return (
    <StyledAppLayout className="container-fluid">
      <div className="row">
        <div className={sidebarVisible ? "col-2" : "col-1"}>
          <Sidebar />
        </div>
        <Right className={sidebarVisible ? "col-10" : "col-11   "}>
          <Header />
          <main>
            <Outlet />
          </main>
        </Right>
      </div>
    </StyledAppLayout>
  );
};

export default AppLayout;
