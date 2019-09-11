import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

function Texts({ texts, section }) {
  const textBody = texts.map(text => (
    <li className="text-paragraph" key={text.id} >
      <Text text={text} />
    </li>
  ));

  return (
    <>
    <h1>{section.title}</h1>
    {textBody}
    </>
  );
}

Texts.propTypes = {
  texts: PropTypes.array.isRequired,
  section: PropTypes.object.isRequired
};

export default Texts;
