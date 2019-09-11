import React from 'react';
import PropTypes from 'prop-types';
import MenuStyled from '../../styles/MenuStyled';
import Item from './Item';

function Items({ items, visibleId, onClick }) {
  const itemList = items.map(item => (
    <li className="items-list" key={item.id} >
      <Item item={item} visibleId={visibleId} onClick={onClick} />
    </li>
  ));

  return (
    <MenuStyled>
      {itemList}
    </MenuStyled>
  );
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
  visibleId: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Items;

