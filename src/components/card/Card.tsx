import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styled from "styled-components/native";

const Root = styled.SafeAreaView`
  background-color: #ffffff;
  border-radius: 16px;
  height: 200px;
  z-index:10;
`;


const Card = () => {
  return (
    <Root>
      <Text>sdasad</Text>
    </Root>
  );
};

export default Card;
