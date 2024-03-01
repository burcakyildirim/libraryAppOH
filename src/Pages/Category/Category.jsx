import React from "react";
import { useState, useEffect } from "react";
import { getCategories,deleteCategory } from "../../API/category";
import './Category.css'

function Category() {
  const [category, setCategory] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    //category.jsde fetchleyip burayı temizleyip setledik.
    getCategories().then((data) => {
      setCategory(data)
    })
    console.log(category)
      setReload(false)
  }, [reload]);

  const handleDelete = (event) => {
    //deleteCategory js kısmına ekledik ordan çektik
    const id = event.target.id;
    deleteCategory(id).then(() => {
      setReload(true);
    })
  }

  return (
    <>
      <h1>Category</h1>
      <div className="list">
        {category.map((category) => (
          <div id = {category.id} onClick = {(e) => handleDelete(e)} key={category.id}><h4>{category.name}</h4> {category.description}</div>
        ))}
      </div>
    </>
  );
}

export default Category;