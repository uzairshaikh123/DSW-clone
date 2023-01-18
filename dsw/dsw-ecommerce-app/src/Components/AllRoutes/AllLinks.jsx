import React from 'react'
import {Link as RLink} from 'react-router-dom'
function AllLinks() {
  return<>
  <RLink to="/" ></RLink>
  <RLink to="/signin" ></RLink>
  <RLink to="/register" ></RLink>
  <RLink to="/cart" ></RLink>
  <RLink to="/store"></RLink>
  <RLink to="/products"></RLink>
  
  </>
}

export default AllLinks