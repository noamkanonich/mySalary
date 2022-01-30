import React from "react";
import { View, Text, Button } from "react-native";
import styled from "../../../node_modules/styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header/Header";

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #22ce99;
`;

const AddSalaryScreen = () => {
  const navigation = useNavigation();
  return (
    <Root>
      {/* <Header /> */}
      <Text>ADD SALARY</Text>
      <Button title={'Go Back To Home X'} onPress={() => navigation.goBack()}/>
    </Root>
  );
};

export default AddSalaryScreen;
