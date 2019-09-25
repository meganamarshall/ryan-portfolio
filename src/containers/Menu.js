import React, { Component } from 'react';
import Bio from './Bio';
import Press from './Press';
import Music from './Music';
import Contact from './Contact';
import { quotes, biography } from '../data/text';
import { sections } from '../data/sections';
import MenuStyled from '../styles/MenuStyled';

class Menu extends Component {
  state = {
    visibleId: undefined
  }

  handleClick = (id) => {
    if(id === this.state.visibleId) {
      this.setState({ visibleId: undefined });
    } else {
      this.setState({ visibleId: id });
    }
  }

  render() {
    return (
      <MenuStyled>
        <section>
          <h1 onClick={() => this.handleClick(1)} className="title">bio</h1>
          <h1 onClick={() => this.handleClick(2)} className="title">listen</h1>
          <h1 onClick={() => this.handleClick(3)} className="title">press</h1>
          <h1 onClick={() => this.handleClick(4)} className="title">contact</h1>
        </section>
        <>
          <Bio texts={biography} section={sections[0]} onClick={this.handleClick} visibleId={this.state.visibleId} />
          <Music section={sections[1]} visibleId={this.state.visibleId} onClick={this.handleClick} />
          <Press quotes={quotes} section={sections[2]} visibleId={this.state.visibleId} onClick={this.handleClick} />
          <Contact section={sections[3]} visibleId={this.state.visibleId} onClick={this.handleClick} />
        </>
      </MenuStyled>
    );
  }
}

export default Menu;
