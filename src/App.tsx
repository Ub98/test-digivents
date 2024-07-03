import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "./assets/themes/mytheme/theme.scss";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";

export default function App() {
  return (
    <PrimeReactProvider>
      <Navbar/>
      <Outlet></Outlet>
    </PrimeReactProvider>
  );
}
