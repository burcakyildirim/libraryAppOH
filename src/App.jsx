import './App.css'
import {Route, Routes} from "react-router-dom"
import Publisher from "./Pages/Publisher/Publisher"
import Category from "./Pages/Category/Category"
import Navbar from './components/Navbar'
import Author from './Pages/Author/Author'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/publisher" element = {<Publisher/>} />
      <Route path = "/category" element = {<Category/>} />
      <Route path = "/author" element = {<Author/>} />
    </Routes>
    </>
  )
}

export default App
