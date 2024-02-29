import React from "react";
import { useState, useEffect } from "react";

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

  return (
    <>
      <h1>Category</h1>
      <div>
        {category.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </>
  );
}

export default Category;
