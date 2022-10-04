import Calendar from 'react-calendar';
import { useContext } from "react"
import FormCtx from "../../FormContext"
import "./Calender.css"

const CustomCalender = () => {
 let {date, setDate} = useContext(FormCtx)
 
  
  return (
    <div style = {{width: "80vw",}}>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );

}

export default CustomCalender