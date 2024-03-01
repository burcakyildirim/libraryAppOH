import React from "react";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import {
  getPublishers,
  deletePublishers,
  createPublishers,
  updatePublishersAPI,
} from "../../API/publisher";
import "./Publisher.css";
function Publisher() {
  const [publisher, setPublisher] = useState([]);
  const [reload, setReload] = useState(true);
  const [newPublisher, setNewPublisher] = useState({
    name: "",
    establishmentYear: "",
  });
  const [updatePublisher, setUpdatePublisher] = useState({
    name: "",
    establishmentYear: "",
  });

  useEffect(() => {
    getPublishers().then((data) => {
      setPublisher(data);
    });
    setReload(false);
  }, [reload]);

  const handleNewPublisher = (event) => {
    setNewPublisher({
      ...newPublisher,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreate = () => {
    createPublishers(newPublisher).then(() => {
      setReload(true);
    });
    setNewPublisher({
      name: "",
      establishmentYear: "",
    });
  };

  const handleUpdateChange = (event) => {
    setUpdatePublisher({
      ...updatePublisher,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = () => {
    updatePublishersAPI(updatePublisher).then(() => {
      setReload(true);
    });
    setUpdatePublisher({
      name: "",
      establishmentYear: "",
    });
  };
  const handleDelete = (id) => {
    //deleteCategory js kısmına ekledik ordan çektik
    //const id = event.target.id;
    deletePublishers(id).then(() => {
      setReload(true);
    });
  };
  const handleUpdateBtn = (pub) => {
    setUpdatePublisher({
      name: pub.name,
      establishmentYear: pub.establishmentYear,
      id: pub.id,
    });
  };
  return (
    <>
      <h1>Publisher</h1>
      <div className="publisher-newpublisher">
        <h2>Yeni Publisher</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newPublisher.name}
          onChange={handleNewPublisher}
        />
        <input
          type="number"
          placeholder="establishmentYear"
          name="establishmentYear"
          value={newPublisher.establishmentYear}
          onChange={handleNewPublisher}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
      <div className="publisher-updatepublisher">
        <h2>Yayımcı Güncelle</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleUpdateChange}
          value={updatePublisher.name}
        />
        <input
          type="text"
          placeholder="establishmentYear"
          name="establishmentYear"
          onChange={handleUpdateChange}
          value={updatePublisher.establishmentYear}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div className="list">
        <h2>Yayımcı Listesi</h2>
        {publisher.map((publishers) => (
          <div key={publishers.id}>
            <h3>
              {publishers.name}
              <span id={publishers.id} onClick={() => handleDelete(publishers.id)}>
                <DeleteIcon />
              </span>
              <span onClick={() => handleUpdateBtn(publishers)}>
                <UpdateIcon />
              </span>
            </h3>
            {publishers.establishmentYear}
          </div>
        ))}
      </div>
    </>
  );
}

export default Publisher;
