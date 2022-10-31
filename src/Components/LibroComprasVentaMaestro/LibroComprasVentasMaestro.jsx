import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LibroComprasVentasMaestro.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";


const LibroComprasVentasMaestro = () => {
  return (    
    <div style={{backgroundColor: "#5DADE2"}}>
        <div >
          <Navbar/>
        </div>
      <body style={{backgroundColor: "#5DADE2"}}>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <h2>Nuevo Libro</h2>
             <div className="mb-3">
                                <label className="form-label">Numero Libro</label>
                                <input type="number" className="form-control" id="numeroLibro" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Correlativo</label>
                            <input type="number" className="form-control" id="correlativo" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">NIT Entidad</label>
                            <input type="number" className="form-control" id="nitEntidad" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha Inicial</label>
                            <input type="date" className="form-control" id="fechaInicial" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Fecha Final</label>
                            <input type="date" className="form-control" id="fechaFinal" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Estado Libro</label>
                            <input type="text" className="form-control" id="estadoLibro" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Tipo Libro</label>
                            <input type="text" className="form-control" id="tipoLibro" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Código Partida Contable</label>
                            <input type="number" className="form-control" id="codigoPartidaContable" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Fecha Mínima</label>
                            <input type="date" className="form-control" id="fechaMinima" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Fecha Máxima</label>
                            <input type="date" className="form-control" id="fechaMaxima" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Fecha Movimiento</label>
                            <input type="date" className="form-control" id="fechaMoimiento" />
                        </div>
                        <div class="mb-3">
                            <label  className="form-label">Valor Movimiento</label>
                            <input type="number" className="form-control" id="valorMovimiento" />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Código Movimiento</label>
                            <input type="number" className="form-control" id="codigoMovimiento" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Número Documento</label>
                            <input type="number" className="form-control" id="numeroDocumento" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Unidades Impuesto</label>
                            <input type="number" className="form-control" id="unidadesImpuesto" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Valor Impuesto</label>
                            <input type="number" className="form-control" id="valorImpuesto" />
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
                      <h4>Libro Compras Venta</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="userList"
                          className="table table-bordered table-hover table-striped"
                        >
                          <thead className="thead-light">
                          <tr>
                                                    <th className="centrado">Numero Libro</th>
                                                    <th className="centrado">Correlativo</th>
                                                    <th className="centrado">NIT Entidad</th>
                                                    <th className="centrado">Fecha Inicial</th>
                                                    <th className="centrado">Fecha Final</th>
                                                    <th className="centrado">Estado Libro</th>
                                                    <th className="centrado">Tipo Libro</th>
                                                    <th className="centrado">Codigo Partida Contable</th>
                                                    <th className="centrado">Fecha Minima</th>
                                                    <th className="centrado">Fecha Máxima</th>
                                                    <th className="centrado">Fecha Movimiento</th>
                                                    <th className="centrado">Valor Movimiento</th>
                                                    <th className="centrado">Código Movimineto</th>
                                                    <th className="centrado">Número Documento</th>
                                                    <th className="centrado">Unidades Impuesto</th>
                                                    <th className="centrado">Valor Impuesto</th>
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
                                                    <td className="centrado">54577</td>                                                    <td class="centrado">5215</td>
                                                    <td className="centrado">4856</td>
                                                    <td className="centrado">5462</td>
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

export default LibroComprasVentasMaestro