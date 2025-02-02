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

  @tracked editingMovie = null
  @tracked editFormData = {
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
  editForm(movie) {
    this.editForm = movie
    this.editFormData = {
      title: movie.data().title,
      description: movie.data().description,
      rating: movie.data().rating,
      genre: movie.data().genre,
      releaseYear: movie.data().releaseYear
    }
  }

  // when user clicks "Submit" button, movie will update with data stored in editFormData
  @action async submitEditedMovie(event) {
    event.preventDefault()
    if(!this.editForm) {return;}
    await updateDoc(this.editForm.ref, {
      title: this.editFormData.title,
      description: this.editFormData.description,
      rating: this.editFormData.rating,
      genre: this.editFormData.genre,
      releaseYear: this.editFormData.releaseYear
    });

    alert("Movie successfully updated.")
    this.editForm = null
    this.loadMovies()
  }

  @action cancelEdit() {
    this.editForm = null
  }
 
  async deleteMovie(movie) {
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
