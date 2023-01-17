import React from 'react';
import {Flex, Heading, Text} from "@chakra-ui/react";
import chef from '../Assets/images/jpg/Mario and Adrian A.jpg'

function AboutPage(props) {
    return (
        <Flex direction="column" align="center">
            <Flex direction="column" w="70%" my={6}>
                <Heading as="h2" my={4}>
                    About Us
                </Heading>
            </Flex>
            <img src={chef} alt="cheif" width="50%" style={{borderRadius: 15}}/>

            <Flex direction="column" w="70%" my={6}>
                <Text as="p" align="start">
                    Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </Text>
                <Text as="p">
                    The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items
                    that
                    they rotate seasonally.
                </Text>
                <Text as="p">
                    The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place
                    for a
                    meal any time of the day.
                </Text>
                <Text as="p">
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to
                    pursue their shared dream of owning a restaurant.
                </Text>
                <Text as="p">
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
                </Text>
                <Text as="p">
                    Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond
                    classic
                    Italian to incorporate additional cuisines from the mediterranean region.
                </Text>
            </Flex>
        </Flex>

    );
}

export default AboutPage;
