import ModalAdd from "../ModalAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Table.scss";
const Table = ({ list, setList, addUserInArray, editUserInArray }) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [editUser, setEditUSer] = useState({});
  const [stateModal, setStateModal] = useState("Agregar");

  return (
    <div className="TableContainer">
      <div className="titleWraper">
        <div className="title">
          <FontAwesomeIcon icon={faUsers} />
          <h3>Usuarios existentes</h3>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setStateModal("Agregar");
            setShowModalAdd(true);
          }}
        >
          Agregar
        </button>
      </div>
      <table
        className="table table-striped table-bordered table-sm"
        width="100%"
      >
        <thead>
          <tr>
            <th className="th-sm">Nombre</th>
            <th className="th-sm">Apellidos</th>
            <th className="th-sm">Identificación</th>
            <th className="th-sm">Rol asociado</th>
            <th className="th-sm">Estado</th>
            <th className="th-sm">Telefono</th>
            <th className="th-sm">Correo electrónico</th>
            <th className="th-sm">Acción</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.id}</td>
                <td>{item.rol}</td>
                <td>{item.state ? "Activo" : "Inactivo"}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faPen}
                    onClick={(e) => {
                      const newArray = list.find((el) => {
                        return el.id === item.id;
                      });
                      setEditUSer(newArray);
                      setShowModalAdd(true);
                      setStateModal("Editar");
                    }}
                    className="editIcon"
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={(e) => {
                      const newArray = list.filter((el) => {
                        return el.id !== item.id;
                      });
                      setList(newArray);
                    }}
                    className="deleteIcon"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="./" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          <li className="page-item">
            <a className="page-link" href="./">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="./">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="./">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="./" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          {() => {
            return <h1>asdasd</h1>;
          }}
        </ul>
      </nav> */}
      {showModalAdd && (
        <ModalAdd
          addUserInArray={addUserInArray}
          editUserInArray={editUserInArray}
          setShowModalAdd={setShowModalAdd}
          editUser={editUser}
          setEditUSer={setEditUSer}
          state={stateModal}
        />
      )}
    </div>
  );
};
export default Table;
