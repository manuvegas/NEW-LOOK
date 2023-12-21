import React from "react";
import "./Inicio.css";
import { RiSearch2Line } from "react-icons/ri";
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <section className="navBar">
      <h1 className="tituloNav">NEW LOOK</h1>
      <div>
        <div className="container-fluid">
          <form className="formSearch">
            <input className="busqueda" type="search" placeholder="Search" />
            <button className="btn btnSearch" type="submit">
              <i>
                <RiSearch2Line className="iconoSearch" />
              </i>
            </button>
          </form>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    INICIO
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PRODUCTOS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    INFORMACION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CAMBIOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACTO
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CUENTA
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        CREAR CUENTA
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        INICIAR SESION
                      </a>
                    </li>
                  </ul>
                </li>
                <button className="btnCarrito">
                  <i>
                    <IoCartSharp className="carrito" />
                  </i>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
