import React from 'react';
import {Button, Flex, Heading, Text} from "@chakra-ui/react";
import restauranfood from '../Assets/images/jpg/restauranfood.jpg'
import {useNavigate} from "react-router-dom";
import CardFood from "../Components/CardFood";
import greekSalad from '../Assets/images/jpg/greek salad.jpg'
import bruchetta from '../Assets/images/svg/bruchetta.svg'
import lemonDessert from '../Assets/images/jpg/lemon dessert.jpg'

const foods = [
    {
        name: "Greek Salad",
        price: "12.99",
        image: greekSalad,
        description: "famous crcok salad of crispy lettuce, peppers. olives and cur ChicaCo stylr teta cheese. garnished with crurv.hy garlic and rosemary croutons."
    },
    {
        name: "Bruchetta",
        price: "5.99",
        image: bruchetta,
        description: "Our gruschotta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive"
    },
    {
        name: "Lemon Dessert",
        price: "5.00",
        image: lemonDessert,
        description: "This comes gtraiCht from gra ndma•s recipe book, every last ingredient has been sourced and is as authentic as can be imaeinrci"
    },
]

function HomePage(props) {
    const navigation = useNavigate()
    return (
        <>
            <Flex w="100%" direction="column" bg="#495E57">
                <Flex minHeight="200px" pt="6" pb="8">
                    <Flex direction="column" color="white" className="main-text" w={250} textAlign="left" ml="15%">

                        <Heading as='h2' color="#C3A510">
                            Little Lemon
                        </Heading>

                        <Text fontSize='xl'>

                            Chicago
                        </Text>
                        <span>
                        We are a family owned
                        Mediterranean restaurant,
                        focused on traditional
                        recipes served with a modern
                        twist.
                    </span>

                        <Button bgColor="#F4CE14" color="black" mt="4" onClick={() => {
                            navigation('/reservations')
                        }}>
                            Reserve a Table
                        </Button>

                    </Flex>
                </Flex>

                <img src={restauranfood} id="main-image" alt="food"
                     style={{
                         borderRadius: "15px",
                         position: 'absolute',
                         right: '15%',
                         width: '300px',
                         height: '300px',
                         marginTop: "20px"
                     }}/>
            </Flex>

            <Flex wrap="wrap" mt={16} align="center" justify="center" pb={8}>
                {foods.map(food => (
                    <CardFood name={food.name} price={food.price} foodImage={food.image}
                              discription={food.description}/>
                ))}

            </Flex>
        </>

    );
}

export default HomePage;
