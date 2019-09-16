import React from 'react';
import PropTypes from 'prop-types';

function Link({ link }) {
  return (
    <li className="one-link">
      <img className="albumCover" dangerouslySetInnerHTML={link.iFrame}></img>
      <a href={link.url}>{link.title}</a>
    </li>
  );
}

Link.propTypes = {
  link: PropTypes.object.isRequired
};

export default Link;
