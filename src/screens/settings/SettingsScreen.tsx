import { Pressable, View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { DarkBlue, DarkGreen, Primary, White } from "../../theme/colors";
import Spacer from "../../components/spacer/Spacer";
import Button from "../../components/buttons/Button";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

// interface ISettings {
//   iuser: IUser;
// }

const SettingsScreen = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <Root>
      <UpperContainer>
        <>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={28} color={"black"} />
          </Pressable>
        </>
        <Spacer direction="vertical" size="xl" />
        <Title>Settings</Title>
      </UpperContainer>
      <Spacer size={"xxl-2"} direction="vertical" />
      <BottomContainer>
        <ScrollView horizontal style={{ width: "100%" }}>
          <ScrollContainer>
            <ProfileDetails>
              <View style={{width: '100%'}}>
                <Label>Fullname</Label>
                <Text>Noam Kanonich</Text>
              </View>
              <Spacer size="xl" direction="vertical" />
              <>
                <Label>Date birth</Label>
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
          </ScrollContainer>
        </ScrollView>
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

const ProfileDetails = styled.View`
  width: 100%;
  flex-grow:1;
`;

const SaveContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ScrollContainer = styled.View`
  width: 100%;
  background: red;
`;

export default SettingsScreen;
