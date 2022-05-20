import { Pressable, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { DarkBlue, DarkGray, Primary, White } from "../../theme/colors";
import Spacer from "../../components/spacer/Spacer";
import Button from "../../components/buttons/Button";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Ionicons from "react-native-vector-icons/Ionicons";
import uuid from "react-native-uuid";
import { Picker } from "@react-native-picker/picker";
import {IJob as IJ} from './IJob'
interface IJob {
  id: string | number;
  jobTitle: string;
  jobPlace: string;
  yearlySalary: string;
  currency: string;
  location: string;
  startingDate: string;
}

const jobs = [
  {
    id: uuid.v4(),
    jobTitle: "Full-Stack Engineer",
    jobPlace: "Google",
    yearlySalary: "120,000",
    currency: "dollar",
    location: "Tel-Aviv, Israel",
    startingDate: new Date("20/11/21"),
  },
  {
    id: uuid.v4(),
    jobTitle: "Product Manager",
    jobPlace: "Facebook",
    yearlySalary: "160,000",
    currency: "dollar",
    location: "Los Angeles, United States",
    startingDate: new Date("20/11/21"),
  },
  {
    id: uuid.v4(),
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
  jobTitle: title,
  jobPlace,
  yearlySalary,
  currency,
  location: jobLocation,
  startingDate,
}: IJob) => {
  const [currentJobs, setCurrentJobs] = useState<IJob[] | undefined>(jobs);
  const [jobSelected, setJobSelected] = useState<IJob | undefined>(jobs[0]);
  const [editedJobId, setEditedJobId] = useState<string | undefined>();
  const [visible, setVisible] = useState(false);
  const [newCompany, setNewCompany] = useState<string>();
  const [newJobTitle, setNewJobTitle] = useState<string>();
  const [newLocation, setNewLocation] = useState<string>();
  const [newSalary, setNewSalary] = useState<string>();
  const [newCurrency, setNewCurrency] = useState<string>();

  const navigation = useNavigation();

  useEffect(() => {
    setNewCompany('');
    setNewJobTitle('')
    setNewLocation('');
    setNewSalary('');
    setNewCurrency('');
  }, [currentJobs]);

  const onSave = (id: string | undefined) => {
    const newJob = {
      id: uuid.v4(),
      jobTitle: newJobTitle,
      jobPlace: newCompany,
      yearlySalary: newSalary,
      currency: newCurrency,
      location: newLocation,
      startingDate: "20/11/21",

      // startingDate: new Date("20/11/21"),
    };

    if (!currentJobs) {
      setCurrentJobs(newJob);
    }
    setCurrentJobs((prevJobs: IJob[] | undefined) => [...prevJobs, newJob]);
    setVisible(false);
  };

  const handleEdit = (id: string) => {
    setEditedJobId(id);
    setVisible(true);
  };

  const handleDelete = (id: string | number) => {
    const updatedJobs = currentJobs?.filter((x) => x.id !== id);
    setCurrentJobs(updatedJobs);
  };

  const getEditedJob = (id: string | number) => {
    return currentJobs?.filter((x) => x.id === id)[0];
  };

  return (
    <Root>
      <UpperContainer>
        <>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={28} color={"black"} />
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
            data={currentJobs}
            renderItem={({ item }: { item: IJob }) => {
              return (
                <>
                  <JobContainer
                    key={item.id}
                    onPress={() => setJobSelected(item)}
                  >
                    <Row>
                      <JobTitle>{item.jobPlace}</JobTitle>
                      <JobButtonsContainer>
                        <Pressable onPress={() => handleEdit(item.id)}>
                          <Ionicons
                            name="create-outline"
                            size={20}
                            color={"white"}
                          />
                        </Pressable>

                        <Pressable onPress={() => handleDelete(item.id)}>
                          <Ionicons
                            name="close-outline"
                            size={24}
                            color={"white"}
                          />
                        </Pressable>
                      </JobButtonsContainer>
                    </Row>
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
      <ModalWrapper
        isVisible={visible}
        setIsVisible={() => setVisible(!visible)}
      >
        <ScrollView>
          <SubTitle>Add New Job</SubTitle>
          <Spacer direction="vertical" size="l" />

          <Text>Company</Text>
          <Spacer direction="vertical" size="xs" />
          <TextInput
            placeholder={editedJobId ? getEditedJob(editedJobId)?.jobPlace : ""}
            value={newCompany}
            onChangeText={(text) => setNewCompany(text)}
          />
          <Spacer direction="vertical" size="xl" />

          <Text>Job title</Text>
          <Spacer direction="vertical" size="xs" />
          <TextInput
            placeholder={editedJobId ? getEditedJob(editedJobId)?.jobTitle : ""}
            value={newJobTitle}
            onChangeText={(text) => setNewJobTitle(text)}
          />
          <Spacer direction="vertical" size="xl" />

          <Text>Location</Text>
          <Spacer direction="vertical" size="xs" />
          <TextInput
            placeholder={editedJobId ? getEditedJob(editedJobId)?.location : ""}
            value={newLocation}
            onChangeText={(text) => setNewLocation(text)}
          />
          <Spacer direction="vertical" size="xl" />

          <Text>Yearly Salary</Text>
          <Spacer direction="vertical" size="xs" />
          <TextInput
            placeholder={editedJobId ? getEditedJob(editedJobId)?.yearlySalary : ""}
            value={newSalary}
            onChangeText={(text) => setNewSalary(text)}
          />
          <Spacer direction="vertical" size="xl" />

          <Text>Currency</Text>
          <Spacer direction="vertical" size="xs" />
          <Picker
            selectedValue={newCurrency}
            onValueChange={(itemValue: string) => setNewCurrency(itemValue)}
            style={{
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
          <Spacer direction="vertical" size="xxl-2" />
          <Button
            label="Save"
            onPress={() => onSave(editedJobId)}
            background={Primary}
            color={White}
          />
        </ScrollView>
      </ModalWrapper>
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Primary};
`;

const TextInput = styled.TextInput`
  padding: 10px;
  border: 1px solid ${DarkGray};
  border-radius: 8px;
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

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const JobButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;

const JobDetails = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const JobTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${White};
  max-width: 60%;
`;

const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export default JobsScreen;
