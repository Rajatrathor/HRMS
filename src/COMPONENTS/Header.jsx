import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import bell from "../assets/bell.png";
import hamburger from "../assets/hamburger.png";
import user from "../assets/USER.png";
import { toggleSidebar } from "../REDUX/companySlice";
import { GoSidebarCollapse } from "react-icons/go";
const HEADER = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const LEFT = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
  }
  input {
    width: 20rem;
    padding: 0.5rem 2rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
  }
  input::placeholder {
    text-align: right;
    color: #00000080;
  }

  @media screen and (max-width: 800px) {
    input {
      width: 10rem;
    }
  }
`;
const RIGHT = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    img {
      width: 3rem;
      height: 3rem;
      object-fit: contain;
    }
    div {
      display: flex;
      flex-direction: column;

      h1 {
        font-family: Poppins;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem;
        text-align: center;
      }
      p {
        font-family: Poppins;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 800px) {
  }
`;
const Header = () => {
  const dispatch = useDispatch();
  const { sidebarVisible } = useSelector((state) => state.company);
  return (
    <HEADER>
      <LEFT>
        <div onClick={() => dispatch(toggleSidebar())}>
          {sidebarVisible ? <img src={hamburger} /> : <GoSidebarCollapse />}
        </div>
        <input type="text" placeholder="search" />
      </LEFT>
      <RIGHT>
        <img src={bell} alt="" />
        <div>
          <img src={user} alt="user_ICON" />

          <div>
            <h1>John Doe</h1>
            <p>Admin</p>
          </div>
        </div>
      </RIGHT>
    </HEADER>
  );
};

export default Header;
