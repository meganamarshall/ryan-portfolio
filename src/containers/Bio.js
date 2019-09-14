import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Texts from '../components/menu/Texts';
import BioStyled from '../styles/BioStyled';

class Bio extends Component {
  static propTypes = {
    texts: PropTypes.array.isRequired,
    section: PropTypes.object.isRequired,
    visibleId: PropTypes.number,
    onClick: PropTypes.func.isRequired
  }

  state = {
    visibleId: undefined
  }

  render() {
    return (
      <BioStyled>
        <Texts texts={this.props.texts} section={this.props.section} visibleId={this.props.visibleId} onClick={this.props.onClick} />
      </BioStyled>
    );
  }
}

export default Bio;
