import { View, Text, Pressable } from "react-native";
import React, { ReactChild, useState } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";

interface ModalProps {
  isVisible?: boolean;
  setIsVisible?: () => void;
  children: ReactChild;
}

const ModalWrapper = ({ isVisible, setIsVisible, children }: ModalProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => setVisible(!visible)}
        style={{ margin: "auto", padding: 20 }}
      >
        PRESS
      </Pressable>

      <Modal
        isVisible={visible}
        backdropOpacity={0.2}
        swipeDirection={["down"]}
        onSwipeComplete={() => setVisible(!visible)}
        onBackdropPress={() => setVisible(!visible)}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <ModalInner>{children}</ModalInner>
      </Modal>
    </View>
  );
};

const ModalInner = styled.View`
  width: 100%;
  max-heigth: 300px;
  padding: 20px;
  background-color: white;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export default ModalWrapper;
