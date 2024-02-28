import './App.css'
import { useState } from 'react'
import Category from './Pages/Category/Category'
import Publisher from './Pages/Publisher/Publisher'

function App() {
  const [page, setPage] = useState("");
  return (
    <>
    <nav>
      <span onClick = {() => setPage("publisher")}>Yayıncı</span>
      <span onClick = {() => setPage("category")}>Kategori</span>
    </nav>
    {page === "publisher" && <Publisher/>}
    {page === "category" && <Category/>}
    </>
  )
}

export default App
