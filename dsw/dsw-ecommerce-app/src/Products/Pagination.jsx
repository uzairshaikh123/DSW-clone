import React from 'react'
import { useState } from 'react'

function Pagination() {
    const [count,setcount] = useState(0)
  return (
    <div>
<button disabled={count==1} onClick={()=>setcount(count-1)} style={{backgroundColor:"black",width:"50px",color:"white",marginRight:"10px"}}>-</button>
<button  style={{backgroundColor:"black",width:"60px",color:"white"}}>{count}</button>
<button disabled={count==3} onClick={()=>setcount(count+1)}  style={{backgroundColor:"black",width:"50px",color:"white",marginLeft:"10px"}}>+</button>





    </div>
  )
}

export default Pagination