function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
  /* Can pass functions as well as values to another component using props */
}

export default Backdrop;
