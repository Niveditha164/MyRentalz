// import React from "react";
import React, { useState, useEffect } from "react";
import TableDatePicke from "./TableDatePicker";
import data from "./data";

function MyReservation() {
  let fromLocation = [];
  let channelmode =[];
  let newrecord = [];
  let tolocation = [];
  const [record, setrecord] = useState(data);
  data.forEach((item) => {
    channelmode.push(item.bookingChannel);
  });
  channelmode=Array.from(new Set(channelmode));
 

  const [channel, setchannel] = useState(channelmode);
  const cList = channel.map((cList) => cList);
  const handlechannelChange = (e) => {
    console.clear();
    console.log(channel[e.target.value]);

    data.forEach((item) => {
      if (channel[e.target.value] == item.bookingChannel) newrecord.push(item);
      setrecord(newrecord);
    });
  };

  data.forEach((item) => {
      fromLocation.push(item.trip.location.from);
  });
  fromLocation=Array.from(new Set(fromLocation));

  const [fromLoc, setfromLoc] = useState(fromLocation);
  const fromList = fromLoc.map((fromList) => fromList);
  const handlefromLocChange = (e) => {
    console.clear();
    console.log(fromLoc[e.target.value]);

    data.forEach((item) => {
      if (fromLoc[e.target.value] == item.trip.location.from)
        newrecord.push(item);
      setrecord(newrecord);
    });
  };

  data.forEach((item) => {
    tolocation.push(item.trip.location.to);
  });
  tolocation=Array.from(new Set(tolocation));
  console.log(tolocation);

  const [toLoc, settoLoc] = useState(tolocation);
  const toList = toLoc.map((toList) => toList);
  const handletoLocChange = (e) => {
    console.clear();
    console.log(toLoc[e.target.value]);
    data.forEach((item) => {
      if (toLoc[e.target.value] == item.trip.location.to) newrecord.push(item);
      setrecord(newrecord);
    });
  };

  // var data= ReservationData();

  // var dbdata=data;
  // console.log(dbdata);
  return (
    <div id="content" className="flexColumn ">
      <h4 className="label1">Filter By :</h4>
      <div className="flexRow" style={{width:"70%",justifyContent:"space-around"}} >
        <span>
          <TableDatePicke />
        </span>
        <span>
          <select className="label0"
            onChange={(e) => handlefromLocChange(e)}
          >
            {fromList.map((address, key) => (
              <option key={key} value={key}>
                {address}
              </option>
            ))}
          </select>
        </span>
        <span>
          <select className="label0"
            onChange={(e) => handletoLocChange(e)}
          >
            {toList.map((address, key) => (
              <option key={key} value={key}>
                {address}
              </option>
            ))}
          </select>
        </span>
        <span>
          <select className="label0"
            onChange={(e) => handlechannelChange(e)}
          >
            {cList.map((address, key) => (
              <option key={key} value={key}>
                {address}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div>
        {[data].map((item, key) => (
          <li key={item.reservationId}>{item.reservationId}</li>
        ))}
      </div>
      {/* <ReservationData/> */}
      <table>
        <tr>
          <th>ReservationID</th>
          <th>FromLocation</th>
          <th>ToLocation</th>
          <th>StartTime</th>
          <th>EndTime</th>
          <th>Booking Channel</th>
        </tr>
        <tbody>
          {record.map((record, index) => {
            const { reservationId, bookingChannel, age, email } = record; //destructuring
            return (
              <tr key={reservationId}>
                <td>{reservationId}</td>
                <td>{record.trip.location.from}</td>
                <td>{record.trip.location.to}</td>
                <td>{record.trip.time.start}</td>
                <td>{record.trip.time.end}</td>
                <td>{bookingChannel}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyReservation;
