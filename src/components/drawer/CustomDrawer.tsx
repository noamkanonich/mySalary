import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import Spacer from "../spacer/Spacer";
import { DarkGray, LightGray } from "../../theme/colors";

const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  const image = {
    uri: "https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?size=626&ext=jpg&ga=GA1.2.1453380133.1641081600",
  };

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "white" }}
      >
        <Image
          source={require("../../../assets/images/background.jpg")}
          style={{ width: "100%", height: 250 }}
        />
        <Spacer direction="vertical" size="xxl" />

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Divider />

      <BottomContainer>
        <Text>Custom Text</Text>
        <Pressable
          onPress={() => navigation.navigate("Home", { name: "Sign out" })}
        >
          <Text>Sign Out</Text>
        </Pressable>
      </BottomContainer>
    </View>
  );
};

const Root = styled.View``;

const BottomContainer = styled.View`
  padding: 16px;
`;

const Background = styled.View`
  background: linear-gradient(to top, #22ce99 0%, #020024 100%);
  height: 250px;
`;

const Divider = styled.View`
  height: 1px;
  background-color: ${DarkGray};
`;

export default CustomDrawer;
