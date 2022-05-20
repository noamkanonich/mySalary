import React, { Fragment, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Spacer from "../../components/spacer/Spacer";
import {
  DarkGray,
  DarkGreen,
  LightGray,
  Primary,
  White,
} from "../../theme/colors";
import Header from "../../components/header/Header";
import Button from "../../components/buttons/Button";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import { Picker } from "@react-native-picker/picker";

const ProfileScreen = () => {
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string | undefined>();
  const [onChangeBirthDate, setOnChangeBirthDate] = useState(false);
  const [birthDate, setBirthDate] = useState<string | undefined>();
  const navigation = useNavigation();
  return (
    <>
      <Root>
        <Header />

        {/* <Spacer size={"xxl-8"} direction="vertical" /> */}
        <UpperContainer>
          <Title>Hey {fullName ? fullName : "Unkown User"}</Title>
          <Text>asdasda</Text>
        </UpperContainer>
        <Spacer size={"xxl-2"} direction="vertical" />
        <BottomContainer>
          <ProfileDetails>
            <>
              <Label>Fullname</Label>
              {!onEdit && fullName && <Text>{fullName}</Text>}
              {onEdit && (
                <TextInput
                  value={fullName}
                  onChangeText={(text: string) => setFullName(text)}
                />
              )}
              {/* {fullName ? (<Text>{fullName}</Text>) : (<TextInput value={fullName} onChangeText={(text: string) => setFullName(text) }/>) */}
            </>
            <Spacer size="xl" direction="vertical" />
            <Row>
              <View>
                <Label>Date bitrh</Label>
                <Text>18/03/1992</Text>
              </View>

              <Button
                label={"Change"}
                color={DarkGray}
                onPress={() => setOnChangeBirthDate(true)}
              />
            </Row>
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
              <Label>Company</Label>
              <Text>Google</Text>
            </>
            <Spacer size="xl" direction="vertical" />
            <>
              <Label>Monthly Salary</Label>
              <Text>$24,000</Text>
            </>

            <Spacer size="xl" direction="vertical" />
            <Fragment>
              <Label>Currency</Label>
              <Picker
                selectedValue={"usd"}
                onValueChange={(itemValue: string) => null}
                style={{
                  position: "relative",
                  width: 80,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: DarkGray,
                  borderRadius: 8,
                }}
              >
                <Spacer direction="vertical" size="xl" />

                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
                <Picker.Item label="ILS" value="ILS" />
              </Picker>
            </Fragment>
          </ProfileDetails>

          <Spacer size={"xxl-2"} direction="vertical" />
          <SaveContainer>
            <Button
              label={onEdit ? "Save" : "Edit"}
              onPress={() => setOnEdit(!onEdit)}
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
      <ModalWrapper
        isVisible={onChangeBirthDate}
        setIsVisible={() => setOnChangeBirthDate(!onChangeBirthDate)}
      >
        <>
          <Text>Custom Modal</Text>
          <Text>Custom Modal</Text>
          <Text>Custom Modal</Text>
          <Text>Custom Modal</Text>
          <Text>Custom Modal</Text>
          <Text>Custom Modal</Text>

          <Spacer direction="vertical" size="xxl" />
        </>
      </ModalWrapper>
    </>
  );
};

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Primary};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: flex-start;
  margin-vertical: 10px;
  color: ${White};
`;

const Label = styled.Text`
  font-size: 18px;
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
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const TextInput = styled.TextInput`
  padding: 6px;
  border: 2px solid ${DarkGray};
  border-radius: 8px;
`;

export default ProfileScreen;
