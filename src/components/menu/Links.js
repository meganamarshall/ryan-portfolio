import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const links = [
  {
    id: 1,
    title: 'Atrophy Torque Fly',
    url: 'http://www.ambitionsound.bandcamp.com/releases',
    image: '../../../assets/atrophy.jpg'
  },
  {
    id: 2,
    title: 'Ryan Miller',
    url: 'http://www.ryanamiller.bandcamp.com',
    image: '../../../assets/ryansolo.jpg'
  },
  {
    id: 3,
    title: 'With Eyes Abstract',
    url: 'http://www.witheyesabstract.bandcamp.com',
    image: '../../../assets/abstract.jpg'
  },
  {
    id: 4,
    title: 'U Sco',
    url: 'http://www.usco.bandcamp.com',
    image: '../../../assets/usco.jpg'
  }
];

function Links({ section, visibleId, onClick }) {
  const linkList = links.map(link => (
    <section className="linksList" key={link.id} >
      <Link link={link} />
    </section>
  ));
  return (
    <>
      <h1 onClick={() => onClick(section.id)}>{section.title}</h1>
      {visibleId === section.id && <section>{linkList}</section>}
    </>
  );
}

Links.propTypes = {
  section: PropTypes.object.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Links;
