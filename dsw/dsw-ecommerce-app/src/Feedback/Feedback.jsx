import { RadioGroup, Stack, Textarea,Radio, Heading } from '@chakra-ui/react'

import React from 'react'
import { useState } from 'react'
let arr = JSON.parse(sessionStorage.getItem("feedback")) || []
function Feedback() {
    const [resize, setResize] = React.useState('horizontal')
    const [val,setval] = useState("")

    const handlechange=(e)=>{
        setval(e.target.value)
        
    }

const handlesubmit=()=>{

arr = [...arr,val]
    sessionStorage.setItem("feedback",JSON.stringify(arr))
   

}


  return (  <>
  <Heading color={"CaptionText"} textAlign="center">FEEDBACK</Heading>
  <hr />
  <div style={{width:"90%",margin:"auto"}}>

  
    <RadioGroup defaultValue={resize} onChange={setResize} mb={6} >
      <Stack direction='row' spacing={5}>
        <Radio value='horizontal'>Horizontal</Radio>
        <Radio value='vertical'>Vertical</Radio>
        <Radio value='none'>None</Radio>
      </Stack>
    </RadioGroup>

    <Textarea
    style={{width:"50%"}}
    
      placeholder='Write Your Valuable Feedback'
      size='sm'
      resize={resize}
      onChange={handlechange}
      value={val}
    />
    <br />
    <button style={{color:"white",backgroundColor:"black",padding:"15px",marginTop:"50px"}} onClick={handlesubmit}>ADD FEEDBACK</button>
    </div>
  </>
  )
}

export default Feedback