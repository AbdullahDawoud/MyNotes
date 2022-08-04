import React from "react";
import "./Header.scss";

import logo from '../assets/images/logo.svg';

interface Props {
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="title">My Notes</div>
      </div>
      <div className="toolbar">{children}</div>
    </header>
  );
};

export default Header;
