import './App.css';
import Menubar from './Components/Pages/Menu';
import image from './img/Cont.avif';
import sneakers from './img/Sneakers.webp';
import OtherMidCont from './Components/Pages/OtherMidCont';
import BigPhotoCont from './Components/Pages/BigPhotoCont';
import MidPart from './Components/MidPart';
import Deals from './Components/Pages/Deals';
import OtherSmallCont from './Components/Pages/OtherSmallCont';
import NewMarkdowns from './Components/Pages/NewMarkdowns';
import VIP from './Components/Pages/VIP';
import Footer from './Components/Pages/Footer';
import ApiProd from './Components/Pages/ApiProd';
import { useEffect, useState } from 'react';
import SkeletonFun from './Components/Pages/Skeleton';
import Progressfun from './Components/Pages/Progress';
function Homepage() {
 const [progress,setprogress] = useState(false)

 useEffect(()=>{
    setTimeout(()=>{
setprogress(true)
    },3000)
 },[])


  return progress?<div>
      {/* <Progress size='xs' isIndeterminate /> */}
     
      <Menubar/>
     
      <BigPhotoCont  img={image} />
      <MidPart />
      <Deals />
      <OtherSmallCont />
      <BigPhotoCont  img={sneakers} />
      <NewMarkdowns />
      <OtherMidCont />
      <VIP />
      <ApiProd />
      <Footer />
  
    </div>:<div>

        <SkeletonFun />
       
    </div>

}

export default Homepage;
