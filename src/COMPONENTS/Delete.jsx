import bin from "../assets/companies/binModal.png";
const Delete = () => {
  return (
    <> 
      <div
        className="modal fade"
        id="deleteModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center gap-3">
              <div>
                <img src={bin} alt="" />
              </div>
              <div>
                <h1>Confirmation</h1>
              </div>
              <div>Are you sure. You Want to delete this Company?Cancel</div>
              <div className="d-flex gap-1">
                <button
                  style={{
                    backgroundColor: "#F84304",
                    color: "white",
                    outline: "none",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
