import React, {useReducer, useState} from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    NumberInput,
    NumberInputField,
    Select,
    VStack,
    Button
} from '@chakra-ui/react'
const hoursBooking = [
    {title: 'place select time', value: ''},
    {title: '17:00', value: '17:00'},
    {title: '18:00', value: '18:00'},
    {title: '19:00', value: '19:00'},
    {title: '20:00', value: '20:00'},
    {title: '21:00', value: '21:00'},
    {title: '22:00', value: '22:00'},
]
const widthResponsive = {
    sm:"100%",
    md:"100%",
    lg:"50%",
    xl:"50%",
    "2xl":"50%",
}

function FormBooking({getAvailableTimes=()=>{}, ...props}) {
    // const [availableTimes, setAvailableTimes] = useState(hoursBooking);
    const reducer = (state, action) => {
        switch (action.type) {
            case "removeItem":
                let t = [...state]
                t= t.filter(item=>{
                    return item.value !== action.payload
                })
                return t;
            default:
                return state;
        }
    };

    const handleReset = ()=>{
        formik.handleReset({
            dateBooking: "",
            timeBooking: "",
            numberOfPeople: "",
            occasion: ""
        });
    }

    const handleSubmitForm = () => {
        let t = [...availableTimes]
        t= t.filter(item=>{
            return item.value !== formik.values.timeBooking
        })
        availableTimesDispatch({type:"removeItem",payload:formik.values.timeBooking})
        getAvailableTimes(t)
        handleReset()
    }
    const [availableTimes, availableTimesDispatch] = useReducer(reducer, hoursBooking);
    const formik = useFormik({
        onSubmit: handleSubmitForm,
        initialValues: {
            dateBooking: "",
            timeBooking: "",
            numberOfPeople: "",
            occasion: ""
        },
        validationSchema: Yup.object({
            dateBooking: Yup.date().required("date reservation is required"),
            timeBooking: Yup.string().required("time reservation is required"),
            numberOfPeople: Yup.number().min(1,"number of guests min is 1").max(10,"number of guests max is 10").required("number of guests is required"),
            occasion: Yup.string().required(),
        }),
    })



    return (

        <VStack w="100%" p={16} alignItems="flex-start">
            <Heading as="h1">
                Reservation Table
            </Heading>
            <Box p={6} rounded="md" w="100%">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit()
                }} style={{display: 'flex', flexWrap: 'wrap'}}>
                    <VStack w={widthResponsive} px={2}>
                        <FormControl isInvalid={formik.touched.dateBooking && formik.errors.dateBooking}>

                            <FormLabel htmlFor="firstName">Choose date</FormLabel>
                            <Input
                                type="date"
                                id="dateBooking"
                                name="dateBooking"
                                value={formik.values.dateBooking}
                                onChange={formik.getFieldProps('dateBooking').onChange}
                                onBlur={formik.getFieldProps('dateBooking').onBlur}
                            />
                            <FormErrorMessage color="red.400">
                                {formik.errors.dateBooking}
                            </FormErrorMessage>
                        </FormControl>
                    </VStack>
                    <VStack w={widthResponsive} px={2}>
                        <FormControl isInvalid={formik.touched.timeBooking && formik.errors.timeBooking}>
                            <FormLabel htmlFor="firstName">Choose time</FormLabel>
                            <Select id="res-time"
                                    name="timeBooking"
                                    value={formik.values.timeBooking}
                                    onBlur={formik.getFieldProps('timeBooking').onBlur}
                                    onChange={formik.getFieldProps('timeBooking').onChange}>
                                {availableTimes.map(item => <option value={item.value} key={item.value}>
                                    {item.title}
                                </option>)}
                            </Select>
                            <FormErrorMessage color="red.400">
                                {formik.errors.timeBooking}
                            </FormErrorMessage>
                        </FormControl>
                    </VStack>

                    <VStack w={widthResponsive} px={2}>
                        <FormControl isInvalid={formik.touched.numberOfPeople && formik.errors.numberOfPeople}>
                            <FormLabel htmlFor="numberOfPeople">Number of guests</FormLabel>
                            <NumberInput defaultValue={formik.values.numberOfPeople} min={1} max={10}
                            >
                                <NumberInputField id="numberOfPeople"
                                                  name="numberOfPeople"
                                                  value={formik.values.numberOfPeople}
                                                  onBlur={formik.getFieldProps('numberOfPeople').onBlur}
                                                  onChange={formik.getFieldProps('numberOfPeople').onChange}/>
                            </NumberInput>
                            <FormErrorMessage color="red.400">
                                {formik.errors.numberOfPeople}
                            </FormErrorMessage>
                        </FormControl>
                    </VStack>

                    <VStack w={widthResponsive} px={2}>
                        <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion"
                                    name="occasion"
                                    value={formik.values.occasion}
                                    onBlur={formik.getFieldProps('occasion').onBlur}
                                    onChange={formik.getFieldProps('occasion').onChange}>
                                <option value="">Please select occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Select>
                            <FormErrorMessage color="red.400">
                                {formik.errors.occasion}
                            </FormErrorMessage>
                        </FormControl>
                    </VStack>

                    <VStack mt={4} px={2}>
                        <Button type="submit" colorScheme='blue'>Make Your reservation</Button>
                        {/*<input type="submit" value="Make Your reservation"/>*/}
                    </VStack>








                </form>
            </Box>
        </VStack>

    );
}

export default FormBooking;
