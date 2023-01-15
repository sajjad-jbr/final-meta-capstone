import React, {useReducer} from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    NumberInput,
    NumberInputField,
    Select,
    VStack,
    useToast
} from '@chakra-ui/react'

import {fetchAPI, submitAPI, updateTimes} from "../../util/api";

const widthResponsive = {
    sm: "100%",
    md: "100%",
    lg: "50%",
    xl: "50%",
    "2xl": "50%",
}

export const initializeTimes = () => {
    const data = fetchAPI(new Date())

    return data.map((item) => ({value: item, label: item}))
}

function FormBooking({ ...props}) {

    const toast = useToast()



    const handleReset = () => {
        formik.handleReset({
            dateBooking: "",
            timeBooking: "",
            numberOfPeople: "",
            occasion: ""
        });
    }

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes())

    const handleSubmitForm = (e) => {
        setAvailableTimes({
            type: "ADD_BOOKING",
            payload: e.timeBooking,
        })

        const response = submitAPI(e)
        if (response) {
            toast({
                title: 'Reservation registered.',
                description: "Your reservation has been successfully registered.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            handleReset()
        }else{
            toast({
                title: 'Reservation registered.',
                description: "error",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }

    }

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
            numberOfPeople: Yup.number().min(1, "number of guests min is 1").max(10, "number of guests max is 10").required("number of guests is required"),
            occasion: Yup.string().required(),
        }),
    })

    return (

        <VStack w="100%" p={10} alignItems="flex-start">
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
                                <option value="">
                                    Please select time
                                </option>
                                {
                                    availableTimes.map(item => <option value={item.value} key={item.value}>
                                        {item.label}
                                    </option>)
                                }
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
