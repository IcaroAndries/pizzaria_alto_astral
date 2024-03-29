import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

import pizzaImage from "/public/PizzaRedonda.jpg";

const Hero: React.FC = function () {
  return (
    <HStack maxW="100%" maxH="100%" justify="flex-start" px="20em" py="5em">
      <HStack spacing="2em" align="flex-start">
        <Box
          minW="320px"
          border="0.8em solid"
          borderColor="#C8C8B4"
          borderRadius="50%"
          overflow="hidden"
        >
          <Image src={pizzaImage.src} w="320px" alt="logo de pizzaria" />
        </Box>

        <Stack w="100%" spacing="10px">
          <Text
            fontSize={"50px"}
            color={"#2f2f2f"}
            lineHeight={"55px"}
            fontWeight={"bold"}
          >
            The Best Pizza in The Western
          </Text>
          <Text fontSize={"18px"} color={"#505050"}>
            Indulge in the epitome of pizza perfection with our signature
            creation, The Western Wonder. Crafted to tantalize taste buds and
            evoke culinary ecstasy, this masterpiece starts with a hand-tossed,
            artisanal crust, perfectly crisp on the outside and delightfully
            chewy within.
          </Text>
        </Stack>
      </HStack>
    </HStack>
  );
};

export default Hero;
