import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const links = [
  {
    id: 1,
    iFrm: '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=786701825/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://ambitionsound.bandcamp.com/album/atrophy-torque-fly">Atrophy Torque Fly by Ryan Albert Miller</a></iframe>',
    title: 'Atrophy Torque Fly'
  }, 
  {
    id: 2,
    iFrm: '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=2690566646/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://usco.bandcamp.com/album/tuskflower">TUSKFLOWER by U SCO</a></iframe>',
    title: 'U Sco'
  },
  {
    id: 3,
    title: 'With Eyes Abstract',
    iFrm: '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1364143066/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://witheyesabstract.bandcamp.com/album/fire-at-the-library">Fire at The Library by With Eyes Abstract</a></iframe>'
  },
  {
    id: 4,
    title: 'Ryan Albert Miller',
    iFrm: '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=3979042209/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://ryanamiller.bandcamp.com/album/hex-fortunes">Hex Fortunes by Ryan A. Miller</a></iframe>'
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
