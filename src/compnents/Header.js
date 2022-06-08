import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

import { useSelector } from "react-redux";
import { selectUserName } from "../features/userSlice";

export default function Header(props) {
  let navigate = useNavigate();

  const userName = useSelector(selectUserName);

  useEffect(() => {
    userName && navigate("/home");
  }, [userName]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <Logo>
        <a href="/home">
          <img src="/images/logo.svg" />
        </a>
      </Logo>
      {!userName ? (
        <Login onClick={signInWithGoogle}>LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <DisplayInitial>{userName[0]}</DisplayInitial>
            <DropDown>
              <span onClick={handleSignOut}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  letter-spacing: 10px;
  z-index: 3;
`;

const Logo = styled.a`
  margin-top: 2px;
  padding: 0px 5px;
  width: 80px;
  max-height: 70px;
  display: inline-block;
  a {
    img {
      display: block;
      width: 100%;
    }
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 15px;

  a {
    padding: 0 12px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  @media (max-width: 760px) {
    display: none;
  } ;
`;

const Login = styled.a`
  letter-spacing: 2px;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 15px;

  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #040714;
  }
`;

const DisplayInitial = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: white;
  cursor: pointer;
  text-align: center;
  width: 55px;
  position: relative;
  top: 23px;
  right: 0px;
  background: radial-gradient(#6accf6, #021e67);
  padding: 11px 7px 7px 16px;
  border-radius: 10%;
`;

const DropDown = styled.div`
  width: 120px;
  letter-spacing: 2px;
  font-weight: 600;
  padding: 5px 10px;
  margin-top: 10px;
  /* border: 0.1px solid whitesmoke; */
  border-radius: 2px;

  position: relative;
  right: 30px;

  /* background: radial-gradient(#000000, #323332); */
  background-color: #2c2c2c;
  color: #f9f9f9;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  right: 10px;
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
