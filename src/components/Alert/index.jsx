import "./Alert.scss";
const Alert = ({ setShowAlert }) => {
  return (
    <div className="AlertContainer">
      <div className="Alert">
        <strong>Credenciales invalidad</strong>
        <button
          className="btn btn-danger"
          onClick={() => {
            setShowAlert(false);
          }}
        >
          Okey
        </button>
      </div>
    </div>
  );
};
export default Alert;
