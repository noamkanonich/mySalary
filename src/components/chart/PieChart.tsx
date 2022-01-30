import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styled from "styled-components/native";
import { VictoryPie } from "victory-pie";
import { PiChartRed } from "../../theme/colors";

const Root = styled.View`
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function processChartData() {
  return [];
}

const PieChart = () => {
  const chartData = processChartData();
  // const colorScale = colors.map((item) => item.color)
  const data = [
    { x: "Business", y: 17 },
    { x: "Fun", y: 23 },
    { x: "Gas", y: 30 },
    { x: "House", y: 5 },
    { x: "Gifts", y: 25 },
  ];

  return (
    <Root>
      <VictoryPie
        data={data}
        startAngle={130}
        endAngle={600}
        innerRadius={60}
        width={350}
        height={350}
        colorScale={["red", "green", "yellow", "purple", "blue"]}
      />
    </Root>
  );
};

export default PieChart;
