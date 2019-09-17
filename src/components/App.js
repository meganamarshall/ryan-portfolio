import React from 'react';
import Header from './Header';
import Menu from '../containers/Menu';
import Widget from '../containers/Widget';

export default function App() {
  return (
    <section>
      <Header />
      <Menu />
      <Widget />
    </section>
  );
}
