import './App.css'
import {Route, Routes} from "react-router-dom"
import Publisher from "./Pages/Publisher/Publisher"
import Category from "./Pages/Category/Category"
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/publisher" element = {<Publisher/>} />
      <Route path = "/category" element = {<Category/>} />
    </Routes>
    </>
  )
}

export default App
