import { Outlet } from "react-router-dom";
import "./Aggiungi.scss";

const Aggiungi = () => {
  return (
    <div className="contain-aggiungi">
      <Outlet></Outlet>
    </div>
  );
};

export default Aggiungi;
