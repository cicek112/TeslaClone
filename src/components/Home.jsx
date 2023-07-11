import React, { useState } from 'react'
import styled from "styled-components"
import Section  from './Section'

import { useSelector } from 'react-redux';

function Home() {
  
  
  const counter=useSelector((state)=>state.counter);

  const blurPx=counter;

  return (
    <Container blur={blurPx}>

      <Section 
          title="Model 3" 
          backgroundImg="model-3.jpg"
          leftButton="Custom Order"
          rightButton="Existing Inventory"
          
         />

    
        

        <Section 
          title="Model X" 
          backgroundImg="model-x.jpg"
          leftButton="Custom Order"
          rightButton="Existing Inventory"
          
         />

        <Section 
          title="Model S" 
          backgroundImg="model-s.jpg"
          leftButton="Custom Order"
          rightButton="Existing Inventory"
          
         />

        <Section 
          title="Model Y" 
          backgroundImg="model-y.jpg"
          leftButton="Custom Order"
          rightButton="Existing Inventory"
          
         />
        <Section 
          title="Solar Panels" 
          backgroundImg="solar-panel.jpg"
          leftButton="Order Now"
          rightButton="Learn More"
          
         />
        
        
    </Container>
  )
}

export default Home


const Container = styled.div`
    height:100vh;
    overflow-x:hidden;

 
 
    filter:blur(${props => props.blur ?5:0 }px) brightness(${props => props.blur ?65:100 }%);
   
    transition:0.3s ease;

`