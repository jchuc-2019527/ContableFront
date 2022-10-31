import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SaldoContable.css";
import { url } from "../axiosConnect";
import Axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../navbar/Navbar";

const SaldoContable = () => {
  return (
    
    <div style={{backgroundColor: "#5DADE2"}}>
        <div>
        <Navbar/>
        </div>
      <body style={{backgroundColor: "#5DADE2"}}>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
              <h2>Nuevo Saldo</h2>
              <div className="mb-3">
                                <label  className="form-label">Saldo Inicial D</label>
                                <input type="number" className="form-control" id="monto" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Saldo Inicial H</label>
                            <input type="number" className="form-control" id="monto" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Monto Debe</label>
                            <input type="number" className="form-control" id="debe" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Monto Haber</label>
                            <input type="number" className="form-control" id="Haber" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Saldo Final D</label>
                            <input type="number" className="form-control" id="monto" />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Saldo Final H</label>
                            <input type="number" className="form-control" id="monto" />
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
                      <h4>Saldo Contable</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="userList"
                          className="table table-bordered table-hover table-striped"
                        >
                          <thead className="thead-light">
                 
                          <tr>
                                                    <th className="centrado">Saldo Inicial D</th>
                                                    <th className="centrado">Saldo Inicial H</th>
                                                    <th className="centrado">Monto Debe</th>
                                                    <th className="centrado">Monto Haber</th>
                                                    <th className="centrado">Saldo Final D</th>
                                                    <th className="centrado">Saldo Final H</th>
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

export default SaldoContable