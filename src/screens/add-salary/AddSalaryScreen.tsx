import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { DarkBlue, Primary, White, Yellow } from "../../theme/colors";


const AddSalaryScreen = () => {
  const [selectedSalaryPeriod, setSelectedSalaryPeriod] = useState();

  const navigation = useNavigation();
  return (
    <Root>
      <UpperContainer>
        <Text>ADD SALARY</Text>
       
      </UpperContainer>
      <BottomContainer>
        <Text>ADD SALARY</Text>
        

        <View style={{ backgroundColor: "red", margin: 20 }}>
          <TextInput
            style={{
              padding: 10,
              borderBottomWidth: 10,
              borderBottomColor: "blue",
            }}
          />
        </View>

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
          ></TextInput>
        </View>

        {/* <Picker
          selectedValue={selectedSalaryPeriod}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedSalaryPeriod(itemValue)
          }
          style={{
            marginHorizontal: "auto",
            padding: 10,
            borderColor: Yellow,
            borderWidth: 0,
            borderBottomWidth: 3,
          }}
        >
          <Picker.Item label="Yearly" value="year" style={{ padding: 20 }} />
          <Picker.Item label="Monthly" value="month" />
        </Picker> */}
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
`;


export default AddSalaryScreen;
