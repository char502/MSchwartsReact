function Modal(props) {
  function cancelHandler() {
    props.onCancel();
    // onCancel can be forwarded to other elements or executed (as per the above) anywhere in your components
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
