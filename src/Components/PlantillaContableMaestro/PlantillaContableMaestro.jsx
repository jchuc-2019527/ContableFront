import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PlantillaContableMaestro.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";



const PlantillaContableMaestro = () => {
  return (    
  <div style={{backgroundColor: "#5DADE2"}}>
      <div>
      <Navbar/>
      </div>
    <body style={{backgroundColor: "#5DADE2"}}>
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
            <h2>Nueva Plantilla</h2>
            <div class="mb-3">
                                <label class="form-label">Codigo Plantilla Contable</label>
                                <input type="number" class="form-control" id="codigoPlantillaContable" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Correlativo Plantilla Contable</label>
                            <input type="number" class="form-control" id="correlativoPlantilla" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Codigo Cuenta</label>
                            <input type="number" class="form-control" id="codigoCuenta" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tipo Movimiento Plantilla</label>
                            <input type="text" class="form-control" id="tipoMovimientoPlantilla" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Porcentaje Cuenta</label>
                            <input type="number" class="form-control" id="porcentajeCuenta" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Descripcion Partida</label>
                            <input type="text" class="form-control" id="descripcionPartida" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Caracterìsticas Partida</label>
                            <input type="text" class="form-control" id="descripcionPartida" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tipo Plantilla</label>
                            <input type="text" class="form-control" id="tipoPlantilla" />
                        </div>
              <div className="d-grid gap-2">
                <button className="btn btn-success">Guardar</button>
              </div>
              <div className="btn-home"></div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 ">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="list"
                role="tabpanel"
                aria-labelledby="list-tab"
              >
                <div className="card">
                  <div className="card-header">
                    <h4>Plantilla Contable</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="userList"
                        className="table table-bordered table-hover table-striped"
                      >
                        <thead className="thead-light">
                        <tr>
                                                    <th class="centrado">Codigo Plantilla Contable</th>
                                                    <th class="centrado">Correlativo Plantilla Contable</th>
                                                    <th class="centrado">Codigo Cuenta</th>
                                                    <th class="centrado">Tipo Movimiento Plantilla</th>
                                                    <th class="centrado">Porcentaje Cuenta</th>
                                                    <th class="centrado">Descripcion Partida</th>
                                                    <th class="centrado">Caracterìsticas Partida</th>
                                                    <th class="centrado">Tipo Plantilla</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="centrado">5215</td>
                                                    <td class="centrado">4856</td>
                                                    <td class="centrado">5462</td>
                                                    <td class="centrado">2654</td>
                                                    <td class="centrado">56445</td>
                                                    <td class="centrado">54577</td>
                                                    <td class="centrado">56445</td>
                                                    <td class="centrado">54577</td>
                                                </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
  )
}

export default PlantillaContableMaestro