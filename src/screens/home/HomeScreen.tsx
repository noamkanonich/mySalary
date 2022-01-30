import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import styled from "../../../node_modules/styled-components/native";
// import useLocalization from '../../lib/localization/LocalizationProvider';
import { useNavigation } from "@react-navigation/native";
import { Primary, DarkBlue } from "../../theme/colors";
// import {TitleText} from '../../theme/typography';
import Header from "../../components/header/Header";
import PieChart from "../../components/chart/PieChart";
const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Primary};
`;

const UpperContainer = styled.View`
  flex: 0.3;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

const BottomContainer = styled.View`
  flex: 0.7;
  background-color: #ffffff;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  z-index: 1;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  margin-vertical: 10px;
`;

const Salary = styled.Text`
  font-size: 50px;
  font-weight: 700;
`;

const AddButton = styled.Pressable`
    height: 80px;
    width: 80px;
    background-color: ${DarkBlue};
    border-radius:80px;
    align-self:center;
    align-items: center;
    justify-content: center;
    z-index:10;
`
const AddImage = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 100px;
`

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Root>
      <UpperContainer>
        <Title>MySalary</Title>
        <Salary>$125,000</Salary>
        <Text>March 18, 2022</Text>
      </UpperContainer>
      <BottomContainer>
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "column", marginHorizontal: "auto" }}>
            <Text>TODAY MONTH</Text>
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
        <AddButton
          onPress={() => navigation.navigate("Salary", { name: "Add Salary" })}
        >
          <AddImage
            source={require("../../../assets/images/add.png")}
          />
        </AddButton> */}
        <PieChart/>
      </BottomContainer>
    </Root>
  );
};

export default HomeScreen;
