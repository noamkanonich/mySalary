import { View, Text, Image } from "react-native";
import React from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

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
            source={require("../../../assets/images/menu.png")}
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ height: 50, width: 30, borderRadius: 60 }}
              source={require("../../../assets/images/profile.jpg")}
            />
            <MenuOption
              onSelect={() => navigation.navigate("Home")}
              text="Home"
            />
          </View>

          <MenuOption
            onSelect={() => navigation.navigate("Profile")}
            text="Profile"
          />
          <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{ color: "red" }}>Delete</Text>
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
