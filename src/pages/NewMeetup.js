import React from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
export const realtimeDatabaseURL =
  'https://react-meetup-88947-default-rtdb.firebaseio.com/';

export default function NewMeetupPage() {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(realtimeDatabaseURL + 'meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((realtimeData) => {
      console.log({ realtimeData });
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
