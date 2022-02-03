import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { VictoryPie } from "victory-pie";
import {
  Primary,
  DarkGreen,
  Red,
  DarkGray,
  Purple,
  Yellow,
} from "../../theme/colors";
import Spacer from "../spacer/Spacer";

const Root = styled.View`
  flex: 1;
  justify-content: center;
  margin-horizontal: 20px;
`;

const Category = styled.View`
  flex-direction: row;
  padding-horizontal: 20;
  border-radius: 10;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const Pressable = styled.Pressable`
  border-radius: 10px;
`;

function processChartData() {
  return [];
}

const PieChart = () => {
  const chartData = processChartData();
  // const colorScale = colors.map((item) => item.color)
  const data = [
    { x: "17%", y: 17 },
    { x: "23%", y: 23 },
    { x: "30%", y: 30 },
    { x: "House", y: 10 },
    { x: "Gifts", y: 20 },
  ];

  return (
    <Root>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <VictoryPie
          data={data}
          startAngle={130}
          endAngle={600}
          width={350}
          height={350}
          colorScale={[DarkGreen, Red, Purple, DarkGray, Yellow]}
          innerRadius={60}
          labelRadius={80}
          style={{
            labels: { fill: "white", fontSize: 14, fontWeight: "bold" },
          }}
          // events={[{
          //     target: "data",
          //     eventHandlers: {
          //         onPress: () => {
          //             target: "labels",
          //             mutation: (props) => {
          //                 let categoryName=chartData[index]
          //             }
          //         }
          //     }
          // }]}
        />

        <Pressable onPress={() => null}>
          <Category
            style={{
              backgroundColor: Yellow,
            }}
          >
            <Text>Category 1</Text>
          </Category>
        </Pressable>
        <Spacer size={"xs"} direction={"vertical"} />
        <Pressable onPress={() => null}>
          <Category
            style={{
              backgroundColor: Purple,
            }}
          >
            <Text>Category 2</Text>
          </Category>
        </Pressable>
        <Spacer size={"xs"} direction={"vertical"} />
        <Pressable onPress={() => null}>
          <Category
            style={{
              backgroundColor: DarkGreen,
            }}
          >
            <Text>Category 3</Text>
          </Category>
        </Pressable>
        <Spacer size={"xs"} direction={"vertical"} />

        <Pressable onPress={() => null}>
          <Category
            style={{
              backgroundColor: Red,
            }}
          >
            <Text>Category 4</Text>
          </Category>
        </Pressable>
        <Spacer size={"xs"} direction={"vertical"} />

        <Pressable onPress={() => null}>
          <Category
            style={{
              backgroundColor: Yellow,
            }}
          >
            <Text>Category 1</Text>
          </Category>
        </Pressable>
      </ScrollView>
    </Root>
  );
};

export default PieChart;
