import { useContext } from "react"
import FormCtx from "../../FormContext"

import {
  Wrapper,
  CalWrapper
} from "./Event.styled"

import image from "../../assets/Birthday cake.png"

const EventForm = () => {
  let { info, date } = useContext(FormCtx)
  
  return (
    <Wrapper>
      <img src = {image}  alt = "cake"/>
      <div>
        <h3>{ info.event }</h3>
        <h5>Hosted By <span > { info.host } </span></h5>
      </div>
      
      <CalWrapper>
        {date.toString()}
      </CalWrapper>
    </Wrapper>
    )
}

export default EventForm;