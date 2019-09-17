import React from 'react';
import PropTypes from 'prop-types';

function Link({ link }) {
  return (
    <iframe src={link.src} width={link.width} height={link.height} seamless><a href={link.href}>{link.a}</a></iframe>
  );
}

Link.propTypes = {
  link: PropTypes.object.isRequired
};

export default Link;
