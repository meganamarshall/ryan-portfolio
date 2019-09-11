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

function Links({ section }) {
  const linkList = links.map(link => (
    <p className="linksList" key={link.id} >
      <Link link={link} />
    </p>
  ));
  return (
    <>
    <h1>{section.title}</h1>
    {linkList}
    </>
  );
}

Links.propTypes = {
  section: PropTypes.object.isRequired
};

export default Links;
