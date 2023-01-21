import React, { useState } from 'react';
import { Rate } from 'antd';
import { Heading } from '@chakra-ui/react';

const desc = ['terrible  😡', 'bad  😔', 'normal  🙂', 'good  😊', 'wonderful  🤩'];

const Ratingsfun: React.FC = () => {
  const [value, setValue] = useState(3);
const [review,setreview] = useState(['terrible  😡', 'bad  😔', 'normal  🙂', 'good  😊', 'wonderful  🤩'])

  const handleclick =()=>{
   let rev=desc[value-1]
   
   setreview([...review,rev])
  
   
  }

  return (
    <>
<div style={{width:"27%",height:"auto",margin:"auto"}}>


   <span>
<Heading style={{marginTop:"120px"}} textAlign={"center"} textDecoration={"underline"}>Reviews</Heading>
      <Rate style={{marginTop:"50px"}} textAlign={"center"} tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text" >{desc[value - 1]}</span> : ''}
    </span>
    <button onClick={handleclick} style={{backgroundColor:"black",width:"150px",color:"white",marginLeft:"50px",padding:"20px"}}>ADD REVIEW</button>
    <div>
<div style={{width:"300px",height:"auto",margin:"auto"}}>
  

{review?.map((item)=>{

return <Heading size={"md"} color="black">{item}</Heading>
})}
</div>

    </div>
    </div>
    </>    
  );
};

export default Ratingsfun;