import styled from "styled-components"

export const InputWrapper = styled.div`
    width: 90vw;
    margin: 10px auto;
    
    & > label{
      display: block;
      font-family: "Shadows Into Light";
      font-weight: bolder;
      font-size: 18px;
      padding-block: 5px;
      color: #240d57;
    }
    
    & > input {
      width: 100%;
      padding: 20px 10px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 8px;
      
      ::placeholder{
        color: #ccb6ff;
      }
    }
`