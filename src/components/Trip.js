import React from 'react'
import TripData from './TripData';
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

export default function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>
            You can discover unique destinations using Google Maps.
        </p>
        <div className='tripcard'>
            <TripData
                image={Trip1}
                heading= "Trip in Indonesia"
                text="Nisi ea sit et reprehenderit incididunt ea enim. Sunt officia sit in do amet eiusmod ea cupidatat est mollit ullamco. Nisi velit ut proident quis. Aliquip adipisicing nulla ea eu cupidatat non Lorem velit ex quis. Amet officia Lorem et in ea proident. Consequat fugiat cillum pariatur est excepteur elit cillum ullamco Lorem. Elit quis cillum elit irure duis aute nisi non commodo non adipisicing Lorem."
            />
            <TripData
                image={Trip2}
                heading= "Trip in Frane"
                text="Nisi ea sit et reprehenderit incididunt ea enim. Sunt officia sit in do amet eiusmod ea cupidatat est mollit ullamco. Nisi velit ut proident quis. Aliquip adipisicing nulla ea eu cupidatat non Lorem velit ex quis. Amet officia Lorem et in ea proident. Consequat fugiat cillum pariatur est excepteur elit cillum ullamco Lorem. Elit quis cillum elit irure duis aute nisi non commodo non adipisicing Lorem."
            />
            <TripData
                image={Trip3}
                heading= "Trip in Europe"
                text="Nisi ea sit et reprehenderit incididunt ea enim. Sunt officia sit in do amet eiusmod ea cupidatat est mollit ullamco. Nisi velit ut proident quis. Aliquip adipisicing nulla ea eu cupidatat non Lorem velit ex quis. Amet officia Lorem et in ea proident. Consequat fugiat cillum pariatur est excepteur elit cillum ullamco Lorem. Elit quis cillum elit irure duis aute nisi non commodo non adipisicing Lorem."
            />
        </div>
    </div>
  )
}
