import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;
  z-index: 2;
  a {
    text-decoration: none;
    color: #0008fc;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      {/* 임시로 id하나를 하드코딩할것임. 이것은 Router학습을 위한 앱이기 때문임. */}
      <Link to="/movie/37384">Movie</Link>
    </Nav>
  );
};

export default Navigation;
