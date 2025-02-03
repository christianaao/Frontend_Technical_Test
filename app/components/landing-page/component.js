import { action } from '@ember/object';
import {
  collection,
  getFirestore,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';

export default class LandingPage extends Component {
  styleNamespace = podNames['landing-page'];

  /**
   * Once there are added movies this tracked property will contain an array of
   * objects with a `data` method and `ref` property.
   *
   * The ref can be used with the firestore method `updateDoc` to update the record:
   *
   *   await updateDoc(movie.ref, { title: 'Updated Title' });
   *
   * The ref can also be used with the firestore method `deleteDoc` to delete the record:
   *
   *   await deleteDoc(movie.ref);
   *
   */

  @tracked movies;

  @tracked editingMovie = null;
  
  @tracked editMovieData = {
    title: "",
    description: "",
    rating: "",
    genre: "",
    releaseYear:""
  }

  @action async loadMovies() {
    const db = getFirestore();
    const moviesRef = collection(db, 'movies');
    const moviesSnapshot = await getDocs(moviesRef);
    const movies = [];

    moviesSnapshot.forEach((doc) => movies.push(doc));

    this.movies = movies;
  }
  
  // when user clicks "Edit" button, this function will be called and store data
  @action startEditMovie(movie) {
    this.editingMovie = movie
    
    this.editMovieData = {
      title: movie.data().title,
      description: movie.data().description,
      rating: movie.data().rating,
      genre: movie.data().genre,
      releaseYear: movie.data().releaseYear
    }
  }

  // update the field with input value
  @action updateField(field, event) {
    this.editMovieData = {
      ...this.editMovieData,
      [field]: event.target.value
    }
  }

  // when user clicks "Submit" button, movie will update with data stored in editMovieData
  @action async submitEditedMovie(event) {
    event.preventDefault()
    if(!this.editingMovie) { return; }
    await updateDoc(this.editingMovie.ref, {
      title: this.editMovieData.title,
      description: this.editMovieData.description,
      rating: this.editMovieData.rating,
      genre: this.editMovieData.genre,
      releaseYear: this.editMovieData.releaseYear
    });

    alert("Movie successfully updated.")
    this.editingMovie = null
    this.loadMovies()
  }

  @action cancelEdit() {
    this.editingMovie = null
  }
 
  @action async deleteMovie(movie) {
    if (confirm('Are you sure you want to permanently delete this movie?')) {
      await deleteDoc(movie.ref);
      alert('Movie successfully deleted.');
      this.loadMovies();
    }
  }

  constructor(owner, args) {
    super(owner, args);
    this.loadMovies();
  }
}
