import React from 'react';
import FormBooking from "../Components/Booking/FormBooking";
import restaurant from '../Assets/images/jpg/restaurant.jpg'
import {Flex} from '@chakra-ui/react'
function ReservationsPage(props) {

    const getAvailableTimes = (data) => {
        console.log("sajjad: ", data)
    }
    return (
        <Flex direction="column" align="center">
            <img src={restaurant} alt="restaurant" width="50%" height="300px" style={{borderRadius: 10}}/>

            <FormBooking getAvailableTimes={getAvailableTimes}/>
        </Flex>
    );
}

export default ReservationsPage;
