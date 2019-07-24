import React from 'react';
import { Header } from './components/Header';
import { Movies } from './components/Movie/Movies';

export const App = () => (
  <>
    <Header title="React Movie Cards" />
    <div className="mt-5">
      <Movies />
    </div>
  </>
);
