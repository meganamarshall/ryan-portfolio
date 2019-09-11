import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Links from '../components/menu/Links';

class Music extends Component {
  static propTypes = {
    music: PropTypes.array.isRequired,
    section: PropTypes.object.isRequired
  }

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
      <Links links={this.props.music} section={this.props.section} visibleId={this.state.visibleId} onClick={this.handleClick} />
    );
  }
}

export default Music;
