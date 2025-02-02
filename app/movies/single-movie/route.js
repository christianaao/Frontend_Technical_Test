import Route from '@ember/routing/route';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getOwner } from '@ember/application';

export default class MoviesSingleMovieRoute extends Route {
  beforeModel() {
    const environment =
      getOwner(this).resolveRegistration('config:environment');
    console.log(
      'Initializing Firebase for single-movie route with:',
      environment.firebase,
    );
    initializeApp(environment.firebase);
  }

  async model(params) {
    const db = getFirestore();
    const movieRef = doc(db, 'movies', params.movie_id);
    const movieSnapshot = await getDoc(movieRef);

    if (movieSnapshot.exists()) {
      console.log('Single Movie Data Found: ', movieSnapshot.data());
      return { id: params.movie_id, ...movieSnapshot.data() };
    } else {
      throw new Error('Movie not found');
    }
  }

  constructor(controller, model) {
    super(controller, model);
    console.log('constructing page: ',controller, model);
  }
}
