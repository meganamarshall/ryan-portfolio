import React from 'react';
import PropTypes from 'prop-types';

function Link({ link }) {
  return (
    <a href={link.url}>{link.title}</a>
  );
}

Link.propTypes = {
  link: PropTypes.object.isRequired
};

export default Link;
