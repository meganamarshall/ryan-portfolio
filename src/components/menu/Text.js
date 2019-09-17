import React from 'react';
import PropTypes from 'prop-types';

function Text({ text }) {
  return (
    <>
      {text.paragraph && <p className="text-p">{text.paragraph}</p>}
      {text.image && <img src={text.image}></img>}
      {text.person && <p className="attribution">- {text.person}, {text.pub}</p>}
    </>
  );
}

Text.propTypes = {
  text: PropTypes.object.isRequired
};

export default Text;
