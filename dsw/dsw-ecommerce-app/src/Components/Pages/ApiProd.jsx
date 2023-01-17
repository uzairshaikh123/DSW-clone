import React, { useEffect } from 'react'
import Box from "@chakra-ui/react"
import { useState } from 'react';
import axios from 'axios'
function ApiProd() {
const [data,setdata] = useState()
useEffect(() => {
  axios.get('https://dummyjson.com/products').then((res)=>{
    setdata(res.data.products)
    
    return res
  }
  
  );
  
}, [])

    
console.log(data)

  return (
   <>
   </>
  )
}

export default ApiProd