import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const links = [
  {
    id: 1,
    title: 'Atrophy Torque Fly',
    url: 'ambitionsound.bandcamp.com/releases'
  },
  {
    id: 2,
    title: 'Ryan Miller',
    url: 'ryanamiller.bandcamp.com'
  },
  {
    id: 3,
    title: 'With Eyes Abstract',
    url: 'witheyesabstract.bandcamp.com'
  },
  {
    id: 4,
    title: 'U Sco',
    url: 'usco.bandcamp.com'
  }
];

function Links({ section, visibleId, onClick }) {
  const linkList = links.map(link => (
    <p className="linksList" key={link.id} visibleId={visibleId} onClick={onClick} >
      <Link link={link} />
    </p>
  ));
  return (
    <>
      <h1 onClick={() => onClick(section.id)}>{section.title}</h1>
      {visibleId === section.id && <p>{linkList}</p>}
    </>
  );
}

Links.propTypes = {
  section: PropTypes.object.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Links;
