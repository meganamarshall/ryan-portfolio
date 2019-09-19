import React from 'react';
import PropTypes from 'prop-types';

function ContactInfo({ section, visibleId, onClick }) {
  
  return (
    <>
      {visibleId === section.id && <section onClick={() => onClick(section.id)}>{section.content}</section>}
    </>
  );
}

ContactInfo.propTypes = {
  section: PropTypes.object.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default ContactInfo;
