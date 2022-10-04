import React from 'react';
import './DropdownItem.css';

const DropdownItem = (props) => {
  return (
    <>
      <a
        style={{ cursor: 'pointer' }}
        className='menu-item'
        onClick={() => props.goToMenu && props.setActive(props.goToMenu)}
      >
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
      </a>
    </>
  );
};

export default DropdownItem;
