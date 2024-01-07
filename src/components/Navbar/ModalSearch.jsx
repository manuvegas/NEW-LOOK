import React from "react";
import "./Modal.css"

const ModalSearch = ({ closeModal, children }) => {
  return (
    <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <div className="search-box">
        <form>
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button type="submit" className="search-button">Buscar</button>
        </form>
      </div>
      {children}
    </div>
  </div>
  );
};

export default ModalSearch;
