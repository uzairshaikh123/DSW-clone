import { useContext, useEffect, useState } from "react";
import AdminPage from "./Admin/AdminPage";
import { AuthContext } from "./AuthContext/Data";
import Error from "./Authentication/Error";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Progressfun from "./Components/Pages/Progress";
import Homepage from "./Homepage";
import Navbar from "./Navbar/Navbar";
import SmallCont from "./Navbar/SmallCont";
import Products from "./Products/Products";



function App() {
 const [progressbar,setprogressbar] = useState(true)
let Authobj = useContext(AuthContext)

let {admin} = Authobj
  useEffect(()=>{
    setTimeout(()=>{
      setprogressbar(false)
    },200)
 },[])
 
  return progressbar?<Progressfun />:admin?
  <div>

    <AdminPage />
  
  </div>
     : <div>
       
      <Navbar />
      <SmallCont />
      <AllRoutes />

 
    </div>
  
}

export default App;
