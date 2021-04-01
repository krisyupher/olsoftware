import profile from "../../assets/profile.png";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const dispatch = useDispatch();
  const userActive = useSelector((state) => state.userActive);

  return (
    <div className="HeaderContainer">
      <h2>Prueba Front-end</h2>
      <div className="wrapperProfile">
        <img src={profile} alt={profile} />
        <strong>{userActive.name && userActive.name}</strong>
        <button
          onClick={() => {
            dispatch({
              type: "SET_VALIDATE",
              payload: false,
            });
          }}
        >
          <FontAwesomeIcon icon={faSignInAlt} />
        </button>
      </div>
    </div>
  );
};

export default Header;
