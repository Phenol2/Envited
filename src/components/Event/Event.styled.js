import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100vw;
    
    
    & > img{
      width: 100%;
    }
    
  & > div:nth-child(1){
      padding: 15px;
      line-height: 24px;
    
   & > h5{
      font-size: 12px;
      font-weight: 500;
      color: #bdbdbd;
      
      & > span{
        font-weight: bold;
        color: #828282;
      }
    }
    
  & > h3{
      color: #240d57;
    }
  }
  
  }
`

export const CalWrapper = styled.div`
    width: 70%; 
`

