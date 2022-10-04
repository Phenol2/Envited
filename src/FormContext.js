import { createContext, useState } from "react"

 const FormCtx = createContext()

export const FormProvider = ({ children }) => {
   let [event, setEvent] = useState("")
  let [host, setHost] = useState("")
  let [location, setLocation] = useState("")
  const [date, setDate] = useState(new Date())
  let [info, setInfo] = useState({})
   
  return <FormCtx.Provider value = {{
          event, 
          setEvent,
          host,
          setHost,
          location,
          setLocation,
          info,
          setInfo,
          date,
          setDate
        }} 
  >
            { children }
      </FormCtx.Provider>;
}

export default FormCtx; 