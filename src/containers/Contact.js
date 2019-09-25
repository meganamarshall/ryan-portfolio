import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactInfo from '../components/menu/ContactInfo';
import ContactStyled from '../styles/ContactStyled';

class Contact extends Component {
  static propTypes = {
    section: PropTypes.object.isRequired,
    visibleId: PropTypes.number,
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <ContactStyled>
        <ContactInfo section={this.props.section} visibleId={this.props.visibleId} onClick={this.props.onClick} />
      </ContactStyled>
    );
  }
}

export default Contact;
