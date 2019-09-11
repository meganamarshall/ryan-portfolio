import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Texts from '../components/menu/Texts';

class Press extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
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
      <Texts texts={this.props.quotes} visibleId={this.state.visibleId} section={this.props.section} onClick={this.handleClick} />
    );
  }
}

export default Press;
