import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './layout/home/Index';
import About from './layout/about/Index';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
