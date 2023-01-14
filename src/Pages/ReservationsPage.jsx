import React from 'react';
import FormBooking from "../Components/Booking/FormBooking";



function ReservationsPage(props) {

    const updateTimes = () => {

    }
    const getAvailableTimes = (data) => {
        console.log("sajjad: ", data)
    }
    return (
        <div>
            <FormBooking getAvailableTimes={getAvailableTimes}/>
        </div>
    );
}

export default ReservationsPage;
