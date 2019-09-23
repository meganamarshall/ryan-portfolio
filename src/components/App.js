import React from 'react';
import Header from './Header';
import Menu from '../containers/Menu';
import Widget from './Widget';
import VideoPic from './VideoPic';

export default function App() {
  return (
    <section>
      <Header />
      <Menu />
      <VideoPic />
      <Widget />
    </section>
  );
}
