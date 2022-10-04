import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NavItem from './components/NavIteam/NavItem';
import DropdownMenu from './components/Dropdown/DropdownMenu';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { TbBrandMessenger } from 'react-icons/tb';
import { IoMdNotifications, IoMdMoon } from 'react-icons/io';
import './app.css';

function App() {
  return (
    <div className='app'>
      <h1 className='logo'>Dropdown Menu</h1>
      <Navbar>
        <NavItem icon={<IoMdNotifications />} />
        <NavItem icon={<IoMdMoon />} />
        <NavItem icon={<TbBrandMessenger />} />
        <NavItem icon={<AiOutlineCaretDown />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
