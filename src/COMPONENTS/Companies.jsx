import styled from "styled-components";
import HeaderMain from "./HeaderMain";
import { Outlet } from "react-router-dom";

//STYLING
const COMPANIES = styled.div`
  height: calc(100vh-);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 1rem;
`;

//JSX

const Companies = () => {
  return (
    <COMPANIES>
      <HeaderMain />
      <Outlet />
    </COMPANIES>
  );
};

export default Companies;
