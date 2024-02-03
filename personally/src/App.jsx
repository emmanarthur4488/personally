import './App.css'
import Navbar from './Components/Navbar/Navbar'
import DesignTools from './Components/DesignTools/DesignTools'
import DailyUpdate from './Components/DailyUpdate/DailyUpdate'
import Library from './Components/Library/Library'
import Tutorial from './Components/Tutorial/Tutorial'
import DailyDigest from './Components/DailyDigest/DailyDigest'
import DailyDigest1 from './Components/DailyDigest1/DailyDigest1'
import DailyDigest2 from './Components/DailyDigest2/DailyDigest2'
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<DesignTools/>}/>
          <Route path='/Daily Update' element={<DailyUpdate/>}/>
          <Route path='/Tutorial' element={<Tutorial/>}/>
          <Route path='/Library' element={<Library/>}/>
          <Route path='/daily digest' element={<DailyDigest/>}/>
          <Route path='/design tools' element={<DailyDigest1/>}/>
          <Route path='/design tutorials' element={<DailyDigest2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
