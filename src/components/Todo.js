import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const { title } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDeleteClick = () => setModalIsOpen(true);
  const closeModalHandler = () => setModalIsOpen(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions" onClick={handleDeleteClick}>
        <button className="btn">Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
