import styled from "styled-components"


export const Wrapper = styled.div`
    width: 100vw;
    background-color: #f6f2ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`

export const FormWrapper = styled.form`
    width: 100%;
    margin-block: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > a{
      width: 90vw;
      text-decoration: none;
      text-align: center;
      color: white;
      letter-spacing: 0.5px;
      background-color: #240d57;
      padding-block: 20px;
      padding-inline: 150px;
      outline: none;
      border: none;
      border-radius: 8px;
      margin: 20px auto;
      font-size: 18px;
      font-weight: bold;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    }
`

export const Container = styled.div`
    width: 100%;
    margin-block: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > h3{
      color: #240d57;
      text-transform: capitalize;
    }
`