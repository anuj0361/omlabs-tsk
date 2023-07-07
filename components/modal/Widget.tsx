import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { CloseIcon, ArrowDownIcon, SettingsIcon } from "@chakra-ui/icons";

export default function Widget() {
  return (
    <div className="">
      <Grid
        gridAutoColumns={"1fr 2fr 2fr 1fr"}
        rowGap={"8px"}
        position={"relative"}
      >
        <Box minH="75px" paddingLeft={"10px"} paddingRight={"10px"}>
          <Flex
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex flexDirection={"row"}>
              <Text
                color={"white"}
                margin={0}
                fontSize={"25px"}
                padding={"10px"}
              >
                Swap
              </Text>
              <Text
                color={"#99a2c2"}
                margin={0}
                fontSize={"25px"}
                padding={"10px"}
              >
                Buy
              </Text>
            </Flex>
            <SettingsIcon boxSize={"2em"} color={"#5e6886"} />
          </Flex>
        </Box>
        <Box minH={"150px"} bg={"#121a2a"} borderRadius={"15px"}></Box>
        <div
          style={{
            position: "absolute",
            minWidth: 53,
            minHeight: 53,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#0d111c",
            padding: 6,
            borderRadius: 20,
          }}
        >
          <Flex
            textAlign={"center"}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"#121a2a"}
            minH={"52px"}
            borderRadius={"15px"}
          >
            <ArrowDownIcon boxSize={"2em"} color={"#5e6886"} />
          </Flex>
        </div>
        <Box minH={"150px"} bg={"#121a2a"} borderRadius={"15px"}></Box>
        <Box minH="86px" bg={"#1c2232"} borderRadius={"20px"}></Box>
      </Grid>
    </div>
  );
}
