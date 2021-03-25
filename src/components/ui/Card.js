import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
  // children always holds the content which is passed between the opening and closing component tags
}

export default Card;
