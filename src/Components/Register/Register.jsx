import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Axios from "axios";
import { url } from "../axiosConnect";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Register = () => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    username: "",
    correo: "",
    claveUsuario: "",
  });

  const navigate = useNavigate();

  const changeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const [empresas, setEmpresas] = useState([]);
  const { idEmpre } = useParams();


  const headers = {
    headers: {
      Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    Axios.get(url + "empresaMaestro/empresasMaestros", headers)
      .then((res) => {
        setEmpresas(res.data.result);
      })
      .catch((err) => {});
  }, [empresas]);

  const registerUser = (e) => {
    e.preventDefault();
    Axios.post(url + "user/newUser/" + idEmpre, user, headers)
      .then((res) => {
        setOpen(false);
        Swal.fire({
          position: "center",
          icon: "success",
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: res.data.Message,
          timer: 4000,
          timerProgressBar: true,
        });
      })
      .catch((err) => {
        setOpen(false);
        Swal.fire({
          position: "center",
          icon: "warning",
          color: "white",
          background: "rgba(0,0,0,0.9)",
          title: err.response.data.message,
          timer: 4000,
          timerProgressBar: true,
        });
      });
  };

  const deleteEmpresa = (e) => {
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
          Axios.delete(url + 'empresaMaestro/deleteEmpresa/' + idEmpre, headers)
		  navigate('/empresas')
          swalWithBootstrapButtons.fire(
            "Cuenta eliminada!",
            "Su cuenta ha sido eliminada.",
            "success"
          );
        } else if (
			navigate('/empresas')
          /* Read more about handling dismissals below */
         
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "Su cuenta no se ha eliminado",
            "error"
          );
        }
      });
	// Axios.delete(url + 'empresaMaestro/deleteEmpresa/' + idEmpre, headers)
	// .then((res) => {
	// 	console.log('Se elimino la empresa', res)
	// 	navigate('/empresas')
	// })
	// .catch((err) => {
	// 	console.log('No se puedo eliminar', err)
	// }) 
  }


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              <li className="nav-item">
                <Link to="/adminHome">
                  <a
                    className="nav-link active"
                    id="list-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="list"
                    aria-selected="false"
                  >
                    Regresar
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registerCompany">
                  <a
                    className="nav-link active"
                    id="list-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="list"
                    aria-selected="false"
                  >
                    Ingresar Nueva Empresa
                  </a>
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
                    <h4>Empresas registradas</h4>
                  </div>
                  <div>
                    <Modal
                      id="register"
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <form>
                          <label>Nombre</label>
                          <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            placeholder="Nombre"
                            onChange={changeUser}
                            required
                          ></input>
                          <label>Apellido</label>
                          <input
                            id="apellido"
                            name="apellido"
                            type="text"
                            placeholder="Apellido"
                            onChange={changeUser}
                            required
                          ></input>
                          <label>E-mail</label>
                          <input
                            id="correo"
                            name="correo"
                            type="email"
                            placeholder="E-Mail"
                            onChange={changeUser}
                            required
                          ></input>
                          <label>Usuario</label>
                          <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Usuario"
                            onChange={changeUser}
                            required
                          ></input>
                          <label>Contraseña</label>
                          <input
                            id="claveUsuario"
                            name="claveUsuario"
                            type="password"
                            placeholder="Contraseña"
                            onChange={changeUser}
                            required
                          ></input>
                          <Button
                            onClick={registerUser}
                            variant="contained"
                            color="success"
                            sx={{ marginTop: 1.5 }}
                          >
                            {" "}
                            <a>Registrar</a>
                          </Button>
                        </form>
                      </Box>
                    </Modal>
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
                            <th>Nombre Empresa</th>
                            <th>Nombre Comercial</th>
                            <th>Direcciòn Empresa</th>
                            <th>NIT Empresa</th>
                            <th>Porcentaje IVA</th>
                            <th>Opciones</th>
                          </tr>
                        </thead>
                        {empresas.map((empresas, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <th>{index + 1}</th>
                                <td>
                                  {" "}
                                  <Link to={'/usuarios/' + empresas.codigoEmpresa}>
                                    {" "}
                                    <a>{empresas.nombreEmpresa}</a>
                                  </Link>
                                </td>
                                <td>{empresas.nombreComercial}</td>
                                <td>{empresas.direccionEmpresa}</td>
                                <td>{empresas.NITEmpresa}</td>
                                <td>{empresas.porcentajeIVA}</td>
                                <td>
                                  <Button onClick={handleOpen}>
                                    <i className="fas fa-edit"></i>
                                  </Button>{" "}
                                  |{" "}
                                  <Button onClick={deleteEmpresa}>
									<Link to={'/empresas/' + empresas.codigoEmpresa} >  <i className="fas fa-user-times"></i></Link>
                                  </Button>{" "}
                                  |{" "}
                                  <Button onClick={handleOpen}>
                                    <Link
                                      to={"/empresas/" + empresas.codigoEmpresa}
                                    >
                                      <i className="fas fa-user"></i>
                                    </Link>
                                  </Button>{" "}|
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                    <div className="bg-modal"></div>
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
