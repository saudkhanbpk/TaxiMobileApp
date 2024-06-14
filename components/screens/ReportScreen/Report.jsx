import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,Modal,TextInput,FlatList,ImageBackground } from 'react-native'
import img from "../../../assets/Images/bg2.jpg";
import img1 from "../../../assets/Images/wLogo.png";
import img2 from "../../../assets/Images/Addreport.png";
import backIcon from "../../../assets/Images/backIcon.png"
import {React,useState} from 'react';
import Button from '../../Button/Button';
import ReportModal from '../../Addreport_Modal/ReportModal';

const Report = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [cash, setCash] = useState('');
  const [card, setCard] = useState('');
  const [extraBills, setExtraBills] = useState('');
  const [reports, setReports] = useState([]); 

  const handleAddReport = () => {
    setModalVisible(true);
  };

  const handleSubmit = () => {
    const newReport = { date, day, cash, card, extraBills };
    setReports([...reports, newReport]);
    setModalVisible(false);
    // Clear the inputs
    setDate('');
    setDay('');
    setCash('');
    setCard('');
    setExtraBills('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.reportItem}>
      <Text style={styles.listtext}>Date: {item.date}</Text>
      <Text style={styles.listtext}>Day: {item.day}</Text>
      <Text style={styles.listtext}>Cash: {item.cash}</Text>
      <Text style={styles.listtext}>Card: {item.card}</Text>
      <Text style={styles.listtext}>Extra Bills: {item.extraBills}</Text>
    </View>
  );

  
  return (
    <ImageBackground source={img} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
    <View style={{backgroundColor:"yellow",paddingVertical:20}}>
    <View style={{marginLeft:20}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image source={backIcon} style={styles.backicon} />
    </TouchableOpacity>
    </View>
    <View style={styles.addreport}>
    <Text style={{fontSize:35,fontFamily:"Roboto-Bold",color:"#000"}}>Add Report</Text>
    <Image source={img2} />
    </View>
    </View>

    <View style={{alignItems:"center"}}>
      <Image source={img1}></Image>
    </View>

<View style={{alignItems:"center",marginTop:40}}>
<TouchableOpacity onPress={handleAddReport}  >
    <View style={styles.todayReport}>
      <Text style={{fontSize:35,fontFamily:"Roboto-Bold",color:"#000"}}>Add Report For Today</Text>
      <Image source={img2}></Image>
    </View>
    </TouchableOpacity>
    </View>

      <ReportModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={handleSubmit}
          date={date}
          setDate={setDate}
          day={day}
          setDay={setDay}
          cash={cash}
          setCash={setCash}
          card={card}
          setCard={setCard}
          extraBills={extraBills}
          setExtraBills={setExtraBills}
        />
        <FlatList
          data={reports}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.reportsList}
        />
 
  
      
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backgroundImage: {
    flex: 1, 
  },
  
  addreport:{
    alignItems:"center",
    flexDirection:"row",
    
    alignItems:"center",
    justifyContent:"center",
    gap:20,
    
    

  },
  todayReport:{
    alignItems:"center",
    flexDirection:"column",
    gap:30,
    backgroundColor:"#fff",
    width:"80%",
    borderRadius:50,
    padding:20

  },
  reportsList: {
    width: '100%',
    marginTop: 20,
  },
  reportItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  listtext:{
    color:"black",
    fontSize:20
  },
  backicon:{
    width:18
  }



});

export default Report