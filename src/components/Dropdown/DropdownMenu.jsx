import React, { useState } from 'react';
import DropdownItem from './DropdownItem';
import { HiOutlineCog } from 'react-icons/hi';
import { AiFillCaretLeft, AiOutlineThunderbolt } from 'react-icons/ai';
import { FaChevronRight, FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css';

const DropdownMenu = () => {
  // state for csstransition
  const [active, setActive] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    // el.offsetHeight is height in pixels of that component. we use this in dropdown menu style height to set height
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div className='dropdown' style={{ height: menuHeight }}>
      {/* 
There are two dropdown containers for csstransitions component main and secondary.
we always go back to main conyainer and we use secondary as name for more container because we can style easy    
    */}
      <CSSTransition
        // if in is true then this CSSTransition component renders
        in={active === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        {/* CSSTransition component check for next element and adds transitions to that element by adding classNames we specified 
        in this component props to next element and we add css to animate
        */}
        <div className='menu'>
          <DropdownItem leftIcon={<FaUser />}>My Profile</DropdownItem>
          {/* if this item is clicked then only CSSTransition component will be triggered if active === settings as given in in prop boolean */}
          <DropdownItem
            leftIcon={<MdWork />}
            goToMenu={'settings'}
            setActive={setActive}
          >
            Tech Stack
          </DropdownItem>
          <DropdownItem
            leftIcon={<IoMdSettings />}
            goToMenu='animals'
            setActive={setActive}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={'main'}
            setActive={setActive}
          >
            <h1>Tech</h1>
          </DropdownItem>

          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            JavaScript
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>React</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === 'animals'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem
            goToMenu='main'
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon='1️⃣'>Name</DropdownItem>
          <DropdownItem leftIcon='2️⃣'>Email</DropdownItem>
          <DropdownItem leftIcon='3️⃣'>Password</DropdownItem>
          <DropdownItem leftIcon='4️⃣'>Logout</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
