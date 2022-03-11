import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "../../../node_modules/styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Spacer from "../../components/spacer/Spacer";
import { DarkGreen, Primary, White } from "../../theme/colors";
import Header from "../../components/header/Header";
import Button from "../../components/buttons/Button";
const ProfileScreen = () => {
  const navigation = useNavigation();
  //   const route = useRoute();
  //   console.log(route.params);
  return (
    <Root>
      <Header />

      {/* <Spacer size={"xxl-8"} direction="vertical" /> */}
      <UpperContainer>
        <Title>Hey $Fullname</Title>
        <Text>asdasda</Text>
      </UpperContainer>
      <Spacer size={"xxl-2"} direction="vertical" />
      <BottomContainer>
        <ProfileDetails>
          <>
            <Label>Fullname</Label>
            <Text>Noam Kanonich</Text>
          </>
          <Spacer size="xl" direction="vertical" />
          <>
            <Label>Date bitrh</Label>
            <Text>18/03/1992</Text>
          </>
          <Spacer size="xl" direction="vertical" />
          <>
            <Label>Location</Label>
            <Text>Tel Aviv, Israel</Text>
          </>
          <Spacer size="xl" direction="vertical" />
          <>
            <Label>Current Job</Label>
            <Text>Full Stack Engineer</Text>
          </>
          <Spacer size="xl" direction="vertical" />
          <>
            <Label>Monthly Salary</Label>
            <Text>$24,000</Text>
          </>
        </ProfileDetails>
        <Spacer size={"xxl-2"} direction="vertical" />
        <SaveContainer>
          <Button
            label="Save"
            onPress={() => alert("save")}
            background={Primary}
            color="white"
          />
          <Button
            label="Cancel"
            onPress={() => navigation.goBack()}
            background={Primary}
            color="white"
            
          />
        </SaveContainer>
      </BottomContainer>
     
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Primary};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: flex-start;
  margin-vertical: 10px;
  color: ${White};
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-vertical: 4px;
  color: ${DarkGreen};
`;

const UpperContainer = styled.View`
  flex: 0.1;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

const BottomContainer = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${White};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  z-index: 1;
  z-index: 10;
  elevation: 10;
  shadow-color: black;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
  shadow-offset: {width: 0px, height: 1px}
`;

const ProfileDetails = styled.View``;

const SaveContainer = styled.View`
  flex:1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export default ProfileScreen;
