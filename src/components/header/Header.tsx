import React, {useState} from "react";
import { Image, Pressable } from "react-native";
import styled from "styled-components/native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Yellow, DarkBlue } from "../../theme/colors";
import MenuDrawer from "../menu/drawer/MenuDrawer";
import Drawer from "../../lib/navigation/Drawer";
import { NavigationContainer } from "@react-navigation/native";

interface HeaderProps {
  navigation: NavigationType;
}

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigation = useNavigation();
  return (
    <Root>
      <Grid>
        {/* <MenuDrawer navigation={navigation} /> */}
        <Pressable onPress={() => navigation.dispatch( DrawerActions.openDrawer())}>
          <Image
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
            source={require("../../../assets/images/menu.png")}
          />
        </Pressable>
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

const Root = styled.View`
  justify-content: flex-start;
  padding: 10px 20px;
  background-color: #22ce99;
  z-index:-10;
  elevation:-10;
 
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
