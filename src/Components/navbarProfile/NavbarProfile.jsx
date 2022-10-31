import React, { useState } from "react";
import "./navbarProfile.css";

function NavbarProfile() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Cerrar Sesiòn
      </a>
    </nav>
  );
}

export default NavbarProfile;