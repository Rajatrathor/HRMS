import { Link } from "react-router-dom";
import styled from "styled-components";
import pdf from "../assets/companies/pdf.png";
import filter from "../assets/companies/vector.png";
import { GiHamburgerMenu } from "react-icons/gi";
const UPPER = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: Noto Sans;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: #000000;
  }
`;
const UPPERRIGHT = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const BUTTON = styled(Link)`
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  background-color: #f2f2f2;
  border: none;
  cursor: pointer;
  background-color: #805eb6;
  color: white;
  text-decoration: none;
`;

const DROPDOWN = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const HeaderMain = () => {
  return (
    <UPPER>
      <h1>Companies Details</h1>
      <UPPERRIGHT>
        <BUTTON
          style={{ textDecoration: "none", color: "white" }}
          to="addcompany"
        > 
          + Add New Company
        </BUTTON>

        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid #DDDDEB",
          }}
          className="d-flex justify-content-between align-items-center gap-2 p-2"
        >
          <img src={pdf} alt="" />
          Export to PDF
        </button>
        <BUTTON className="d-flex align-items-center gap-3">
          <img src={filter} alt="" />
          Filter
        </BUTTON>
      </UPPERRIGHT>
      <DROPDOWN className="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <GiHamburgerMenu />
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              <BUTTON
                style={{ textDecoration: "none", color: "white" }}
                to="addcompany"
              >
                + Add New Company
              </BUTTON>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #DDDDEB",
                }}
                className="d-flex justify-content-between align-items-center gap-2 p-2"
              >
                <img src={pdf} alt="" />
                Export to PDF
              </button>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <BUTTON className="d-flex align-items-center gap-3">
                <img src={filter} alt="" />
                Filter
              </BUTTON>
            </a>
          </li>
        </ul>
      </DROPDOWN>
    </UPPER>
  );
};

export default HeaderMain;
