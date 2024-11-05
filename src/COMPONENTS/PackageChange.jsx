import styled from "styled-components";
import cross from "../assets/companies/cross.png";

const WRAPPER = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  form > div > div > select {
    width: 100%;
  }
`;

const PackageChange = () => {
  return (
    <div
      className="modal fade"
      id="packageChangeModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <WRAPPER className="modal-body d-flex flex-column gap-3 p-4 align-items-center">
            <div className="d-flex justify-content-between gap-3 align-items-center">
              <h1>Change</h1>
              <img width="20px" height="20px" src={cross} alt="" />
            </div>

            <form className="d-flex flex-column gap-2">
              <div>
                <div>
                  <label htmlFor="">Package</label>
                </div>
                <div>
                  <select name="" id="">
                    <option value="">Package Select</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Package Type</label>
                </div>
                <div>
                  <select name="" id="">
                    <option value="">Package Type select</option>
                    <option value="">Yearly</option>
                    <option value="">Yearly</option>
                  </select>
                </div>
              </div>
            </form>

            <div>
              <button
                style={{
                  backgroundColor: "#805EB6",
                  color: "white",
                  outline: "none",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Update
              </button>
              <button
                data-bs-dismiss="modal"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "black",
                  outline: "none",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </WRAPPER>
        </div>
      </div>
    </div>
  );
};

export default PackageChange;
