import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';

export default class MovieListItem extends Component {
  styleNamespace = podNames['movie-list/movie-list-item'];

  get movie() {
    console.log(this.args.movie.data());
    return this.args.movie.data();
  }
}
