import styled from "styled-components";
import arrow from "../assets/companies/arrow.png";
import action from "../assets/companies/action.png";
import packageEdit from "../assets/companies/package.png";
import edit from "../assets/companies/edit.png";
import bin from "../assets/companies/bin.png";
import EditCompany from "./EditCompany";
import Delete from "./Delete";
import PackageChange from "./PackageChange";

const LOWER = styled.div`
   
  table {
    th {
      background-color: #21209226;
      white-space: nowrap;
    }
    td {
      color: #8f8f8f;
      font-family: Noto Sans;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.1rem;
      padding: 0.8rem 0.5rem;
    }
  }
`;

const CompanyTable = () => {
  return (
    <LOWER className="mt-1">
      <div className="table-responsive">
        <table className="table table-responsive table-bordered table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Company Name</th>
              <th>Login</th>
              <th>Package</th>
              <th>
                Create On <img src={arrow} />
              </th>
              <th>
                Status <img src={arrow} />
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>833233</td>
              <td>Scriza</td>
              <td>0</td>
              <td>
                Basic Monthly
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#packageChangeModal"
                >
                  <img src={packageEdit} />
                </button>
              </td>
              <td>16-08-2024</td>
              <td>
                <button
                  style={{
                    backgroundColor: "pink",
                    borderRadius: "1rem",
                    padding: ".4rem .7rem",
                    color: "#C90303",
                    border: "none",
                  }}
                >
                  Deactivate
                </button>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={action} />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item d-flex gap-3"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"
                      >
                        <span>Edit</span>
                        <img src={edit} />
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn dropdown-item d-flex gap-3"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      >
                        <span>Delete</span> <img src={bin} />
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>833233</td>
              <td>Scriza</td>
              <td>0</td>
              <td>
                Basic Monthly
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#packageChangeModal"
                >
                  <img src={packageEdit} />
                </button>
              </td>
              <td>16-08-2024</td>
              <td>
                <button
                  style={{
                    backgroundColor: "pink",
                    borderRadius: "1rem",
                    padding: ".4rem .7rem",
                    color: "#C90303",
                    border: "none",
                  }}
                >
                  Deactivate
                </button>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={action} />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item d-flex gap-3"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"
                      >
                        <span>Edit</span>
                        <img src={edit} />
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn dropdown-item d-flex gap-3"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      >
                        <span>Delete</span> <img src={bin} />
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <EditCompany />
      <Delete />
      <PackageChange />
    </LOWER>
  );
};

export default CompanyTable;
