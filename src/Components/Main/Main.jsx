import React, {useState} from 'react'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import UserHome from '../UserHome/UserHome'
import Perfil from '../Perfil/Perfil'
import Register from '../Register/Register'
import AdminHome from '../AdminHome/AdminHome'
import RegisterEmpresa from '../RegisterEmpresa/RegisterEmpresa'
import ActivoFijo from '../ActivoFijo/ActivoFijo'
import CuentaContable from '../CuentaContable/CuentaContable'
import Entidad from '../Entidad/Entidad'
import ImpuestoAdicional from '../ImpuestoAdicional/ImpuestoAdicional'
import LibroComprasVentasMaestro from '../LibroComprasVentaMaestro/LibroComprasVentasMaestro'
import PartidaMaestro from '../PartidaMaestro/PartidaMaestro'
import Periodo from '../Periodo/Periodo'
import TipoMovimiento from '../TipoMovimientoLibroComprasVentas/TipoMovimiento'
import TipoActivo from '../TipoActivo/TipoActivo'
import SaldoContable from '../SaldoContable/SaldoContable'
import PlantillaContableMaestro from '../PlantillaContableMaestro/PlantillaContableMaestro'
import Usuarios from '../Usuarios/Usuarios'


const Main = ({idEmpre, idUser}) => {

  const storageToken = localStorage.getItem('token')
  const [token, setToken] = useState((storageToken === null || storageToken === undefined) ? '' : JSON.parse(storageToken));

  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tareas' element={<UserHome />} />
        <Route path='/perfil' element={ <Perfil />} />
        <Route path='/empresas' element={<Register />}/>
        <Route path='/empresas/:idEmpre' element={<Register />}/>
        <Route path='/registerCompany' element={<RegisterEmpresa />} />
        <Route path='/adminHome' element={<AdminHome />} />
        <Route path='/activoFijo' element={<ActivoFijo />} />
        <Route path='/cuentaContable' element={<CuentaContable />} />
        <Route path='/entidad' element={<Entidad />} />
        <Route path='/impuestoAdicional' element={<ImpuestoAdicional />} />
        <Route path='/libroComprasVentas' element={<LibroComprasVentasMaestro />} />
        <Route path='/partidasContables' element={<PartidaMaestro />} />
        <Route path='/plantillaContable' element={<PlantillaContableMaestro/>} />
        <Route path='/saldoContable' element={<SaldoContable />} />
        <Route path='/periodos' element={<Periodo />} />
        <Route path='/tipoActivo' element={<TipoActivo />} />
        <Route path='/tipoMovimientoLibroComprasVenta'element={<TipoMovimiento />} />
        <Route path='/usuarios/:idEmpresa'element={<Usuarios />} />
        <Route path='/usuarios/:idEmpresa/:idUser'element={<Usuarios />} />
        </Routes> 
    </div>
 )
}

export default Main