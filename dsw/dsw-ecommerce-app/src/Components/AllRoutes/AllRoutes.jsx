import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Addproduct from '../../Admin/Addproduct'

import AdminPage from '../../Admin/AdminPage'
import Delproduct from '../../Admin/Delproduct'

import Register from '../../Authentication/Register'
import Signin from '../../Authentication/Signin'
import Cart from '../../CartPage.jsx/Cart'
import Homepage from '../../Homepage'
import Maps from '../../Map/Maps'
import PageNotFound from '../../PageNotFound/PageNotFound'
import Payment from '../../Payments/Payment'
import Products from '../../Products/Products'
import SingleProduct from '../../Products/SingleProduct.'
import Trackorder from '../../Trackorder.jsx/Trackorder'
import PrivateRoute from './PrivateRoute'
function AllRoutes() {
  return <Routes>
<Route path={"/"} element={<Homepage />} />
<Route path={"/signin"} element={<Signin />} />
<Route path={"/register"} element={<Register />} />

<Route path={"/cart"} element={
  <PrivateRoute>
<Cart />
  </PrivateRoute>



} />
<Route path={"/store"} element={<Maps />} />
<Route path='/products' element={<Products />}></Route>
<Route path='/payments' element={<Payment />}></Route>
<Route path='/trackorder' element={
 <PrivateRoute>
  
<Trackorder />
 </PrivateRoute>

}></Route>
{/* <Route path='/adminlogin' element={<AdminAuth />}></Route> */}
{/* <Route path='/adminregister' element={<AdminRegister />}></Route> */}
<Route path='/admin' element={
   <PrivateRoute>

<AdminPage />
   </PrivateRoute>
}></Route>
<Route path='/addproduct' element={<Addproduct />}></Route>
<Route path='/trackthehistory' element={<Trackorder />}></Route>
<Route path='/delproduct' element={<Delproduct />}></Route>
<Route path='/products/:id' element={<SingleProduct />}></Route>
<Route path="*" element={<PageNotFound />} />
  </Routes>
}

export default AllRoutes