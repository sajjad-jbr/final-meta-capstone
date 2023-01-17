import React from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import delivry from '../Assets/images/png/food-delivery.png'
function CardFood({foodImage, price, name, discription, ...props}) {
    return (
        <Flex direction="column" justify="space-between" width="250px" minHeight="400px" bgColor="#EDEEEF" mx={4} my={2} pb={6}
              style={{borderRadius: '10px 10px 0 0'}}>
            <img src={foodImage} alt="food" style={{width: '100%', height: '180px', borderRadius: '10px 10px 0 0'}}/>

            <Flex alig="center" justify="space-between" mx={4} mt={2}>
                <span style={{fontWeight: "bold"}}>
                    {name}
                </span>
                <span style={{color: "#EDBBA3"}}>
                    ${price}
                </span>
            </Flex>

            <Text ml={4} mt={2}>
                {discription}
            </Text>

            <Button bg="transparent">
                Order a delivery <img src={delivry} alt="icon" width={20} height={20} style={{marginLeft:'10px'}}/>
            </Button>
        </Flex>
    );
}

export default CardFood;
