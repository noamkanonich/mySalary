import React, { useState } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import Spacer from "../../components/spacer/Spacer";
import { DarkBlue, Primary } from "../../theme/colors";

interface IExpanseItem {
  title: string;
  category: string;
  expanse: string | number;
  note: string;
  date: Date;
}

const ExpanseItem = ({ title, category, expanse, note }: IExpanseItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Root>
      <ItemContainer>
        <CustomText>
          {title} - {expanse} sa sd
        </CustomText>
        <CustomText>{category}</CustomText>
        <Spacer direction="vertical" size="xl" />
        {isOpen && (
          <NoteContainer>
            <CustomText>{note}</CustomText>
            <Spacer direction="vertical" size="xl" />
          </NoteContainer>
        )}
        <Pressable onPress={() => setIsOpen(!isOpen)}>
          <CustomText>{isOpen ? "Close" : "Read More"}</CustomText>
        </Pressable>
      </ItemContainer>
      <Spacer direction="vertical" size="xl" />
    </Root>
  );
};

const Root = styled.View`
  width: 100%;
`;

const ItemContainer = styled.View`
  border: 3px solid ${Primary};
  border-radius: 8px;
  padding: 12px;
`;

const CustomText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${DarkBlue};
`;

const NoteContainer = styled.View``;

export default ExpanseItem;
