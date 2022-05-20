import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Primary, DarkBlue, White } from "../../theme/colors";
import Header from "../../components/header/Header";
import PieChart from "../../components/chart/PieChart";
import Spacer from "../../components/spacer/Spacer";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import moment from "moment";
import useExpanses from "../../hooks/use-expanses/useExpanses";
import useAuth from "../../hooks/use-auth/useAuth";
import uuid from "react-native-uuid";
import { IExpense } from "../../lib/data/IExpense";

type ItemValue = number | string;

interface HomeProps<T = ItemValue> {
  salary: T | null;
}

const HomeScreen = () => {
  const [onTodayTab, setOnTodayTab] = useState(true);
  const [expansesList, setExpansesList] = useState<IExpense[] | undefined>()
  const { totalExpanses, setTotalExpanses } = useExpanses();
  const { user, setUser } = useAuth();

  const navigation = useNavigation();

  const onTabPressed = () => {
    setOnTodayTab(!onTodayTab);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUser(userId);
    } else {
      setUser(uuid.v4())
    }
  }, []);

  useEffect(() => {
    console.log(totalExpanses)
    if(localStorage.getItem('totalExpanses')){
      setTotalExpanses(localStorage.getItem('totalExpanses'))
    }
  }, [totalExpanses]);

  let dateTime = Date.now();

  return (
    <Root>
      <Header />
      <UpperContainer>
        <Title>MySalary</Title>
        <Salary>${totalExpanses || 0}</Salary> 
        <DateText>{moment().format("DD.MM.YYYY")}</DateText>
        <Spacer direction="vertical" size="l" />
        <Text>Total Expanses - {totalExpanses}</Text>
      </UpperContainer>
      <BottomContainer>
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

          <ModalWrapper isVisible={false} setIsVisible={() => null}>
            <>
              {/* <Text>Custom Modal</Text> */}
              <PieChart />
              <Spacer direction="vertical" size="xxl" />
            </>
          </ModalWrapper>
          <AddButtonContainer>
            {/* <AddButton
              onPress={() =>
                navigation.navigate("Expanses", { currentSalary: currentSalary, setCurrentSalary: setCurrentSalary })
              }
            >
              <AddImage source={require("../../../assets/images/add.png")} />
            </AddButton> */}
            <AddButton onPress={() => navigation.navigate("Expanses", {screens: "Main", params: {expansesList: expansesList}})}>
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
  z-index: 10;
  elevation: 10;
  shadow-color: black;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
  shadow-offset: {width: 0px, height: 1px}
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

const DateText = styled.Text`
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
