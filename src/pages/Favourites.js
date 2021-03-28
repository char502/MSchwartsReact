import { useContext } from 'react'
import FavouritesContext from '../store/favourites-context'
import MeetupList from '../components/meetups/MeetupList'


function FavouritesPage() {

  let favouritesCtx = useContext(FavouritesContext)

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>There are no favourites yet</p>
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />
  }

  return (
    <section>
      <h1>Favourites Page</h1>
      {content}
    </section>

  )
}

export default FavouritesPage;
