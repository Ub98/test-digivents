import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const centerContent = (
    <Button
      label="Aggiungi dolce"
      className="mr-2"
      onClick={() => {
        navigate("/aggiungi");
      }}
    />
  );

  return (
      <Toolbar center={centerContent} />
  );
};

export default Navbar;
