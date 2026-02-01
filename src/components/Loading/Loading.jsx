import "./Loading.css";

const Loading = ({ hide }) => {
  return (
    <div className={`loader ${hide ? "hide" : ""}`}>
      <span className="spinner"></span>
      <p>Cargando portafolio...</p>
    </div>
  );
};

export default Loading;
