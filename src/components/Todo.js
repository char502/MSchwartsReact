import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({ text }) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const handleDelete = (e) => {
    console.log(text);
    setmodalIsOpen(true);
  };

  function closeModalHandler() {
    setmodalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button onClick={handleDelete} className="btn">
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      {/* Can pass functions as well as values to another component using props */}
    </div>
  );
}

export default Todo;
