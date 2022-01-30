import React from "react";
import { SafeAreaView, View, Text, Image, Pressable } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  navigation: NavigationType;
}

const Root = styled.SafeAreaView`
  justify-content: flex-start;
  padding: 10px 20px;
  background-color: #22ce99;
`;

const Grid = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
  const navigation = useNavigation();
  return (
    <Root>
      <Grid>
        <View>
          <Image
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
            source={require("../../../assets/images/menu.png")}
          />
        </View>

        <Pressable onPress={() => navigation.navigate("Profile", {name: "username"})}>
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 100,
              borderWidth: 5,
              borderColor: "#00192D",
            }}
            source={require("../../../assets/images/profile.jpg")}
          />{" "}
        </Pressable>
      </Grid>
    </Root>
  );
};

export default Header;
