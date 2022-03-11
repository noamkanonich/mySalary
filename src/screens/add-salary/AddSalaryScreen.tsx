import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styled from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Primary, White, Yellow } from "../../theme/colors";
import Header from "../../components/header/Header";
import Spacer from "../../components/spacer/Spacer";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddSalaryScreen = () => {
  const [selectedSalaryPeriod, setSelectedSalaryPeriod] = useState();
  const [currentSalary, setCurrentSalary] = useState<string | undefined>();

  const navigation = useNavigation();
  const route = useRoute();
  const onChange = (value: string) => {
    setCurrentSalary(value)
  }
  console.log(currentSalary)

  return (
    <Root>
      <UpperContainer>
        <>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={28} color={"black"} />
          </Pressable>
        </>
        <Spacer direction="vertical" size="xl" />
        <Title>Add Salary</Title>
      </UpperContainer>
      <BottomContainer>
        <Text>ADD SALARY</Text>
        <Spacer direction="vertical" size="xxl" />

        <View style={{ flexDirection: "row", marginHorizontal: "auto" }}>
          <View
            style={{
              height: 40,
              width: 70,
              backgroundColor: "#22ce99",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              USD
            </Text>
          </View>
          <TextInput
            placeholder="Monthly/Yearly Salary"
            keyboardType="numeric"
            style={{
              fontSize: 20,
              marginLeft: 10,
              paddingHorizontal: 20,
              borderBottomWidth: 2,
              borderBottomColor: "#000",
            }}
            onChangeText={(value:string) => onChange(value)}
          ></TextInput>
        </View>
        <Text>{currentSalary}</Text>
        <Pressable onPress={() => null}>
          <Text>Submit</Text>
        </Pressable>
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
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  margin-vertical: 10px;
  color: ${White};
`;

const UpperContainer = styled.View`
  flex: 0.2;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 10px;
`;

const BottomContainer = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${White};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  z-index: 10;
  elevation: 10;
  shadow-color: black;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
  shadow-offset: {width: 0px, height: 1px}
`;

export default AddSalaryScreen;
