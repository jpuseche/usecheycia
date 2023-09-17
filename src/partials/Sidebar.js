import React from "react";
import { slide as Menu } from "react-burger-menu";

function Sidebar(props) {
  return (
    <Menu className="text-2xl" right {...props} width={450}>
      <a className="menu-item" href="/">
        Inicio
      </a>

      <a className="menu-item" href="/services">
        Servicios
      </a>

      <a className="menu-item" href="/products">
        Productos
      </a>

      <a className="menu-item" href="https://www.instagram.com/usecheycompania/?igshid=NmE0MzVhZDY%3D">
        Contactenos
      </a>
    </Menu>
  );
};

export default Sidebar