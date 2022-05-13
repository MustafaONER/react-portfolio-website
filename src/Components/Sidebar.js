import React from 'react';
import { useGlobalContext } from '../context';
import links from './socialLinks';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <article className={`${isSidebarOpen ? 'sidebar show' : 'sidebar'}`}>
      <button className='icon close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className='sidebar-container'>
        <ul className='sidebar-links'>
          <li>
            <a href='#Projects' onClick={closeSidebar}>
              Projects
            </a>
          </li>
          <li>
            <a href='#Skills' onClick={closeSidebar}>
              Skills
            </a>
          </li>
          <li>
            <a href='#About' onClick={closeSidebar}>
              About
            </a>
          </li>
        </ul>
        <ul className='sidebar-social'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.link}
                  className='icon'
                  target='_blank'
                  rel='noreferrer'
                >
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default Sidebar;
