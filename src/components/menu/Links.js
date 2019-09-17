import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const links = [
  {
    id: 1,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=786701825/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '343px',
    href: 'http://ambitionsound.bandcamp.com/album/atrophy-torque-fly',
    a: 'Atrophy Torque Fly by Ryan Albert Miller'
  }, 
  {
    id: 4,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=3979042209/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '342px',
    href: 'http://ryanamiller.bandcamp.com/album/hex-fortunes',
    a: 'Hex Fortunes by Ryan A. Miller'
  },
  {
    id: 2,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=2690566646/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '342px',
    href: 'http://usco.bandcamp.com/album/tuskflower',
    a: 'TUSKFLOWER by U SCO'
  },
  {
    id: 6,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=2234186901/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '343px',
    href: 'http://witheyesabstract.bandcamp.com/album/wea',
    a: 'WEA by With Eyes Abstract'
  },
  {
    id: 5, 
    src: 'https://bandcamp.com/EmbeddedPlayer/album=3324194137/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '343px',
    href: 'http://partytentrecordings.bandcamp.com/album/singed-edges-burnt-ends',
    a: 'singed edges / burnt ends by Noah Bernstein, Andrew Jones, Ricardo Lagomasino, Ryan Miller'
  },
  {
    id: 3,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1364143066/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '343px',
    href: 'http://witheyesabstract.bandcamp.com/album/fire-at-the-library',
    a: 'Fire at The Library by With Eyes Abstract'
  },
  {
    id: 10,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=962893025/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '342px',
    href: 'http://newatlantisrecords.bandcamp.com/album/treffpunkt',
    a: 'Treffpunkt by U Sco'
  },
  {
    id: 7,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=2034077445/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '342px',
    href: 'http://witheyesabstract.bandcamp.com/album/return-of-the-heracleidae',
    a: 'Return of The Heracleidae by With Eyes Abstract'
  },
  {
    id: 11,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1917057191/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '342px',
    href: 'http://newatlantisrecords.bandcamp.com/album/nest',
    a: 'Nest by U Sco'
  },
  {
    id: 8,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1909102063/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/',
    width: '200px',
    height: '342px',
    href: 'http://witheyesabstract.bandcamp.com/album/synaesthesiatic-ep',
    a: 'Synaesthesiatic ep by With Eyes Abstract'
  }
];

function Links({ section, visibleId, onClick }) {
  const linkList = links.map(link => (
    <li key={link.id} >
      <Link link={link} />
    </li>
  ));
  return (
    <>
      <h1 onClick={() => onClick(section.id)}>{section.title}</h1>
      {visibleId === section.id && <ul>{linkList}</ul>}
    </>
  );
}

Links.propTypes = {
  section: PropTypes.object.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Links;
