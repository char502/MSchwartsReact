
import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {

  const history = useHistory();

  function addMeetupHandler(meetupData) {
    console.log(meetupData)
    fetch('https://react-refresher-8da7b-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
        // this heder makes it clear that this request carries JSON data
      }
    ).then(() => {
      history.replace('/');
      // use replace instead of history.push in order to prevent using the back button after submitting a form (which wouldn't make sense)
    });
  }

  // Some test data

  return <section>
    <h1>
      Add New Meetup
    </h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>
}

export default NewMeetupPage;
