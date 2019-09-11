import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bio from './Bio';
import Press from './Press';
import Music from './Music';
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
        <Bio texts={biography} section={sections[0]} onClick={this.handleClick} visibleId={this.state.visibleId} />
        <Music music={biography} section={sections[1]} visibleId={this.state.visibleId} onClick={this.handleClick} />
        <Press quotes={quotes} section={sections[2]} visibleId={this.state.visibleId} onClick={this.handleClick} />
      </MenuStyled>
    );
  }
}

export default Menu;
