const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>

        <div className="body">
          {body ? body : <p>This is our modal body</p>}
        </div>

        <div className="footer">{footer ? footer : <p>This is footer</p>}</div>
      </div>
    </div>
  );
};

export default Modal;
