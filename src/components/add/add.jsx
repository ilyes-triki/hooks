import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./add.css";
function Add({ handleAdd }) {
  const [newMovie, setNewMovie] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New movie : </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              placeholder="Movie's Title"
              name="title"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <input
              placeholder="Movie's Rate"
              name="rate"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <input
              placeholder="Movie's Release Date"
              name="date"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <input
              placeholder="Movie's Description"
              name="description"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <input
              placeholder="Movie's Image Src"
              name="src"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd(newMovie);
              
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
