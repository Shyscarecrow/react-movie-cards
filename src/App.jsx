import React, { Component } from 'react';
import { Header } from './components/Header';
import { Movies } from './components/Movie/Movies';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'React Movie Cards',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Header title={title} />
        <div className="mt-5">
          <Movies />
        </div>
      </div>
    );
  }
}
