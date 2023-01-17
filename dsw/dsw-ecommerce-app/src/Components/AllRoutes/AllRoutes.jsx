import React from 'react'
import {Routes,Route} from 'react-router-dom'
function AllRoutes() {
  return <Routes>
<Route path={"/"} element={<h1>Home</h1>} />
<Route path={"/signin"} element={<h1>Home</h1>} />
<Route path={"/register"} element={<h1>Home</h1>} />
<Route path={"/cart"} element={<h1>Home</h1>} />

  </Routes>
}

export default AllRoutes