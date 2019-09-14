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
    <h1 onClick={() => onClick(section.id)}>{section.title}</h1>
    {visibleId === section.id && <section>{textBody}</section>}
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
