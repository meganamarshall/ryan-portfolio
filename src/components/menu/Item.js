import React from 'react';
import PropTypes from 'prop-types';
import Links from './Links';

function Item({ item, visibleId, onClick }) {
  return (
    <section>
      <p className="title" onClick={() => onClick(item.id)}>{item.title}</p>
      {visibleId === item.id && <p className="content">{item.content ? item.content : <Links links={item.links}/>}</p>}
    </section>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Item;
