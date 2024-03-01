import React from "react";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import {
  getAuthors,
  deleteAuthors,
  createAuthors,
  updateAuthorsAPI,
} from "../../API/author";
import "./Author.css";

function Author() {
  const [author, setAuthor] = useState([]);
  const [reload, setReload] = useState(true);
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    onDate: "",
    country: "",
  });
  const [updateAuthor, setUpdateAuthor] = useState({
    name: "",
    onDate: "",
    country: "",
  });
  useEffect(() => {
    //category.jsde fetchleyip burayı temizleyip setledik.
    getAuthors().then((data) => {
      setAuthor(data);
    });
    setReload(false);
  }, [reload]);
  const handleDelete = (id) => {
    //deleteCategory js kısmına ekledik ordan çektik
    //const id = event.target.id;
    deleteAuthors(id).then(() => {
      setReload(true);
    });
  };
  const handleNewAuthor = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    });
  };
  const handleCreate = () => {
    createAuthors(newAuthor).then(() => {
      setReload(true);
    });
    setNewAuthor({
      name: "",
      onDate: "",
      country: "",
    });
  };

  const handleUpdateBtn = (aut) => {
    setUpdateAuthor({
      name: aut.name,
      onDate: aut.onDate,
      country: aut.country,
      id: aut.id,
    });
  };

  const handleUpdateChange = (event) => {
    setUpdateAuthor({
      ...updateAuthor,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = () => {
    updateAuthorsAPI(updateAuthor).then(() => {
      setReload(true);
    });
    setUpdateAuthor({
      name: "",
      onDate: "",
      country: "",
    });
  };
  return (
    <>
      <h1>Author</h1>
      <div className="author-newauthor">
        <h2>Yeni YAZAR</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newAuthor.name}
          onChange={handleNewAuthor}
        />
        <input
          type="date"
          placeholder="onDate"
          name="onDate"
          value={newAuthor.onDate}
          onChange={handleNewAuthor}
        />
        <input
          type="text"
          placeholder="country"
          name="country"
          value={newAuthor.country}
          onChange={handleNewAuthor}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
      <div className="author-updateauthor">
        <h2>Yazar Güncelle</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleUpdateChange}
          value={updateAuthor.name}
        />
        <input
          type="date"
          placeholder="onDate"
          name="onDate"
          onChange={handleUpdateChange}
          value={updateAuthor.onDate}
        />
        <input
          type="text"
          placeholder="country"
          name="country"
          onChange={handleUpdateChange}
          value={updateAuthor.country}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div className="list">
        <h2>Yazar Listesi</h2>
        {author.map((authors) => (
          <div key={authors.id}>
            <h3>
              {authors.name}
              <span id={authors.id} onClick={() => handleDelete(authors.id)}>
                <DeleteIcon />
              </span>
              <span onClick={() => handleUpdateBtn(authors)}>
                <UpdateIcon />
              </span>
            </h3>{" "}
            {authors.onDate}
            {authors.country}
          </div>
        ))}
      </div>
    </>
  );
}

export default Author;
