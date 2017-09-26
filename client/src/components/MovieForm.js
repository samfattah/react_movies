import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import axios from 'axios';


class MovieForm extends React.Component {
  state = { movies: [] }

  handleChange = (e) => {
    this.setState({ movies: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    const {name, summary, year } = this.state;
    data.append('name', name);
    data.append('summary', summary);
    data.append('year', year);
    axios.post('/api/movies', data)
      .then( res => {
        this.props.addMovie(res.data)
        this.setState({ name: '', summary: '', year: '' })
      })
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            required
            label="Movie Title"
            placeholder="Title"
            width={6}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Movie Summary"
            placeholder="Summary"
            width={6}
            value={this.state.summary}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Year of Release"
            placeholder="Year"
            width={6}
            value={this.state.year}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
        <br />
      </div>
    )
  }
}


export default MovieForm;