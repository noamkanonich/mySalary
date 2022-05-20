import React, { ReactChild } from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";

interface ModalProps {
  isVisible: boolean;
  setIsVisible: () => void;
  children: ReactChild;
}


const ModalWrapper = ({ isVisible, setIsVisible, children }: ModalProps) => {
  return (
    <>
      <Modal
        isVisible={isVisible}
        backdropOpacity={0.2}
        swipeDirection={["down"]}
        onSwipeComplete={setIsVisible}
        onBackdropPress={setIsVisible}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <ModalInner>{children}</ModalInner>
      </Modal>
    </>
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
