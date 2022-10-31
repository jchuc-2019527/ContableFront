import React, { useState, useEffect } from "react";
import { Link, Route, Router } from "react-router-dom";
import "./ActivoFijo.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";


const ActivoFijo = () => {
  return (
    <div style={{backgroundColor: "#5DADE2"}}>
        <Navbar/>
        <div >
        <body style={{backgroundColor: "#5DADE2"}}>
        <div className="container my-3" >
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <h2>Nuevo Activo</h2>
              <div className="mb-3">
                    <label className="form-label">Fecha Adquisición</label>
                    <input type="date" className="form-control" id="fechaAdquisicion" />
             </div>
             <div className="mb-3">
                            <label  className="form-label">Numero Documento</label>
                            <input type="number" className="form-control" id="numeroDocumento" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">NIT Entidad</label>
                            <input type="number" className="form-control" id="niEntidad" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Codigo Tipo</label>
                            <input type="number" className="form-control" id="codigoTipo" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripcion Activo Fijo</label>
                            <input type="text" className="form-control" id="descripcionActivoFijo" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Cantidad Activo Fijo</label>
                            <input type="number" className="form-control" id="cantidadActivoFijo" />
                        </div>
                        <div class="mb-3">
                            <label  className="form-label">Valor Unitario</label>
                            <input type="number" className="form-control" id="valorUnitario" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Valor Total</label>
                            <input type="number" className="form-control" id="valorTotal" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Valor Actual</label>
                            <input type="number" className="form-control" id="valorActual" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Depreciacion Acumulada</label>
                            <input type="number" className="form-control" id="depreciacionAcumulada" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Depreciacion Actual</label>
                            <input type="number" className="form-control" id="depreciacionActual" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Caracterìsticas Activo Fijo</label>
                            <input type="number" className="form-control" id="caracteristicasActivoFijo" />
                        </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-success">Guardar</button>
                </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 ">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="list"
                  role="tabpanel"
                  aria-labelledby="list-tab" 
                >
                  <div className="card" >
                    <div className="card-header">
                      <h4>Activo Fijo</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="userList"
                          className="table table-bordered table-hover table-striped"
                        >
                          <thead className="thead-light">
                          <tr>
                                                    <th className="centrado">Fecha Adquisición</th>
                                                    <th className="centrado">Numero Documento</th>
                                                    <th className="centrado">Nit Entidad</th>
                                                    <th className="centrado">Còdigo Tipo</th>
                                                    <th className="centrado">Descripciòn Activo Fijo</th>
                                                    <th className="centrado">Cantidad Activo Fijo</th>
                                                    <th className="centrado">Valor Unitario</th>
                                                    <th className="centrado">Valor Total</th>
                                                    <th className="centrado">Valor Actual</th>
                                                    <th className="centrado">Depreciaciòn Acumulada</th>
                                                    <th className="centrado">Depreciaciòn Actual</th>
                                                    <th className="centrado">Caracterìsticas Activo Fijo</th>
                                                    <th className="centrado">Opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="centrado">5215</td>
                                                    <td className="centrado">4856</td>
                                                    <td className="centrado">5462</td>
                                                    <td className="centrado">2654</td>
                                                    <td className="centrado">56445</td>
                                                    <td className="centrado">54577</td>
                                                    <td className="centrado">5215</td>
                                                    <td className="centrado">4856</td>
                                                    <td className="centrado">5462</td>
                                                    <td className="centrado">2654</td>
                                                    <td className="centrado">56445</td>
                                                    <td className="centrado">54577</td>
                                                    <td className="centrado">
                                                      <button><i className="fab fa-discord"></i></button>
                                                      <button><i className="fab fa-android"></i></button>
                                                      </td>                    
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

    </div>

    )
}

export default ActivoFijo