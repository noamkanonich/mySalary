import React from "react";
import { SafeAreaView, View, Text, Image, Pressable } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Yellow, DarkBlue } from "../../theme/colors";
import MenuDrawer from "../menu/MenuDrawer";
interface HeaderProps {
  navigation: NavigationType;
}

const Header = () => {
  const navigation = useNavigation();
  return (
    <Root>
      <Grid>
        <>
          {/* <Image
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
            source={require("../../../assets/images/menu.png")}
          /> */}
          <MenuDrawer navigation={navigation} />
        </>

        <Pressable
          onPress={() => navigation.navigate("Profile", { name: "username" })}
        >
          <ProfileAvatar
            source={require("../../../assets/images/profile.jpg")}
          />
        </Pressable>
      </Grid>
    </Root>
  );
};

const Root = styled.SafeAreaView`
  justify-content: flex-start;
  padding: 10px 20px;
  background-color: #22ce99;
`;

const Grid = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ProfileAvatar = styled.Image<{ hovered: boolean }>`
  height: 60px;
  width: 60px;
  border-radius: 100;
  border: solid 5px ${DarkBlue};
`;

export default Header;
