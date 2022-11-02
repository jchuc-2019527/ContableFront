import React, { useState, useEffect } from "react";
import "./Usuarios.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

const Register = () => {
  const { idEmpresa, idUser } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  console.log(typeof idUser);

  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    Axios.get(url + "user/usersByCompany/" + idEmpresa, headers)
      .then((res) => {
        setUsers(res.data.resu);
        // console.log(res.data.resu)
      })
      .catch((err) => {});
  }, []);

  const handleDelete = (e) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Esta seguro de eliminar su cuenta?",
        text: "No podra revertir estos cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, eliminar cuenta!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          Axios.delete(url + "user/deleteUser/" + idUser, headers);
          navigate("/usuarios/" + idEmpresa);
          swalWithBootstrapButtons.fire(
            "Cuenta eliminada!",
            "Su cuenta ha sido eliminada.",
            "success"
          );
        } else if (
          navigate("/usuarios/" + idEmpresa)
          // result.dismiss === Swal.DismissReason.cancel
          /* Read more about handling dismissals below */
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "Su cuenta no se ha eliminado",
            "error"
          );
        }
      });
  };

  return (
    <div>
      <body className="perfilEmpresa">
        <div className="container">
          <div
            className="mx-auto col-sm-8 main-section"
            id="myTab"
            role="tablist"
          >
            <ul className="nav nav-tabs justify-content-end">
              <li>
                <Link to="/empresas" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: "wheat", border: 1, marginRight: 1 }}>
                    Regresar
                  </Button>
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="list"
                role="tabpanel"
                aria-labelledby="list-tab"
              >
                <div className="card">
                  <div className="card-header">
                    <h4>Listado Empleados</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="userList"
                        className="table table-bordered table-hover table-striped"
                      >
                        <thead className="thead-light">
                          <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Usuario</th>
                            <th>Opciones</th>
                          </tr>
                        </thead>
                        {users.map((users, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <th>{index + 1}</th>
                                <td>{users.nombre}</td>
                                <td>{users.apellido}</td>
                                <td>{users.correo}</td>
                                <td>{users.username}</td>
                                <td>
                                  <a>
                                    <i className="fas fa-edit"></i>
                                  </a>{" "}
                                  {"  "}|{"  "}{" "}
                                  <a>
                                    <Button onClick={handleDelete}>
                                      <Link
                                        to={
                                          "/usuarios/" +
                                          idEmpresa +
                                          "/" +
                                          users.codigoUsuario
                                        }
                                      >
                                        <i className="fas fa-user-times"></i>
                                      </Link>
                                    </Button>
                                  </a>
                                  <a></a>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Register;
