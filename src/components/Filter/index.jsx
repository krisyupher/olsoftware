import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Filter.scss";
const Filter = ({ listUsers, setShowListUser, cleanFilter }) => {
  const [filterData, setfilterData] = useState({
    name: "",
    lastname: "",
    id: "",
    rol: "",
    phone: "",
    email: "",
  });
  return (
    <div className="FilteContainer">
      <div className="titleWraper">
        <FontAwesomeIcon icon={faUserPlus} />
        <h5>Filtrar búsqueda</h5>
      </div>
      <div className="fieldContainer">
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          value={filterData.name}
          onChange={(e) => {
            setfilterData({ ...filterData, name: e.target.value });
          }}
        />
      </div>
      <div className="fieldContainer">
        <label htmlFor="">Apellido</label>
        <input
          type="text"
          value={filterData.lastname}
          onChange={(e) => {
            setfilterData({ ...filterData, lastname: e.target.value });
          }}
        />
      </div>
      <div className="fieldContainer">
        <label htmlFor="">Identificacion</label>
        <input
          type="text"
          value={filterData.id}
          onChange={(e) => {
            setfilterData({ ...filterData, id: e.target.value });
          }}
        />
      </div>
      <div className="fieldContainer">
        <label htmlFor="">Cargo</label>
        <input
          type="text"
          value={filterData.rol}
          onChange={(e) => {
            setfilterData({ ...filterData, rol: e.target.value });
          }}
        />
      </div>
      <div className="fieldContainer">
        <label htmlFor="">Telefono</label>
        <input
          type="text"
          value={filterData.phone}
          onChange={(e) => {
            setfilterData({ ...filterData, phone: e.target.value });
          }}
        />
      </div>
      <div className="fieldContainer">
        <label htmlFor="">Correo</label>
        <input
          type="text"
          value={filterData.email}
          onChange={(e) => {
            setfilterData({ ...filterData, email: e.target.value });
          }}
        />
      </div>
      <button
        onClick={() => {
          const result = listUsers.filter(
            (item) =>
              item.name.toLowerCase() === filterData.name.toLowerCase() ||
              item.lastname.toLowerCase() === filterData.lastname.toLowerCase() ||
              item.id === filterData.id ||
              item.rol === filterData.rol ||
              item.phone === filterData.phone ||
              item.email === filterData.email
          );
          
          setShowListUser(result);
        }}
        className="btn btn-success"
      >
        Filtrar
      </button>
      <button
        onClick={() => {
          cleanFilter();
          setfilterData({
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
        Limpiar filtro
      </button>
    </div>
  );
};
export default Filter;
