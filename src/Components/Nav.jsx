import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.scss"

export default function NavBarr() {
  
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const handleHome = ()=> history.push("/");
  const handleLike = ()=> {
    const id= user.result._id;
    history.push(`/favorites/${id}`);
  
  }
  const handleCategory= ()=> history.push("/postListing");
  const handleAbout =  ()=> history.push("/aboutus");
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const logout = () => {
    
    history.push("/");
    setUser(null);
    setAnchorEl(null);
  };
  const HandleProfile = () => {
   const id= user.result._id;
   console.log(id);
    history.push(`/profile/${id}`);
    setAnchorEl(null);
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    
  };
  const handleAccount = () => {
    const id= user.result._id;
    history.push(`/myaccount/${id}`);
    setAnchorEl(null);
    
  }; 
  const handlesignin = () => {
    history.push("/Auth");
  }
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 800
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  

  
  const displayDesktop = () => {
  return (
    <div>
    <Nav>
    
    </Nav>
    
    </div>
  );};
  const displayMobile = () => {
    
      return (
        <>
        <Nav>
          
          <LogoDiv>
        <NavMenuLogo>
        <Logo src="/images/logo.png" />
        </NavMenuLogo>
      <LogoText>Holicloset</LogoText>
    </LogoDiv>
    </Nav>
  {user ? (
    <>
    <input type="checkbox" id="overlay-input"/>
          <label for="overlay-input" id="overlay-button"><span></span></label>
    <div id="overlay">
      <ul>
      <li><a onClick={handleHome}>Home</a></li>
      <li><a onClick={handleCategory}>Categories</a></li>
      <li><a onClick={handleAbout}>About us</a></li>
      <li><a onClick={handleLike}>Favourites</a></li>
      <li><a onClick={handleAccount}>My Account</a></li>
      <li><a onClick={HandleProfile}>My Profile</a></li>
      <li><a onClick={logout}>Sign out</a></li>
      </ul>
      </div>
      
      </>
  ):(
    <>
    <input type="checkbox" id="overlay-input"/>
          <label for="overlay-input" id="overlay-button"><span></span></label>
    <div id="overlay">
    <ul>
      <li><a onClick={handleHome}>Home</a></li>
      <li><a onClick={handleCategory}>Categories</a></li>
      <li><a onClick={handleAbout}>About us</a></li>
      <li><a onClick={handlesignin}>Sign in</a></li>
    </ul>
    </div>
    
    </>

  )
  }
  
  </>
  );
    };
    return (
      
        
        <>
          {mobileView ? displayMobile() : displayDesktop()}
        </>
        
      
    );
}

const Nav = styled.nav`
height: 45px;
width: 100%;
display: flex;
align-items: center;
padding: 0px 23px;
overflow: hidden;
background: #000000;
border: 2px solid #000000;
box-sizing: border-box;
color: white;

`
const NavMenu = styled.div`
display: flex;
flex: 1;
align-items: center;
color: white;
background: #000000;
a{
    display: flex;
    align-items: centre;
    padding: 0 12px;
    cursor: pointer;
    font-family: Poppins;
    font-style: normal;
    background: #000000;
    span {
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 1.42px;
        position: relative;
        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transfrom-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);

        }

    }
    &:hover{
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
}

` 
const NavMenuMobile = styled.div`
display: flex;
flex-direction: column;
color: white;
background: #000000;
margin-top: 60px;
a{
    display: flex;
    align-items: centre;
    padding: 0 12px;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
    font-family: Poppins;
    font-style: normal;
    background: #000000;
    span {
        font-size: 16px;
        font-weight: normal;
        letter-spacing: 1.42px;
        position: relative;
        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transfrom-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);

        }

    }
    &:hover{
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
}

` 
const UserImg = styled.img `
    width: 48px;
    height: 48px;
    padding: 6px 4px 5px 5px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 100px;

`
const Icons = styled.div`
margin-right: 10px;
align: center;
  i{
    width: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
`
const IconsMobile= styled.div`
margin-left: 90px;
align: center;
  img{
    width: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
 
  @media screen and (min-width: 320px) {
    flex: 1;
  }

`
const LogoDiv = styled.div`
 display: flex;
 flex-direction: row;
`
const NavMenuLogo = styled.div`
margin-top: 10px;


`
const Logo = styled.img`
    width: 30px;
    
`
const LogoText = styled.h1`
    color:white;
    margin-left:5px;
    font-family: Poppins;
    font-size: 20px;
    margin-top: 10px;

`