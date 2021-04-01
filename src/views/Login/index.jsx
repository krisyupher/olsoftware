import { useState } from "react";
import admins from "../../assets/users.json";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faUnlock } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
const Login = () => {
  const [form, setForm] = useState({
    user: "",
    password: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [typePassword, setTypePassword] = useState("password");
  const dispatch = useDispatch();
  const validate = (event) => {
    event.preventDefault();
    if (
      admins.find(
        (element) =>
          element.name === form.user && element.pass === form.password
      )
    ) {
      dispatch({
        type: "SET_VALIDATE",
        payload: true,
      });
      dispatch({
        type: "SET_USER_ACTIVE",
        payload: admins.find(
          (element) =>
            element.name === form.user && element.pass === form.password
        ),
      });
    } else {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setShowAlert(true);
      }, 1500);
    }
  };
  return (
    <div className="LoginContainer">
      <div className="wrapper">
        <div className="title">
          <h2>Aplicación OLSoftwate</h2>
          <p>Prueba práctica Front-end senior</p>
        </div>
        <form
          onSubmit={(event) => {
            validate(event);
          }}
        >
          <h3>inicio de sesión</h3>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="Usuario"
              onChange={(e) => {
                setForm({ ...form, user: e.target.value });
              }}
            />
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <div className="inputWrapper">
            <input
              type={typePassword}
              placeholder="Contraseña"
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
            <FontAwesomeIcon
              icon={faUnlock}
              onClick={() => {
                if (typePassword === "password") {
                  setTypePassword("text");
                } else {
                  setTypePassword("password");
                }
              }}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
      <small>OLSotware - 2021</small>
      {showLoading ? <Loading></Loading> : null}
      {showAlert ? <Alert setShowAlert={setShowAlert}></Alert> : null}
    </div>
  );
};
export default Login;
