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

  useEffect(() => {
    getPublishers().then((data) => {
      setPublisher(data);
    });
    setReload(false);
  }, [reload]);

  return (
    <>
      <div className="list">
        <h2>Kategori Listesi</h2>
        {publisher.map((publishers) => (
          <div key={publishers.id}>
            <h3>{publishers.name} {publishers.id}</h3>{publishers.establishmentYear}
            
          </div>
        ))}
      </div>
    </>
  );
}

export default Publisher;
