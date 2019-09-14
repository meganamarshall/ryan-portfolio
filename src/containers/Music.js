import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Links from '../components/menu/Links';
import LinksStyled from '../styles/LinksStyled';

class Music extends Component {
  static propTypes = {
    music: PropTypes.array.isRequired,
    section: PropTypes.object.isRequired,
    visibleId: PropTypes.number,
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <LinksStyled>
        <Links links={this.props.music} section={this.props.section} visibleId={this.props.visibleId} onClick={this.props.onClick} />
      </LinksStyled>
    );
  }
}

export default Music;
