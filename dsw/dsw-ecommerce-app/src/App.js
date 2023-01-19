import { useEffect, useState } from "react";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Progressfun from "./Components/Pages/Progress";
import Homepage from "./Homepage";
import Navbar from "./Navbar/Navbar";
import SmallCont from "./Navbar/SmallCont";
import Products from "./Products/Products";



function App() {
 const [progressbar,setprogressbar] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setprogressbar(false)
    },200)
 },[])
 
  return progressbar?<Progressfun />:
    <div>
       
      <Navbar />
      <SmallCont />
      <AllRoutes />

 
    </div>
  
}

export default App;
