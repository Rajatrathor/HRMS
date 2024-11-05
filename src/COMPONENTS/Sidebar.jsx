import styled from "styled-components";
import logo from "../assets/logo.png";
import admin from "../assets/admin.png";
import contact from "../assets/contact.png";
import dashboard from "../assets/dashboard.png";
import invoice from "../assets/invoice.png";
import settings from "../assets/settings.png";
import subscription from "../assets/subscription.png";
import companies from "../assets/companies.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logoshort from "../assets/companies/logoshort.png";

const StyledSidebar = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    #925fe2 80.26%,
    rgba(146, 95, 226, 0) 143.39%,
    #e2d4f7 143.39%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

const UL = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2.5rem;
`;
const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const NAVLINK = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #f1ebde;
  text-decoration: none;

  &:hover,
  &:active &.active:link,
  &.active:visited {
    color: white;
    ${Img} {
      filter: brightness(0) invert(1); 
    }
  }
`;

const P = styled.p`
  font-family: Noto Sans;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;



const LogoImg = styled.img`
  width: auto;
  height: auto;

  @media screen and (min-width: 768px) {
    content: url(${logo});
  }

  @media screen and (max-width: 768px) {
    content: url(${logoshort});
  }
`;

const Sidebar = () => {
  const { sidebarVisible } = useSelector((state) => state.company);

  return (
    <StyledSidebar>
      <div>{sidebarVisible ? <LogoImg /> : <img src={logoshort} />}</div>

      <UL>
        <NAVLINK to="dashboard">
          <Img src={dashboard} alt="dashboard" />
          {sidebarVisible && <P>Dashboard</P>}
        </NAVLINK>
        <NAVLINK to="companies">
          <Img src={companies} alt="companies" />
          {sidebarVisible && <P>Companies</P>}
        </NAVLINK>
        <NAVLINK to="contact">
          <Img src={contact} alt="contact" />
          {sidebarVisible && <P>Contact Requests</P>}
        </NAVLINK>
        <NAVLINK to="subscription">
          <Img src={subscription} alt="Subscription" />
          {sidebarVisible && <P>Subscription Plans</P>}
        </NAVLINK>
        <NAVLINK to="invoice">
          <Img src={invoice} alt="invoice" />
          {sidebarVisible && <P>Invoices</P>}
        </NAVLINK>
        <NAVLINK to="admin">
          <Img src={admin} alt="admin" />
          {sidebarVisible && <P>Super Admin</P>}
        </NAVLINK>
        <NAVLINK to="settings">
          <Img src={settings} alt="settings" />
          {sidebarVisible && <P>Settings</P>}
        </NAVLINK>
      </UL>
    </StyledSidebar>
  );
};

export default Sidebar;
