import React from "react";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { getCategories, deleteCategory,createCategory } from "../../API/category";
import "./Category.css";

function Category() {
  const [category, setCategory] = useState([]);
  const [reload, setReload] = useState(true);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    //category.jsde fetchleyip burayı temizleyip setledik.
    getCategories().then((data) => {
      setCategory(data);
    });
    console.log(category);
    setReload(false);
  }, [reload]);

  const handleDelete = (id) => {
    //deleteCategory js kısmına ekledik ordan çektik
    //const id = event.target.id;
    deleteCategory(id).then(() => {
      setReload(true);
    });
  };

  const handleNewCategory = (event) => {
    setNewCategory({
      ...newCategory,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreate = () => {
    createCategory(newCategory).then(() => {
      setReload(true)
    })
  }

  return (
    <>
      <h1>Category</h1>
      <div className="category-inputs">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newCategory.name}
          onChange={handleNewCategory}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newCategory.description}
          onChange={handleNewCategory}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
      <div className="list">
        {category.map((category) => (
          <div key={category.id}
          >
            <h3>{category.name}
            <span id={category.id} 
            onClick = {() => handleDelete(category.id)}><DeleteIcon  /></span></h3> {category.description}
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
