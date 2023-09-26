import {
  Route,
  Routes,
} from 'react-router-dom'
import Home from './pages/home/Home'
import HotelList from './pages/hotelList/HotelList'
import Hotel from './pages/hotel/Hotel'
import Layout from './Layout'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/hotels" element={<HotelList />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
  )
}

export default App
