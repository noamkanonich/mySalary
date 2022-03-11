import React, {useState} from "react";
import { Image, Pressable,Text } from "react-native";
import styled from "styled-components/native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Yellow, DarkBlue, White } from "../../theme/colors";
import MenuDrawer from "../menu/drawer/MenuDrawer";
import Drawer from "../../lib/navigation/Drawer";
import { NavigationContainer } from "@react-navigation/native";

interface HeaderProps {
  title?: string
}

const Header = ({title}: HeaderProps) => {
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
        {title && <Title>{title}</Title>}
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

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  margin-vertical: 10px;
  color: ${White};
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
