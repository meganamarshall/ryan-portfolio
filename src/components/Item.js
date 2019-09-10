import React from 'react';
import PropTypes from 'prop-types';

function Item({ item, visibleId, onClick }) {
  return (
    <section>
      <p onClick={() => onClick(item.id)}>{item.title}</p>
      {visibleId === item.id && <p className="content">{item.content}</p>}
    </section>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  visibleId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Item;
