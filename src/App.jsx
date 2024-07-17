import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Homepage></Homepage>} />
        <Route path='profile' element={<Profile></Profile>} />
      </Route>
     </Routes>
    </>
  )
}

export default App
