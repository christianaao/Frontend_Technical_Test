import Route from '@ember/routing/route';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getOwner } from '@ember/application';

export default class MoviesRoute extends Route {
  beforeModel() {
    const environment =
      getOwner(this).resolveRegistration('config:environment');
    console.log(
      'Initializing Firebase for movies route with:',
      environment.firebase,
    );
    initializeApp(environment.firebase);
  }

  async model() {
    const db = getFirestore();
    const moviesRef = collection(db, 'movies');
    const moviesSnapshot = await getDocs(moviesRef);

    return moviesSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }
}
