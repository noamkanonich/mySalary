import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable, BackHandler } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { DarkBlue, Primary, White } from "../../theme/colors";
import Spacer from "../../components/spacer/Spacer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../components/buttons/Button";
import useExpanses from "../../hooks/use-expanses/useExpanses";
import uuid from "react-native-uuid";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import { IExpense } from "../../lib/data/IExpense";
import { ScrollView } from "react-native-gesture-handler";
import ExpanseItem from "./ExpanseItem";

const expansesData = [
  {
    // id: uuid.v4(),
    id: "1",
    title: "Supermarket",
    category: "Food",
    expanse: "560",
    note: "Supermaket Shufersal",
    date: new Date("20/11/21"),
  },
  {
    // id: uuid.v4(),
    id: "2",
    title: "Movie",
    category: "Pleasure",
    expanse: "120",
    note: "Went to a movie on Sunday",
    date: new Date("20/11/21"),
  },
];

interface ExpenseProps {
  expanses: IExpense[] | undefined;
  setExpanses: () => void;
}

const ExpansesScreen = ({
  expanses: initialExpanses,
  setExpanses,
}: ExpenseProps) => {
  const [expansesList, setExpansesList] = useState<IExpense[] | undefined>(
    expansesData
  );
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [newExpanse, setNewExpanse] = useState<string | number | undefined>();
  const [visible, setVisible] = useState<boolean>(false);
  const { totalExpanses, setTotalExpanses } = useExpanses();
  const navigation = useNavigation();

  useEffect(() => {
    if (!totalExpanses) {
      setTotalExpanses(0);
    }
  }, [totalExpanses]);

  const onAddExpanse = () => {
    if (!newExpanse) {
      alert("insert number/amount please");
      return;
    }
    setVisible(false);

    if (!expansesList) {
      setExpansesList([
        {
          id: title,
          title: title,
          category: category,
          expanse: newExpanse,
          note: note,
          date: new Date("20/11/21"),
        },
      ]);
    } else {
      const updatedExpanses = [
        ...expansesList,
        {
          id: title,
          title: title,
          category: category,
          expanse: newExpanse,
          note: note,
          date: new Date("20/11/21"),
        },
      ];
      setExpansesList(updatedExpanses);
      console.log(updatedExpanses);
    }

    if (!totalExpanses && newExpanse) {
      setTotalExpanses(Number(newExpanse));
      // navigation.goBack();
      return;
    } else {
      const total = Number(newExpanse) + Number(totalExpanses);
      setTotalExpanses(total);
      localStorage.setItem("totalExpanses", `${total}`);
      // navigation.goBack();
    }
  };

  const onChangeExpanses = useCallback(
    (value: string | number | undefined) => {
      setNewExpanse(Number(value));
    },
    [totalExpanses, setTotalExpanses]
  );

  return (
    <Root>
      <UpperContainer>
        <>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={28} color={"black"} />
          </Pressable>
        </>
        <Spacer direction="vertical" size="xl" />
        <Title>Add Expanse</Title>
      </UpperContainer>
      <BottomContainer>
        <CardHeader>
          <SubTitle>Add Expanse</SubTitle>
          <View />
        </CardHeader>
        <Spacer direction="vertical" size="xxl" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {expansesList &&
            expansesList.map((item) => {
              return (
                <ExpanseItem
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  expanse={item.expanse}
                  note={item.note}
                  date={item.date}
                />
              );
            })}
        </ScrollView>
        <Spacer direction="vertical" size="xs" />
        <ButtonsContainer>
          <Button
            label="Add Expanse"
            onPress={() => setVisible(true)}
            background={Primary}
            color={White}
          />
        </ButtonsContainer>
      </BottomContainer>
      <ModalWrapper
        isVisible={visible}
        setIsVisible={() => setVisible(!visible)}
      >
        <>
          <CardHeader>
            <Pressable onPress={() => setVisible(false)}>X</Pressable>
            <SubTitle>Add Expanse</SubTitle>
            <View />
          </CardHeader>
          <Spacer direction="vertical" size="xxl" />
          <View>
            <>
              <Text>Title</Text>
              <Spacer direction="vertical" size="xs" />
              <CustomInput
                placeholder="title"
                onChangeText={(text) => setTitle(text)}
              />
            </>
            <Spacer direction="vertical" size="xxl" />
            <>
              <Text>Category</Text>
              <Spacer direction="vertical" size="xs" />
              <CustomInput
                placeholder="category"
                onChangeText={(text) => setCategory(text)}
              />
            </>
            <Spacer direction="vertical" size="xxl" />
            <>
              <Text>Expanse Amount</Text>
              <Spacer direction="vertical" size="xs" />
              <CustomInput
                placeholder="amount"
                keyboardType="numeric"
                onChangeText={onChangeExpanses}
              />
            </>

            <Spacer direction="vertical" size="xxl" />
            <>
              <Text>Note</Text>
              <Spacer direction="vertical" size="xs" />
              <CustomInput
                placeholder="note"
                multiline
                numberOfLines={10}
                onChangeText={(text) => setNote(text)}
              />
            </>
          </View>
          <Spacer direction="vertical" size="xxl" />

          <Button
            label="Save"
            onPress={onAddExpanse}
            background={Primary}
            color={White}
          />
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

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

const ButtonsContainer = styled.View`
  justify-content: flex-end;
`;

const CustomInput = styled.TextInput`
  border: 1px solid red;
`;

export default ExpansesScreen;
