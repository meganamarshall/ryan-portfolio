import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Texts from '../components/menu/Texts';

class Bio extends Component {
  static propTypes = {
    texts: PropTypes.array.isRequired,
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
      <Texts texts={this.props.texts} section={this.props.section} visibleId={this.state.visibleId} onClick={this.handleClick} />
    );
  }
}

export default Bio;
