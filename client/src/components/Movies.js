import React, {Component} from 'react';
import { Grid, Card, Divider, Container } from 'semantic-ui-react';
import axios from 'axios';
import MovieList from './MovieList';

class Movies extends Component {
  state = { movies: [] }
  
  componentDidMount() {
    axios.get('/api/movies')
    .then( res => this.setState({ movies: res.data }) )
  }

  addMovie = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [movie, ...movies ] })
  }
  
  showMovies = () => {
    const { movies } = this.state;
    return (
      movies.map ( movie => 
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card style={styles.movieCard} className="movieCard" >
              <Card.Content>
                <Card.Header>{movie.name}</Card.Header>
                <Card.Meta>
                  <span>{movie.summary}</span>
                  <Divider />
                  <span>Released: {movie.year}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
      )
    )
  }
  
  render() {
    return(
      <Grid>
          { this.showMovies() }
      </Grid>
    )
  }
}
const styles = {
  movieCard: {
    height: '300px',
    marginBottom: '10px'
  },
}

export default Movies;