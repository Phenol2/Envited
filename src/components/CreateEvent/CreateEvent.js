import { useContext } from "react"
import FormCtx from "../../FormContext"
import Calender from "../Calender/Calender"
import { Link, useNavigate } from 'react-router-dom'

import {
  Wrapper,
  FormWrapper,
  Container,
} from "./CreateEvent.styled"

import { Input } from "../"

const CreateEvent = () => {
  let navigate = useNavigate()
  
  let {
      host,
      setHost,
      location,
      setLocation,
      event,
      setEvent,
      setInfo,
      info,
      date
  } = useContext(FormCtx)
  
    const handleSubmit = (e) => {
    e.preventDefault()
      setInfo({
        event,host, location, date
      })
      setLocation("")
      setEvent("")
      setHost("")
      navigate("/event")
      console.log(info)
  }
  
  return (
    <Wrapper>
      <Container>
      <h3>Create Events Easily</h3>
      <FormWrapper>
        <Input
        label = "Event Name"
        placeholder = "Enter event name..."
        onChange = {(e) => setEvent(e.target.value)}
        value = {event}
        />
        <Input
        label = "Host Name"
        placeholder = "Enter host name..."
        onChange = {(e) => setHost(e.target.value)}
        value = {host}
        />
        
        <Input
        label = "Location"
        placeholder = "Enter event location..."
        onChange = {(e) => setLocation(e.target.value)}
        value = {location}
        />
        <Calender />
        
      <Input
        type = "file"
        label = "Event Picture"
        />
        <Link 
        to = "/event"
        onClick = {handleSubmit}
        >
            NEXT
        </Link>
      </FormWrapper>
      </Container>
    </Wrapper>
    )
}

export default CreateEvent;