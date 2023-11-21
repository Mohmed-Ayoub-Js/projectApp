import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './layout/home/Index';
import About from './layout/about/Index';
import Monring from './layout/morning/Monring';
import Night from './layout/night/Night';
import Sleep from './layout/sleep/Sleep';
import Unsleep from './layout/Unsleep/Unsleep';
import Quran from './layout/Quran/Quran';
import Anbya from './layout/Anbya/Anbya';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/morning' element={<Monring />}/>
        <Route path='/night' element={<Night />}/>
        <Route path='/sleep' element={<Sleep />}/>
        <Route path='/Unsleep' element={<Unsleep />}/>
        <Route path='/Quran' element={<Quran />}/>
        <Route path='/Anbya' element={<Anbya />}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
