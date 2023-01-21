import React from 'react';
import { Button, Divider, Steps } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link as RLink} from 'react-router-dom'
const Trackorder: React.FC = () => {
const [val,setval] = useState(1)

useEffect(()=>{

  setTimeout(()=>{

    setval(2)
  },3000)


},[])


return (





  <>
  <h1 style={{fontSize:"50px",textDecoration:"underline",textAlign:"center",marginBottom:"50px"}}>Track Your Order</h1>
    <Steps
    style={{width:"95%",margin:"auto",color:"black"}}
      progressDot
      current={val}
      items={[
        {
          title: 'Order is Booked',
          description: 'Order is successfully Booked',
        },
        {
          title: 'Product Dispatch',
          description: 'Product is Dispatched',
        },
        {
          title: 'Delivered',
          description: 'Product Successfully Delivered',
        },
      ]}
    />
    <Divider />
    <Steps
    style={{width:"95%",margin:"auto"}}
      progressDot
      current={val}
      direction="vertical"
      items={[
        {
          title: 'Order is Booked',
          description: 'Order is successfully Booked',
        },
        {
          title: 'Product Dispatch',
          description: 'Product is Dispatched',
        },
        {
          title: 'Delivered',
          description: 'Product Successfully Delivered',
        },
      ]}
    />
    <RLink to="/">

   
    <Button style={{display:"block",textAlign:"center",margin:"auto",bgColor:"teal"}} colorScheme='teal' variant='ghost'>
   GO HOME
  </Button>
  </RLink>
  </>
);
}

export default Trackorder;