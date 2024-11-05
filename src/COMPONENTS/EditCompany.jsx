import styled from "styled-components";
import backarrow from "../assets/companies/backarrow.png";
const WRAPPER = styled.div`
  div > h3 {
    font-family: Noto Sans;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
  }
  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      input {
        padding: 10px;
        border: 1px solid #e4e7eb;
        border-radius: 5px;
        &:focus {
          outline: none;
        }
      }
      label {
        color: #adadbd;
        font-family: Noto Sans;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2rem;
      }
    }
  }
`;

const EditCompany = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <WRAPPER className="offcanvas-body">
        <div className="d-flex justify-content-between align-items-center">
          <img width="20px" height="20px" src={backarrow} />
          <h3>Edit Company</h3>
        </div>
        <div>
          <form>
            <div>
              <div>
                <label htmlFor="name">Company Name</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="name">Company Address</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="name">Billing Address</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div> 
                <label htmlFor="name">Country</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="name">Phone</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="name">Company Email</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="name">Contact Person name</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="name">Currency</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="name">Language</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="name">Time Zone</label>
              </div>
              <div>
                <input />
              </div>
            </div>
            <div className="d-flex gap-1">
              <button
                style={{
                  backgroundColor: "#805EB6",
                  color: "white",
                  border: "none",
                }}
              >
                Update
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#212B36",
                  border: "none",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </WRAPPER>
    </div>
  );
};

export default EditCompany;
