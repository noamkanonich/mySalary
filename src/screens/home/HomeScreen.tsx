import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import styled from "styled-components/native";
// import useLocalization from '../../lib/localization/LocalizationProvider';
import { useNavigation } from "@react-navigation/native";
import { Primary, DarkBlue, White } from "../../theme/colors";
import { TitleText, Tab } from "../../theme/typography";
import Header from "../../components/header/Header";
import PieChart from "../../components/chart/PieChart";
import Spacer from "../../components/spacer/Spacer";
import ModalWrapper from "./ModalWrapper";

type ItemValue = number | string;
interface HomeProps<T = ItemValue> {
  salary: T | null;
}

const HomeScreen = ({ salary }: HomeProps) => {
  const [onTodayTab, setOnTodayTab] = useState(true);
  const [currenySalary, setCurrenySalary] = useState(null);
  const navigation = useNavigation();

  const onTabPressed = () => {
    setOnTodayTab(!onTodayTab);
  };

  return (
    <Root>
      <UpperContainer>
        <Title>MySalary</Title>
        <Salary>$125,000</Salary>
        <Date>March 18, 2022</Date>
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

        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "flex-start",
            padding: 10,
            marginHorizontal: "auto",
          }}
        >
          <Tabs>
            <Pressable onPress={() => onTabPressed()}>
              <TabItem
                style={{
                  paddingVertical: 5,
                  borderBottomWidth: 4,
                  borderBottomColor: onTodayTab ? "#00192d" : "#fff",
                  color: onTodayTab ? "#00192D" : "#8e9aaf",
                }}
              >
                TODAY
              </TabItem>
            </Pressable>
            <Pressable onPress={() => onTabPressed()}>
              <TabItem
                style={{
                  paddingVertical: 5,
                  borderBottomWidth: 4,
                  borderBottomColor: !onTodayTab ? "#00192d" : "#fff",
                  color: !onTodayTab ? "#00192D" : "#8e9aaf",
                }}
              >
                MONTH
              </TabItem>
            </Pressable>
          </Tabs>

          <Spacer size={"xl"} direction="vertical" />

          <View style={{}}>
            {onTodayTab ? (
              <Row>
                <Text>TODAY TODAY TODAY</Text>
                <Text>Today - Jan 30, 2022</Text>
              </Row>
            ) : (
              <Row>
                <Text>MONTH MONTH MONTH</Text>
                <Text>Month - Jan 2022</Text>
              </Row>
            )}
          </View>

          <ModalWrapper isVisible={true} setIsVisible={() => null}>
            <>
                {/* <Text>Custom Modal</Text> */}
                <PieChart />
                <Spacer direction="vertical" size="xxl" />
            </>
          </ModalWrapper>
          <AddButtonContainer>
            <AddButton
              onPress={() =>
                navigation.navigate("Salary", { name: "Add Salary" })
              }
            >
              <AddImage source={require("../../../assets/images/add.png")} />
            </AddButton>
          </AddButtonContainer>
        </View>

        {/* <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: "auto", width: "100%" }}
        >  <View>
            <Spacer size={"l"} direction={"vertical"} />
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Pie Chart</Text>
            </View>
            <PieChart />
          </View> 
        </ScrollView> */}
      </BottomContainer>
    </Root>
  );
};

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
  background-color: ${White};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  z-index: 1;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  margin-vertical: 10px;
  color: ${White};
`;

const Salary = styled.Text`
  font-size: 56px;
  font-weight: 700;
  color: ${White};
`;

const Date = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${DarkBlue};
`;

const Tabs = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-vertical: 10;
  width: 100%;
`;

const TabItem = styled.Text<{ underline: boolean }>`
  font-size: 18px;
  font-weight: bold;
  line-height: 16px;
  margin-horizontal: 15px;
  border-bottom: 5px solid red;
  color: ${DarkBlue};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AddButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  
`;

const AddButton = styled.Pressable<{ hovered: boolean }>`
  height: 65px;
  width: 65px;
  background-color: ${DarkBlue};
  border-radius: 80px;
  align-self: center;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
//   background-color: ${({hovered}) => {(hovered ? 'red' : 'black')};

const AddImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 100px;
`;

export default HomeScreen;
