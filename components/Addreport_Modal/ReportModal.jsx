// import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,Modal,TextInput } from 'react-native'
// import {React,useState} from 'react'
// import Button from '../Button/Button';

// const ReportModal = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [date, setDate] = useState('');
//     const [day, setDay] = useState('');
//     const [cash, setCash] = useState('');
//     const [card, setCard] = useState('');
//     const [extraBills, setExtraBills] = useState('');
  
  
//     const handleSubmit = () => {
//       // Handle the submission of the form
//       console.log({ date, day, cash, card, extraBills });
//       setModalVisible(false);
//     };
  
    
//   return (
//     <View style={{flex:1}}>
      
//       <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalView}>
//               <TouchableOpacity
//                 style={styles.closeButton}
//                 onPress={() => setModalVisible(false)}
//               >
//                 <Text style={styles.closeButtonText}>X</Text>
//               </TouchableOpacity>
//           <Text style={styles.modalText}>Enter Report Details</Text>
//           <TextInput
//           style={styles.input}
//             placeholder="Date"
//             value={date}
//             onChangeText={setDate}
//           />
//           <TextInput
//           style={styles.input}
//             placeholder="Day"
//             value={day}
//             onChangeText={setDay}
//           />
//           <TextInput
//           style={styles.input}
//             placeholder="Cash"
//             value={cash}
//             onChangeText={setCash}
//           />
//           <TextInput
//           style={styles.input}
//             placeholder="Card"
//             value={card}
//             onChangeText={setCard}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Extra Bills"
//             value={extraBills}
//             onChangeText={setExtraBills}
//           />
//           <Button title="Submit" onPress={handleSubmit} />
          
//         </View>
//         </View>
//       </Modal>
 
  
      
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//   },
//   addreport:{
//     alignItems:"center",
//     flexDirection:"row",
//     borderWidth:2,
//     alignItems:"center",
//     justifyContent:"center",
//     gap:20,
//     backgroundColor:"skyblue",
    

//   },
//   todayReport:{
//     alignItems:"center",
//     flexDirection:"column",
//     gap:30,
//     backgroundColor:"skyblue",
//     width:"80%",
//     borderRadius:50,
//     padding:20

//   },

//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalView: {
//     width: '80%',
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   closeButton: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#ff5c5c',
//     borderRadius: 15,
//     padding: 10,
//     marginBottom: 10,
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   modalText: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   submitButton: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
 

// });

// export default ReportModal

import React from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Button from '../Button/Button';

const ReportModal = ({ visible, onClose, onSubmit, date, setDate, day, setDay, cash, setCash, card, setCard, extraBills, setExtraBills }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalText}>Enter Report Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
            
          />
          <TextInput
            style={styles.input}
            placeholder="Day"
            value={day}
            onChangeText={setDay}
          />
          <TextInput
            style={styles.input}
            placeholder="Cash"
            value={cash}
            onChangeText={setCash}
          />
          <TextInput
            style={styles.input}
            placeholder="Card"
            value={card}
            onChangeText={setCard}
          />
          <TextInput
            style={styles.input}
            placeholder="Extra Bills"
            value={extraBills}
            onChangeText={setExtraBills}
          />
          <Button title="Submit" onPress={onSubmit} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#ff5c5c',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
    color:"black",
    fontFamily:"Roboto-Bold"
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    color:"black"
  },
});

export default ReportModal;
