import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import styled from "styled-components";
import { Drawer} from "@material-ui/core";


export default function Nav() {
const history = useHistory();
const handleHome = ()=> history.push("/");
const handleCreate = ()=> history.push("/addpost");
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

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
    <NavBar>
      <Logo><img src="/images/logo.png" width="60px" height="35px"/></Logo>
    <NavMenu>
    <a onClick={handleHome}>
      <span>Posts</span>
    </a>
    <a onClick={handleCreate}>
      <span>Create</span>
    </a>
    <a>
      <span>Q&A</span>
    </a>
    <a>
      <span>Downloads</span>
    </a>
    <a>
      <span>Careers</span>
    </a>
    </NavMenu>
    
    
    </NavBar>
    
    
    </div>
  );};
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
      return (
        <div>
        <NavBar> 
         <a onClick={handleDrawerOpen}> <i class="fa fa-bars" aria-hidden="true" ></i></a>

           <div>
         <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <Sidebar>
            <NavMenuMobile>              
          <a onClick={handleHome}>
          <span>Posts</span>
           </a>
           <a onClick={handleCreate}>
              <span>Create</span>
           </a>
           <a>
          <span>Services</span>
          </a>
          <a>
      <span>Q&A</span>
    </a>
    <a>
      <span>Downloads</span>
    </a>
    <a>
      <span>Careers</span>
    </a>
           
           </NavMenuMobile>
           </Sidebar>
           </Drawer> 
       </div>

    
    </NavBar>
    
    </div>
      );
    };
    return (
      
        
        <>
          {mobileView ? displayMobile() : displayDesktop()}
        </>
        
      
    );
}

const NavBar = styled.nav`
height: 45px;
width: 100%;
display: flex;
align-items: center;
padding: 0px 23px;
overflow: hidden;
background: #222222;
border: 2px solid #222222;
box-sizing: border-box;
color: white;

`
const Logo = styled.h2`

`
const Sidebar = styled.div`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 200px;
  color: white;
  background-color: #222222;
`
const NavMenu = styled.div`
display: flex;
margin-left: 2%;
flex: 1;
color: white;
background: #222222;
a{
    display: flex;
    align-items: centre;
    padding: 0 12px;
    cursor: pointer;
    font-family: Poppins;
    font-style: normal;
    background: #222222;
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
background:#222222;
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
    background: #222222;
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

