import { View, Text, Image } from "react-native";
import React from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import Spacer from '../../spacer/Spacer'
interface IMenu {
  navigation: any;
}

const MenuDrawer = ({ navigation }: IMenu) => {
  return (
    <>
      <Menu>
        <MenuTrigger>
          <Image
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
            source={require("../../../../assets/images/menu.png")}
          />
        </MenuTrigger>
        <MenuOptions  
          optionsContainerStyle={{
            marginTop: 50,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
          customStyles={{
            optionsContainer: { padding: 10 },
          }}
        >
         
          <MenuOption onSelect={() => navigation.navigate("Home")} >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../../../assets/images/home.png")}
              />
              <Spacer direction='horizontal' size='xs'/>
              <Text>Home</Text>
            </View>
          </MenuOption>

          <MenuOption onSelect={() => navigation.navigate("Salary")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../../../assets/images/plus.png")}
              />
              <Spacer direction='horizontal' size='xs'/>
              <Text>Add Salary</Text>
            </View>
          </MenuOption>

          <MenuOption onSelect={() => navigation.navigate("Profile")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../../../assets/images/user.png")}
              />
              <Spacer direction='horizontal' size='xs'/>
              <Text>Profile</Text>
            </View>
          </MenuOption>

          <MenuOption onSelect={() => navigation.navigate("Salary")}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../../../assets/images/plus.png")}
              />
              <Spacer direction='horizontal' size='xs'/>
              <Text>All Earnings</Text>
            </View>
          </MenuOption>

          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          />
        </MenuOptions>
      </Menu>
    </>
  );
};

export default MenuDrawer;
