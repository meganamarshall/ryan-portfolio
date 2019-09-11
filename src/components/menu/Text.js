import React from 'react';
import PropTypes from 'prop-types';

function Text({ text }) {
  return (
    <section>
      <p className="text-p">{text.paragraph}</p>
      <p className="attribution">{text.person}{text.pub}</p>
    </section>
  );
}

Text.propTypes = {
  text: PropTypes.object.isRequired
};

export default Text;
