import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());

 return (
   <div className="flexrow" >
     <DatePicker className="label0"
       selected={startDate}
       onChange={date => setStartDate(date)}
     />

     <DatePicker className="label0"
       selected={endDate}
       startDate={startDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
     />
     {/* <DatePicker
       selected={startDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       //minDate={startDate}
       onChange={date => setEndDate(date)}
     /> */}
   </div>
 );
}