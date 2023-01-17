import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import ReservationsPage from '../Pages/ReservationsPage';


describe("Booking Form", () => {


    test('User is able to submit the form with time', () => {
        const availableTimes = "17:00";

        const handleSubmit = jest.fn();
        render(<BrowserRouter>
            <ReservationsPage/>
        </BrowserRouter>);

        const timeInput = screen.getByText(/Choose time/);
        fireEvent.change(timeInput, {target: {value: availableTimes}});

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalledWith({availableTimes});
    });
});
