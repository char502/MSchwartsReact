
import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  // console.log(loadedMeetups)
  
  // useEffect allows you to run some code under certain conditions 
  // without this, the above function runs whenever the component function runs (causing an infinite loop)
  // useEffect can restrict this and 
  // define conditions for when this code should run (so it does not always run)
  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-refresher-8da7b-default-rtdb.firebaseio.com/meetups.json')
    .then(response => {
      return response.json();
    }).then(data => {

      console.log(data)
      const meetups = [];

      for (const key in data) {
        
        const meetup = {
          id: key,
          ...data[key],
          // ...data[key] is used to access the value of the key/value pair
          // in this case the values of key (because the '...' is used)
        };

        meetups.push(meetup);
      }

      console.log(meetups)
      
      setIsLoading(false)
      setloadedMeetups(meetups)
    })
    
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
