import React, {useEffect} from 'react';
import greekSalad from '../Assets/images/jpg/greek salad.jpg'
import bruchetta from '../Assets/images/svg/bruchetta.svg'
import lemonDessert from '../Assets/images/jpg/lemon dessert.jpg'
import {Flex, Heading} from "@chakra-ui/react";
import CardFood from "../Components/CardFood";
import {getFoodsLIst} from '../util/foodList'
let foods = [
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
foods = foods.concat(getFoodsLIst())
function MenuPage(props) {
    return (
        <>
            <Heading as="h2" ml={32} my={4}>
                Menu
            </Heading>
            <Flex wrap="wrap" mt={16} align="center" justify="center" pb={8}>
                {foods.map(food => (
                    <CardFood name={food.name} price={food.price} foodImage={food.image}
                              discription={food.description} key={food.name}/>
                ))}

            </Flex>
        </>
    );
}

export default MenuPage;
