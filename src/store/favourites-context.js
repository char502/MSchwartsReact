import { createContext, useState } from 'react';

// the arg in createContext(?) is the initial value for this context
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {}

});

// Provides context to all components that need these values
// Will also be responsible for updating the conext values
export function FavouritesContextProvider(props) {

  const [userFavourites, setuserFavourites] = useState([]);

  // console.log(userFavourites)

  function addFavouriteHandler(favouriteMeetup) {
    setuserFavourites(prevUserFavourites => {
      return prevUserFavourites.concat(favouriteMeetup);
    })
  }
  // Use prevState when need to rely on the previous state for function to update correctly, this will ensure React executes state snapshots in the correct order
  // The latest state snapshot


  function removeFavouriteHandler(meetupId) {
    setuserFavourites(prevUserFavourites => {
      return prevUserFavourites.filter(meetup => meetup.id !== meetupId)
    })
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler

  };

  return <FavouritesContext.Provider value={context}>  
    {props.children}
  </FavouritesContext.Provider>
  // this is a component built in to FavouritesContext (through createContext)
  // this needs to be wrapped around all components that are interested in interacting with that context
}

export default FavouritesContext;