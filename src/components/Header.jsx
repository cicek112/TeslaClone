import React, { useState } from 'react'
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';

import { useSelector,useDispatch } from 'react-redux';

import {actions} from "/Users/bigbro/Desktop/kodumun kodu/realClone/realclone/src/store/index";
import { Language } from '@mui/icons-material';

function Header() {
  const [blurPx, setBlur] = useState(false)
  const [bar, setBar] = useState(false)

  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();

  
  console.log(counter)
  function sideBar(){
    setBar(!bar)
    setBlur(!blurPx)
    
    dispatch(actions.increment())
  
    
  }

  function sideBarClose(){
    setBar(!bar)
    setBlur(!blurPx)
    
    dispatch(actions.increment())
    console.log(counter)
  }
  

  return (
    <Container>

      <Logo blur={blurPx}>
        <a href="#">
          <img src="\images\logo.svg" alt="" width="125px" height="15px" />
        </a>

      </Logo>
     

      <Menu blur={blurPx}>

        <a href="#">
            Model 3
          </a>
        

        <a href="#">
          Model X
        </a>
        
        <a href="#">
          Model S
        </a>

        <a href="#">
          Model Y
        </a>

        <a href="#">
          Solar Roof
        </a>

      

      </Menu>

      <Links blur={blurPx}>
        <a className="hidden" href="#">
          Shop
        </a>
        
        <a className="hidden" href="#">
          Account
        </a>

        <a  href="#" onClick={sideBar}>
          Menu
        </a>
      </Links>

      <BurgerNav openClose={bar}>
        <p><a href="#"><CloseIcon onClick={sideBarClose} className='icon'></CloseIcon></a></p>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
        <Dil>
            <LanguageIcon>
            </LanguageIcon>
            <div >
                <h4>United States</h4>
                <h5>English</h5>
            </div>
        </Dil>
      </BurgerNav>

    </Container>
  )
}

export default Header


const Container=styled.div`
  position:fixed;
  
  width:95%;
  top:0;
  left:0;
  right:0;
  padding:1em;
  margin-left:auto;
  margin-right:auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight:500;

  z-index:+100;

`

const Logo=styled.div`
  filter:blur(${props => props.blur ?5:0 }px);
  transition:0.3s ease;
`

const Menu=styled.div`
  font-weight:500;
  margin:0;
  padding:0;
  margin-left:10%;
  display:flex;
  align-items:center;
  
  a{
    // margin:1em;
    padding:0.5em 1em;
  
  }

  

  filter:blur(${props => props.blur ?5:0 }px);
  transition:0.3s ease;

  @media (max-width:768px){
    display:none;
  }
  
  
`

const Links=styled.div`
  a{
      
    margin:0 1em;
  }

  @media (max-width:768px){
    .hidden{
      display:none;
    }
  }

  filter:blur(${props => props.blur ?5:0 }px);

  transition:0.3s ease;
`

const BurgerNav = styled.div`
    
  overflow-y: auto;
  
  position:fixed;
  right:0;
  top:0;
  bottom:0;

  width:${props=>props.openClose?22.5:0}vw;

  transition:0.5s ease;

  background-color:white;

  padding-top:3em;

  p{
    margin-bottom:1rem;
    
  }

  .icon{
    font-size:1.8em;
   
  }

  li{
    list-style:none;
    text-align:left;
    margin-left:2rem;
    margin-top:1.5rem;
    font-size:1em;
    opacity:90%;
   
  }



  @media (max-width:768px){
    width:${props=>props.openClose?60:0}vw;
    
  }

  
  
`

const Dil=styled.div`

  display:flex;
  margin-top:2em;
  margin-left:1.7em;
  margin-bottom:10em;

  div{
    
    margin-left:0.5em;
    text-align:left;


  }
  
`


