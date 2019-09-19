import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

function Texts({ texts, section, visibleId, onClick }) {
  const textBody = texts.map(text => (
    <li className="text-paragraph" key={text.id} onClick={onClick}>
      <Text text={text} />
    </li>
  ));

  return (
    <>
    {visibleId === section.id && <ul onClick={() => onClick(section.id)}>{textBody}</ul>}
    </>
  );
}

Texts.propTypes = {
  texts: PropTypes.array.isRequired,
  section: PropTypes.object.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Texts;
