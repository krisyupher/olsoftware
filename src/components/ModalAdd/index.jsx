import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ModalAdd.scss";
const ModalAdd = ({
  addUserInArray,
  editUserInArray,
  setShowModalAdd,
  editUser,
  setEditUSer,
  state,
}) => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    id: "",
    rol: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    if (editUser) {
      setUserData(editUser);
    }
  }, [editUser]);
  return (
    <div className="ModalAddContainer">
      <div className="Wrapper">
        <FontAwesomeIcon
          icon={faTimes}
          className="closeIcon"
          onClick={() => {
            setShowModalAdd(false);
            setUserData({
              name: "",
              lastname: "",
              id: "",
              rol: "",
              phone: "",
              email: "",
            });
            setEditUSer({});
          }}
        />
        <div className="titleWraper">
          <FontAwesomeIcon icon={faUserPlus} />
          <h5>Agregar usuario</h5>
        </div>
        <div className="fieldContainer">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
        </div>
        <div className="fieldContainer">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            value={userData.lastname}
            onChange={(e) => {
              setUserData({ ...userData, lastname: e.target.value });
            }}
          />
        </div>
        <div className="fieldContainer">
          <label htmlFor="">Identificacion</label>
          <input
            type="text"
            disabled={state === "Agregar" ? false : true}
            value={userData.id}
            onChange={(e) => {
              setUserData({ ...userData, id: e.target.value });
            }}
          />
        </div>
        <div className="fieldContainer">
          <label htmlFor="">Cargo</label>
          <input
            type="text"
            value={userData.rol}
            onChange={(e) => {
              setUserData({ ...userData, rol: e.target.value });
            }}
          />
        </div>
        <div className="fieldContainer">
          <label htmlFor="">Telefono</label>
          <input
            type="text"
            value={userData.phone}
            onChange={(e) => {
              setUserData({ ...userData, phone: e.target.value });
            }}
          />
        </div>
        <div className="fieldContainer">
          <label htmlFor="">Correo</label>
          <input
            type="text"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </div>
        <button
          onClick={() => {
            setShowModalAdd(false);
            setEditUSer({});
            if (state === "Agregar") {
              addUserInArray(userData);
            } else {
              editUserInArray(userData);
            }
          }}
          className="btn btn-success"
        >
          {state}
        </button>
        {state === "Agregar" && (
          <button
            onClick={() => {
              setUserData({
                name: "",
                lastname: "",
                id: "",
                rol: "",
                phone: "",
                email: "",
              });
            }}
            className="btn btn-info mt-1"
          >
            Limpiar campos
          </button>
        )}
      </div>
    </div>
  );
};
export default ModalAdd;
