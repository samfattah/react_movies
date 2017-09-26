import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Header, Grid } from 'semantic-ui-react';
import MovieList from './components/MovieList';
import Movies from './components/Movies';
import axios from 'axios';
import MovieForm from './components/MovieForm';

class App extends Component {

  render() {
    return (
      <Container>
        <Header textAlign="center" as="h1">Movies!!</Header>
        <MovieForm addMovie={this.addMovie} />
        <Movies />
      </Container>
    );
  }
}

export default App;
