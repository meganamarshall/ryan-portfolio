import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Texts from '../components/menu/Texts';
import PressStyled from '../styles/PressStyled';

class Press extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    section: PropTypes.object.isRequired,
    visibleId: PropTypes.number,
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <PressStyled>
        <Texts texts={this.props.quotes} visibleId={this.props.visibleId} section={this.props.section} onClick={this.props.onClick} />
      </PressStyled>
    );
  }
}

export default Press;
