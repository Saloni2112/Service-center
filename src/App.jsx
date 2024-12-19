import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import MyComplain from './Pages/MyComplain'
import NewComplain from './Pages/NewComplain'
import Register from './Pages/Register'
import SingleComplain from './Pages/SingleComplain'
import Deshboard from './Pages/Deshboard'
import Navbar from './Components/Navbar'

const App = () => {
  return (
   <Router>
    <Navbar/>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/deshboard'element={<Deshboard/>}/>
      <Route path='/MyComplain'element={<MyComplain/>}/>
      <Route path='/NewComplain'element={<NewComplain/>}/>
      <Route path='/SingleComplain'element={<SingleComplain/>}/>
     </Routes>
   </Router>
  )
}

export default App
