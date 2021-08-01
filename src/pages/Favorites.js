import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx?.totalFavorites === 0) {
    content = <p>Nothing has been added to your favorites</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>Favorite Meetups</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
