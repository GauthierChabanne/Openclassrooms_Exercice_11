import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Infos from '../pages/Infos';
import AppartementView from '../pages/AppartementView';
import Error404 from '../pages/Error404';

function Routing(){
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Infos" element={<Infos />} />
        <Route path="/appartements" element={<AppartementView />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Routing
