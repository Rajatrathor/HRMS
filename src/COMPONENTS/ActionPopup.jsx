import edit from "../assets/companies/edit.png";
import bin from "../assets/companies/bin.png";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 240px;
  right: 150px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    p {
      margin: 0;
    }
  }
`;

const ActionPopup = () => {
  return (
    <Overlay>
      <div>
        <p>Edit</p>
        <img src={edit} />
      </div>
      <div>
        <p>Delete</p>
        <img src={bin} />
      </div>
    </Overlay>
  );
};

export default ActionPopup;
