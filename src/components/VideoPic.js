import React from 'react';
import VideoPicStyled from '../styles/VideoPicStyled';

export default function VideoPic() {
  return (
    <VideoPicStyled>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0TBhq5NltKs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <img src="/src/assets/IMG_2644.jpeg"></img>
    </VideoPicStyled>
  );
}
