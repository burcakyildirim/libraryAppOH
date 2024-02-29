import React from "react";
import { useState, useEffect } from "react";
import './Category.css'

function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });
  }, []);

  const handleDelete = (event) => {
    const id = event.target.id;
    console.log(id);
    fetch(`http://localhost:8080/v1/categories/${id}`, {
      method: "DELETE",
    }).catch((error) => {
      console.error("Error: ", error)
    })
  }

  return (
    <>
      <h1>Category</h1>
      <div className="list">
        {category.map((category) => (
          <div id = {category.id} onClick = {(e) => handleDelete(e)} key={category.id}>{category.name}</div>
        ))}
      </div>
    </>
  );
}

export default Category;
