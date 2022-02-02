import React, {useState} from 'react';
import {View,Text,Pressable, Modal, StyleSheet, Image} from 'react-native';
import styled from "styled-components/native";

const CustomModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Hello World!</Text>
              <Pressable
                style={{padding: 20,backgroundColor:'red'}}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
                onPress={() => setModalVisible(true)}
                style={{
             height:80,
             width:80,
             backgroundColor:'#00192d',
             borderRadius:100,
             alignSelf:'center',
             alignItems:'center',
             justifyContent:'center',
           }}
           >
             <Image 
             style={{height:50, width:50, borderRadius:100}}
             source={require('../../../assets/images/add.png')} />
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {  
      justifyContent: "flex-start",
      alignSelf: "center",
      marginTop: 22,
      zIndex: 10,
      position: 'absolute',
      bottom:0,
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });

  
export default CustomModal;