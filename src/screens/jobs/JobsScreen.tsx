import { Pressable,View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { DarkBlue, Primary, White } from "../../theme/colors";
import Spacer from "../../components/spacer/Spacer";
import Button from "../../components/buttons/Button";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IJobs {
  id: string | number;
  jobTitle: string;
  jobPlace: string;
  yearlySalary: string;
  currency: string;
  location: string;
  startingDate: Date;
}

const jobs = [
  {
    id: "1",
    jobTitle: "Full-Stack Engineer",
    jobPlace: "Google",
    yearlySalary: "120,000",
    currency: "dollar",
    location: "Tel-Aviv, Israel",
    startingDate: new Date("20/11/21"),
  },
  {
    id: "2",
    jobTitle: "Product Manager",
    jobPlace: "Facebook",
    yearlySalary: "160,000",
    currency: "dollar",
    location: "Los Angeles, United States",
    startingDate: new Date("20/11/21"),
  },
  {
    id: "3",
    jobTitle: "Sales Manager",
    jobPlace: "NIVIDIA",
    yearlySalary: "90,000",
    currency: "dollar",
    location: "Miami, United States",
    startingDate: new Date("20/11/21"),
  },
  {
    id: "4",
    jobTitle: "Lawyer",
    jobPlace: "Kanonich and Co",
    yearlySalary: "150,000",
    currency: "dollar",
    location: "Lodon, United Kindom",
    startingDate: new Date("20/11/21"),
  },
];

const JobsScreen = ({
  jobTitle,
  jobPlace,
  yearlySalary,
  currency,
  location,
  startingDate,
}: IJobs) => {
  const [jobSelected, setJobSelected] = useState<IJobs | undefined>(jobs[0]);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <Root>
      <UpperContainer>
        <>
          <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={28} color={'black'} />
          </Pressable>
        </>
        <Title>Recent Jobs</Title>
      </UpperContainer>
      <BottomContainer>
      <Spacer direction="vertical" size="xl" />
      <SubTitle>Recent Jobs</SubTitle>
        <Spacer direction="vertical" size="s" />
        <ListContainer>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={jobs}
            renderItem={({ item }: { item: IJobs }) => {
              return (
                <>
                  <JobContainer
                    key={item.id}
                    onPress={() => setJobSelected(item)}
                  >
                    <JobTitle>{item.jobPlace}</JobTitle>
                  </JobContainer>
                  <Spacer direction="horizontal" size="l" />

                </>
              );
            }}
          />
        </ListContainer>
        <Spacer direction="vertical" size="xxl-2" />
        <JobDetails>
          <SubTitle>Current Job</SubTitle>
          <Spacer direction="vertical" size="s" />
          <Text>{jobSelected?.jobPlace}</Text>
          <Spacer direction="vertical" size="xs" />
          <Text>{jobSelected?.jobTitle}</Text>
          <Spacer direction="vertical" size="xs" />
          <Text>{jobSelected?.location}</Text>
        </JobDetails>

        <ButtonsContainer>
          <Button
            label="Add New Job"
            onPress={() => setVisible(!visible)}
            background={Primary}
            color={White}
          />
        </ButtonsContainer>
      </BottomContainer>
      <ModalWrapper isVisible={visible} setIsVisible={() => setVisible(!visible)}>
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

const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${DarkBlue};
`;

const UpperContainer = styled.View`
  flex: 0.2;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 10px;
`;

const BottomContainer = styled.View`
  flex: 1;
  background-color: ${White};
  padding: 20px;

  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  
  shadow-color: black;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
  shadow-offset: {width: 0px, height: 1px}
`;

const ListContainer = styled.View`
  height: 140px;
  flex-direction: row;
`;

const JobContainer = styled.Pressable`
  width: 200px;
  padding: 20px;
  border-radius: 16px;
  background-color: ${Primary};
  z-index: 10;
  elevation: 10;
  shadow-color: black;
  shadow-opacity: 0.5;
  shadow-offset: {width: 0px, height: 1px}

`;

const JobDetails = styled.View`
  flex: 1;
  justify-content: flex-start;
`;


const JobTitle = styled.Text`
font-size: 20px;
font-weight: bold;
color: ${White};
`;

const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export default JobsScreen;
