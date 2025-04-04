import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ setFilter }) => {
  return (
    <header className="header-container">
      <h1 className="header-title">정릉동 한눈에 보기</h1>
      <nav className="header-nav">
        <Link to ="/hospital" className="header-link">병원 모아보기</Link>
        <Link to ="/shelter" className="header-link">대피소 모아보기</Link>
        <Link to ="/restaurant" className="header-link">음식점 모아보기</Link>
        <Link to ="/facility" className="header-link">편의시설 모아보기</Link>
        <Link to ="/explore" className="header-link">정릉동 돌아보기</Link>
      </nav>
    </header>
  );
};

export default Header;
