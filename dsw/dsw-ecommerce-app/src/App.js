import './App.css';
import Navbar from './Components/Pages/Navbar';
import { Progress } from '@chakra-ui/react'
import Menubar from './Components/Pages/Menu';
import image from './img/Cont.avif';
import sneakers from './img/Sneakers.webp';
import OtherMidCont from './Components/Pages/OtherMidCont';
import SmallCont from './Components/Pages/SmallCont';
import BigPhotoCont from './Components/Pages/BigPhotoCont';
import MidPart from './Components/MidPart';
import Deals from './Components/Pages/Deals';
import OtherSmallCont from './Components/Pages/OtherSmallCont';
import NewMarkdowns from './Components/Pages/NewMarkdowns';
import VIP from './Components/Pages/VIP';
import Footer from './Components/Pages/Footer';
import ApiProd from './Components/Pages/ApiProd';
function App() {
 
  return (
    <div>
      {/* <Progress size='xs' isIndeterminate /> */}
      <Navbar />
      <Menubar/>
      <SmallCont />
      <BigPhotoCont  img={image} />
      <MidPart />
      <Deals />
      <OtherSmallCont />
      <BigPhotoCont  img={sneakers} />
      <NewMarkdowns />
      <OtherMidCont />
      <VIP />
      <Footer />
      <ApiProd />
  
    </div>
  );
}

export default App;
