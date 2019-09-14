import React from 'react';
import PropTypes from 'prop-types';

function ContactInfo({ section, visibleId, onClick }) {
  
  return (
    <>
      <h1 onClick={() => onClick(section.id)}>{section.title}</h1>
      {visibleId === section.id && <section>{section.content}</section>}
    </>
  );
}

ContactInfo.propTypes = {
  section: PropTypes.object.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default ContactInfo;
