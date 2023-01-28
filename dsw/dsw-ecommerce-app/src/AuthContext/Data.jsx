import React, {useEffect } from 'react'
import { createContext } from 'react'


import Adidas1 from '../img/Adidas.webp';
import Adidas2 from '../img/Adidas2.webp';
import Adidas3 from '../img/Adidas3.webp';
import Adidas4 from '../img/Adidas4.webp';
import Adidas5 from '../img/Adidas5.webp';
import ASICS from '../img/ASICS.webp';
import ASICS2 from '../img/ASICS2.webp';
import ASICS3 from '../img/ASICS3.webp';
import Brooks from '../img/Brooks.webp';
import Brooks2 from '../img/Brooks2.webp';
import Brooks3 from '../img/Brooks3.webp';
import New_Balance from '../img/New Balance.webp';
import New_Balance2 from '../img/New Balance2.webp';
import New_Balance3 from '../img/New Balance3.webp';
import New_Balance4 from '../img/New Balance4.webp';
import Puma from '../img/Puma.webp';
import Puma2 from '../img/Puma2.webp';
import Puma3 from '../img/Puma3.webp';
import Puma4 from '../img/Puma4.webp';
import Puma6 from '../img/Puma6.webp';
import Reebok from '../img/Reebok.webp';
import Reebok2 from '../img/Reebok2.webp';
import Reebok3 from '../img/Reebok3.webp';
import Reebok4 from '../img/Reebok4.webp';
import Reebok5 from '../img/Reebok5.webp';
import Skechers from '../img/Skechers.webp';
import Skechers2 from '../img/Skechers2.webp';
import Skechers3 from '../img/Skechers3.webp';
import Skechers5 from '../img/Skechers5.webp';
import crown2 from '../img/Vans4.webp';
import Vans5 from '../img/Vans5.webp';
import Vans7 from '../img/Vans7.webp';
import Vans8 from '../img/Vans8.webp';
import crown from '../img/Crown Vintage.webp';
import { useState } from 'react';

