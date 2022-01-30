import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import styled from "styled-components/native";

const Root = styled.SafeAreaView`
  justify-content: flex-start;
  padding: 10px 20px;
`;

const Grid = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
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

        <View>
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
        </View>
      </Grid>
    </Root>
  );
};

export default Header;
