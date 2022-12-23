import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavItem } from './Layaout.styled';

export const Layaout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="movies">Movies</NavItem>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