export const AuthContext = createContext()
function AuthContextProvider({children}) {
   
    let s = JSON.parse(sessionStorage.getItem("user")) || false
let u = JSON.parse(sessionStorage.getItem("userdata")) || { name:"",
email:""
}
const [user,setuser] = useState(s)
const [data,setdata] = useState([])
const [name,setname] = useState(u)
//     let ndata= [
//       {
//           id: 1,
//           name: "adidas",
//           img:Adidas1,
//           price: 109.99,
//           size:1,
//           color:"black",
//           desc: "Alphabounce 1 Running Shoe - Men's"
//       },
//       {
//           id: 2,
//           name: "Puma",
//           price: 59.99,
//           size:1.3,
//           img: Puma,
//           desc: "Ever FS Sneaker - Men's"
//       },
//       {
//           id: 3,
//           name: "adidas",
//           price: 59.99,
//           size:1.4,
//           img: Adidas2,
//           color:"black",
//           desc: "Grand Court 2.0 Sneaker - Men's"
//       },
//       {
//           id: 4,
//           name: "adidas",
//           price: 79.99,
//           color:"white",
//           size:1.5,
//           img:Adidas3,
//           desc: "Lite Racer Adapt 5.0 Sneaker - Men's"
//       },
//       {
//           id: 5,
//           name: "Crown Vintage",
//           price: 79.99,
//           color:"white",
//           size:1.5,
//           img: crown,
//           desc: "Edsul Sneaker"
//       },
//       {
//           id: 6,
//           name: "New Balance",
//           price: 79.99,
//           color:"black",
//           size:2.4,
//           img: New_Balance,
//           desc: "Kaptir 2.0 Sneaker - Men's"
//       },
//       {
//           id: 7,
//           name: "adidas",
//           price: 109.99,
//           size:2.5,

//           color:"blue",
//           img:Adidas4,
//           desc: "Fresh Foam Roav Sneaker - Men's"
//       },
//       {
//           id: 8,
//           name: "Puma",
//           price: 59.99,
//           color:"black",
//           size:2.6,
//           img: Puma2,
//           desc: "Softride One4All Sneaker - Men's"
//       },
//       {
//           id: 9,
//           name: "Puma",
//           price: 109.99,
//           color:"white",
//           size:2.7,

//           img: Puma3,
//           desc: "Ever FS Sneaker"
//       },
//       {
//           id: 10,
//           name: "Crown Vintage",
//           price: 79.99,
//           color:"blue",
//           img: crown2,
//           size:2.9,
//           desc: "Ebben Sneaker"
//       },
//       {
//           id: 11,
//           name: "Vans",
//           price: 129.99,
//           color:"black",
//           size:3.4,
//           img: Vans5,
//           desc: "Runfalcon 2.0 Running Shoe - Men's"
//       },
//       {
//           id: 12,
//           name: "adidas",
//           price: 59.99,
//           size:3.5,
//           color:"white",

//           img:Adidas5,
//           desc: "Asher Slip-On Sneaker - Men's"
//       },
//       {
//           id: 13,
//           name: "Puma",
//           price: 109.99,
//           size:3.6,
//           color:"blue",
//           img: Puma4,
//           desc: "Ward Sneaker - Men's"
//       },
//       {
//           id: 14,
//           name: "Vans",
//           price: 79.99,
//           color:"black",
//           size:3.7,
//           img: Vans7,
//           desc: "Lite Racer BYD 2.0 Sneaker - Mens"
//       },
//       {
//           id: 15,
//           name: "Reebok",
//           price: 59.99,
//           color:"blue",
//           size:3.8,
//           img:Reebok2,
//           desc: "Hoops 3.0 Mid High-Top Sneaker - Men's"
//       },
//       {
//           id: 16,
//           name: "Vans",
//           price: 129.99,
//           color:"white",
//           size:3.9,
//           img: Vans8,
//           desc: "237 Sneaker - Men's"
//       },
//       {
//           id: 17,
//           name: "ASICS",
//           price: 109.99,
//           size:4.0,
//           color:"black",
//           img: ASICS,
//           desc: "Fresh Foam 680 v7 Running Shoe - Men's"
//       },
//       {
//           id: 18,
//           name: "ASICS",
//           price: 59.99,
//           color:"blue",
//           img:ASICS2,
//           size:4.5,
//           desc: "Run '70s Running Shoe - Men's"
//       },
//       {
//           id: 19,
//           name: "Vans",
//           price: 129.99,
//           color:"blue",
//           img: Vans5,
//           size:4.6,
//           desc: "GEL-Venture 8 Running Shoe - Men's"
//       },
//       {
//           id: 20,
//           name: "ASICS",
//           color:"black",
//           price: 109.99,
//           size:4.7,
//           img: ASICS3,
//           desc: "515 Sneaker - Men's"
//       },
//       {
//           id: 21,
//           name: "Reebok",
//           price: 79.99,
//           size:4.9,
//           img: Reebok4,
//           color:"blue",
//           desc: "Kaptir 2.0 Running Shoe - Men's"
//       },
//       {
//           id: 22,
//           name: "Vans",
//           price: 79.99,
//           color:"blue",
//           img: Vans7,
//           size:5.5,
//           desc: "840 v5 Running Shoe - Men's"
//       },
//       {
//           id: 23,
//           name: "Brooks",
//           color:"black",
//           price: 129.99,
//           img: Brooks3,
//           size:6.5,
//           desc: "GT-1000 11 Running Shoe - Men's"
//       },
//       {
//           id: 24,
//           name: "Reebok",
//           price: 79.99,
//           color:"blue",
//           img:Reebok5,
//           size:6.2,
//           desc: "Rebound Rugged Sneaker - Men's"
//       },
//       {
//           id: 25,
//           name: "Reebok",
//           price: 129.99,
//           img: Reebok3,
//           color:"black",
//           size:6.3,
//            desc: "Range High-Top Sneaker - Men's"
//       }, {
//           id: 26,
//           name: "ASICS",
//           price: 59.99,
//           size:6.4,
//           img: ASICS2,
//           color:"yellow",
          
//           desc: "Pacer Future Street Plus Running Shoe - Men's"
//       },
//       {
//           id: 27,
//           name: "Brooks",
//           price: 109.99,
//           img: Brooks2,
//           size:6.6,
//           color:"blue",
//           desc: "Fresh Foam 680 v7 Running Shoe - Men's"
//       },
//       {
//           id: 28,
//           name: "Skechers",
//           price: 79.99,
//           color:"white",
//           size:6.7,

//           img: New_Balance3,
//           desc: "Fresh Foam Roav Running Shoe - Men's"
//       },
//       {
//           id: 29,
//           name: "Skechers",
//           price: 79.99,
//           color:"black",
//           size:6.7,
//           img: Skechers,
//           desc: "Daily 3.0 Sneaker - Men's"
//       },
//       {
//           id: 30,
//           name: "Skechers",
//           price: 109.99,
//           size:6.7,
//           color:"yellow",
//           img: Skechers2,
//           desc: "Atwood Deluxe Sneaker - Men's"
//       },
//       {
//           id:31,
//           name:"Puma",
//           price:100.99,
//           color:"white",
//           size:6.8,
//           img:Puma3,
//           desc: "Atwood Deluxe Sneaker - Men's"

//       },
//       {
//           id:32,
//           name:"Skechers",
//           price:100.99,
//           size:6.8,
//           img:Skechers5,
//           color:"black",
//           desc: "Atwood Deluxe Sneaker - Men's"

//       }
//   ]

const [admin,setAdmin] = useState(false)
//   localStorage.setItem("Alldata",JSON.stringify(ndata))

  let arr = JSON.parse(localStorage.getItem("Alldata"))
  useEffect(()=>{

      setdata(arr)
  },[])
  let loginuser=()=>{
      
      sessionStorage.setItem("user",JSON.stringify(true))
      let s = JSON.parse(sessionStorage.getItem("user"))
      setuser(true)

  }
let logoutuser =()=>{
    sessionStorage.setItem("user",JSON.stringify(false))
    let s = JSON.parse(sessionStorage.getItem("user"))
    setuser(s)
}
let storeuser = (name,email)=>{
    sessionStorage.setItem("userdata",JSON.stringify({
        name:name,
        email:email
    }))
    let s = JSON.parse(sessionStorage.getItem("userdata"))
    setname(s)
   
  
}

let Adminpage=()=>{

setAdmin(true)


}

let Homepage=()=>{

    setAdmin(false)
    
    
    }
let datafun =()=>{
    let newdata =  JSON.parse(localStorage.getItem("Alldata"))
    setdata(newdata)
  }
  return <AuthContext.Provider value={{data,loginuser,user,logoutuser,datafun,storeuser,name,Adminpage,admin,Homepage}}>
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider