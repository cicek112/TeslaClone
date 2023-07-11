import React, { useState } from 'react'
import styled from 'styled-components'



function Section({title,backgroundImg,leftButton,rightButton}) {


  const ddd="/images/"+backgroundImg;

  
  
  
  return (
    <Wrap src={ddd}>
        <ItemText>

            <h1>{title}</h1>
            <p className='thin'>Order Online for <a href='#'>Touchless Delivery</a></p>

        </ItemText>

        <ButtonGroup>

          <LeftButton>
            {leftButton}
          </LeftButton>
          <RightButton>
            {rightButton}
          </RightButton>
        </ButtonGroup>
    </Wrap>
  )
}

export default Section




const Wrap = styled.div`
  
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: url(${props => props.src});

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction:column;

    
    
    
`

const ItemText =styled.div`
   
    padding-top:15vh;

    text-align:center;
    font-size:1.25em;
    p{
      font-size:0.90em;
      font-weight:300;
      margin-top:0.25em;
    }

    a{
      text-decoration:underline;
      
      font-weight:300;
    }

    

   
`

const ButtonGroup=styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:7.5vh;

    @media (max-width:768px){
      flex-direction:column;
    }
`


const LeftButton=styled.div`
    padding:0.75em;
    background-color:#323338;
    width:18em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px;
    margin:1em;
    font-weight:500;
    
    color:white;
    cursor:pointer;
`



const RightButton=styled(LeftButton)`
    background-color:#d8d4d4;
    color:#757575;
    
`
