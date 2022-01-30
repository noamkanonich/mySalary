import React from "react";
import { View, Text, Button } from "react-native";
import styled from "../../../node_modules/styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #22ce99;
`;

const ProfileScreen = () => {
  const navigation = useNavigation();
//   const route = useRoute();
//   console.log(route.params);
  return (
    <Root>
      <Text>ADD Info, job details and more</Text>
      <Button title={'Home Page'} onPress={() => navigation.goBack()}/>
    </Root>
  );
};

export default ProfileScreen;
