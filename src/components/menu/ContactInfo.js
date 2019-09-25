import React from 'react';
import PropTypes from 'prop-types';

function ContactInfo({ section, visibleId, onClick }) {
  
  return (
    <>
      {visibleId === section.id && <section className="contact" onClick={() => onClick(section.id)}><a href="mailto:ryanalbertmiller@gmail.com">{section.content}</a><a href="http://instagram.com/ryverb"><img src={section.icon}></img></a></section>}
    </>
  );
}

ContactInfo.propTypes = {
  section: PropTypes.object.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default ContactInfo;
