
import { Route, Routes,} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';

import Navbar from './components/Navbar';

import DayTours from './pages/DayTours';

function App() {

  
  return (
    <div className='mx-auto max-w-100 h-[100vh] no-scrollbar  overflow-y-auto'>
      
        <Navbar />
        <Routes>
          
        
          <Route index element={<Home />} />
          <Route path="daytours" element={<DayTours />} />
          <Route path="contact" element={<DayTours />} />
          <Route path="*" element={<DayTours />} />
        
      </Routes>
      
      
      
    </div>
  )
}

export default App
