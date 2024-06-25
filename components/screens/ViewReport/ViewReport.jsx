import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ViewReport = () => {
    const [selected, setSelected] = useState('');
    const [event, setEvent] = useState('');
    const [events, setEvents] = useState([]);

    const addEvent = () => {
        if (event.trim() && selected) {
            setEvents([...events, { id: Math.random().toString(), date: selected, title: event }]);
            setEvent('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.calendersection}>
                <Calendar 
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
            </View>
            <View style={styles.addevent}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Event"
                    value={event}
                    onChangeText={setEvent}
                    
                />
               <View >
        <TouchableOpacity onPress={addEvent} style={{backgroundColor:"skyblue",padding:15,borderRadius:10}}>
            <Text style={{fontSize:16,fontWeight:"700"}} >Add Event</Text>
        </TouchableOpacity>
     </View>
            </View>
            <FlatList
                data={events}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.eventItem}>
                        <Text style={styles.eventText}>{item.date} : {item.title}</Text>
                    </View>
                )}
                style={styles.list}
            />
        </SafeAreaView>
    );
};


const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:40
    },
    calendersection:{
        padding:20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        width:'70%',
      backgroundColor:"#fff",
        borderRadius: 10,
      },
      list: {
        marginTop: 20,
      },
      eventItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      addevent:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20
      },
      eventText:{
        color:"#000",
        fontFamily:"Roboto-Medium",
    fontSize:16
      }
         


})

export default ViewReport