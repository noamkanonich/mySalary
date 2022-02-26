import { View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styled, { css } from "styled-components/native";
import Spacer from "../../spacer/Spacer";

const FooterMenu = () => {
  const [tabSelected, setTabSelected] = useState("");
  return (
    <Footer>
      {/* <Tab onPress={() => setTabSelected('Home')}>
          {({pressed}: {pressed:boolean}) => {
            <Text pressed={pressed}>Home</Text>
          }}
      </Tab> */}
      {/* <Text>Profile</Text>
       */}
      <View style={{paddingHorizontal: 20}}>
        <Text>Home</Text>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <Text>Home</Text>
      </View>

      <View style={{position: 'absolute',bottom:10, left:'50%', right: '50%',marginHorizontal: 'auto', }}>
        <Image
          style={{ height: 65, width: 65 }}
          source={require("../../../../assets/images/plus.png")}
        />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text>Home</Text>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <Text>Info</Text>
      </View>
    </Footer>
  );
};

const Footer = styled.View`
height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: red;
`;

const Tab = styled.Pressable`
  background-color: white;
`;

const Text = styled.Text<{ pressed: boolean }>`
  color: ${({ pressed }: { pressed: boolean }) => (pressed ? "blue" : "white")};
`;

export default FooterMenu;
