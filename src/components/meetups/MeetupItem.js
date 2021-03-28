import { useContext } from 'react'
import FavouritesContext from '../../store/favourites-context'

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {

  let favouritesCtx = useContext(FavouritesContext)

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id)

  // console.log(itemIsFavourite)

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id)
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
        // recreates this meetup item and passes it as an argument to the addFavourite function which triggers the addFavouriteHandler function in the favourites function provider component 
        // this updates the state in that component
        // which then updates all the components connected to that state
      })
    }
  }

  // console.log(props)
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'To Favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
