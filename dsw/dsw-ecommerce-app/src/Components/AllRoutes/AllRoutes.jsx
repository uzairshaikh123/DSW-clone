import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from '../../Authentication/Register'
import Signin from '../../Authentication/Signin'
import Homepage from '../../Homepage'
import PageNotFound from '../../PageNotFound/PageNotFound'
import Products from '../../Products/Products'
import SingleProduct from '../../Products/SingleProduct.'
function AllRoutes() {
  return <Routes>
<Route path={"/"} element={<Homepage />} />
<Route path={"/signin"} element={<Signin />} />
<Route path={"/register"} element={<Register />} />
<Route path={"/cart"} element={<h1>cart</h1>} />
<Route path={"/store"} element={<h1>Store</h1>} />
<Route path='/products' element={<Products />}></Route>
<Route path='/products/:id' element={<SingleProduct />}></Route>
<Route path="*" element={<PageNotFound />} />
  </Routes>
}

export default AllRoutes