import Login from "./Login/Login";
import DashboardUser from "./Dashboard/DashboardUser";
import DashboardManager from "./Dashboard/DashboardManager"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function AppRoutes (){

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboardM' element={<DashboardManager/>}/>
        <Route path='/dashboardU' element={<DashboardUser/>}/>
          
      </Routes>
    </Router>
  )

}