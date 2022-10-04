import styled from "styled-components"
import { NavLink } from "react-router-dom"




export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #f6f2ff;
    
    & > h1{
      width: 60%;
      text-align: center;
      color: #240d57;
      
      & > span{
        display: block;
        background: -webkit-linear-gradient(#8456ec, #e87bf8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    
    & > p{
      width: 68%;
      font-size: 14px;
      font-weight: 300;
      padding-block:  30px 5px;
      color: #240d57;
    }
    
    & > img{
      width: 50%;
      margin-block: 25px;
    }
    
`

export const StyledLink = styled(NavLink)`
      width: 55%;
      padding: 15px 5px;
      background: linear-gradient(to right, #8456ec, #e87bf8);
      border: none;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      text-decoration: none;
`