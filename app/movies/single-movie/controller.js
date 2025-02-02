import Controller from '@ember/controller';
import {deleteDoc, doc, getDoc, getFirestore, updateDoc} from 'firebase/firestore';
import { action } from '@ember/object';

export default class MoviesSingleMovieController extends Controller {
      @action
      async editMovie() {
        const newTitle = prompt("Edit title: ", this.model.title);
        const newDescription = prompt("Edit description: ", this.model.description);

        if (newTitle && newDescription) {
            const db = getFirestore();
            const movieRef = doc(db, 'movies', this.model.id);
            
            await updateDoc(movieRef, {
                title: newTitle,
                description: newDescription
            });

            console.log('Movie updated: ', this.model.id);
            alert("Movie successfully updated")
      }
    }
    
        @action
        async deleteMovie(movie) {
            if (confirm("Are you sure you want to permanently delete this movie?")) {
                const db = getFirestore();
                const movieRef = doc(db, 'movies', movie.model.id);
        
                await deleteDoc(movieRef);
                console.log('Movie deleted: ', movie);
                alert("Movie successfully deleted");
            }
    }
}