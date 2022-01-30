import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import styled from "../../../node_modules/styled-components/native";
// import useLocalization from '../../lib/localization/LocalizationProvider';
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header/Header";
// import Card from "../../components/card/Card";
import CustomModal from "../../components/modal/CustomModal";

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #22ce99;
`;

const UpperContainer = styled.View`
  flex: 0.25;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

const BottomContainer = styled.View`
  flex: 0.75;
  background-color: #ffffff;
  border-radius: 20px;
  margin-bottom: -20px;
  z-index:1;
`;

const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    align-self: center;
    margin-vertical: 10px;
`

const Salary = styled.Text`
    font-size: 50px;
    font-weight: 700;
`

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Root>
      <Header />
      <UpperContainer>
        <Title>MySalary</Title>
        <Salary>$125,000</Salary>
        <Text>March 18, 2022</Text>
      </UpperContainer>
      <BottomContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "column", marginHorizontal: "auto" }}>
            <Text >TODAY MONTH</Text>
            <Text>Today - Jan 30, 2022</Text>
            <Text>Month - Jan 2022</Text>
            <Text>Hourly Earn - $34.12</Text>
            <Text>Daily Earn - $414.8</Text>
            <Text>Pensia Earn - </Text>
          </View>
          <View>
            <Text style={{ marginHorizontal: 150 }}>Diagram</Text>
          </View>
        </ScrollView>
        <CustomModal />

      </BottomContainer>

    </Root>
  );
};

export default HomeScreen;
