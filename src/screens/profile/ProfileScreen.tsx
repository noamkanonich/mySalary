import React from "react";
import { View, Text, Button } from "react-native";
import styled from "../../../node_modules/styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Spacer from "../../components/spacer/Spacer";
import { Primary } from "../../theme/colors";

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Primary};
`;

const ProfileScreen = () => {
  const navigation = useNavigation();
  //   const route = useRoute();
  //   console.log(route.params);
  return (
    <Root>
      <Text>ADD Info, job details and more</Text>
      <Spacer size={"xxl-8"} direction="vertical" />
      <Button
        title={"Home Page"}
        onPress={() => navigation.navigate("Home")}
      />
    </Root>
  );
};

export default ProfileScreen;
