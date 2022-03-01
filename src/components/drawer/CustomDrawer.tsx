import { View, Text, Pressable,Image  } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerHeaderProps,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import Spacer from "../spacer/Spacer";
import { Tab } from "../../theme/typography";


const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  const image = { uri: "https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg?size=626&ext=jpg&ga=GA1.2.1453380133.1641081600" };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: 'white'}}
      >
          <Image source={require('../../../assets/images/profile.jpg')} style={{width: '100%', height: 250}} />
          <Spacer direction="vertical" size='xxl'/>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Divider/>
      
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

const Root = styled.View``

const BottomContainer = styled.View`
    padding: 16px;
`

const Text=styled.Text`
    ${Tab};
`

const Divider = styled.View`
height: 2px;
background-color: gray;
`

const Background = styled.View`
    height: 200px;
    `

export default CustomDrawer;
