import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,SafeAreaView,Image,ImageBackground ,StyleSheet,TouchableOpacity} from 'react-native'
import Home from '../HomeScreen/Home';
import Report from '../ReportScreen/Report';
import Profile from '../ProfileScreen/Profile';
import Calendar from '../CalendarScreen/Calendar';
import Graph from '../GraphScreen/Graph';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TabNavigation=()=> {
  return (
    <Tab.Navigator
        screenOptions={() => ({
          tabBarLabelStyle: {
            fontSize: 22,
            fontWeight:"700",
            color:"white"
          },
         tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            position: 'absolute',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            elevation: 5,
            backgroundColor: 'black',
            height: 80,
            paddingBottom:10,
            paddingTop:10
          },
       //   tabBarShowLabel: false,
          headerShown: false,
        })}>


<Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                <Entypo
                  name="open-book"
                  size={30}
                  color={focused ? '#9594e5' : 'white'}
                />
                
              </View>
            ),
          }}
        /> 
         <Tab.Screen
          name="Report"
          component={Report}
          options={{
           
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                <Entypo
                  name="bar-graph"
                  size={30}
                  color={focused ? '#9594e5' : 'white'}
                />
              </View>
            ),
          }}
        /> 
       <Tab.Screen
          name="Graph"
          component={Graph}
          options={{
            tabBarLabelStyle:{
              fontSize:22,
              fontWeight:'700',
              color:"white"
              
            },
            tabBarItemStyle: {
            //  borderWidth:1,
            //  borderColor:"white",
            //   borderRadius:30,
            //   position:"relative",
             
           
             
            //   backgroundColor:"black"
               
            },
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                <Icon
                  name="home"
                  size={33}
                  color={focused ? '#9594e5' : 'white'}
                />
              </View>
            ),
          }}
        />

         {/* <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                <Icon
                  name="calendar"
                  size={30}
                  color={focused ? '#9594e5' : 'white'}
                />
                
              </View>
            ),
          }}
        /> */}
          <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                <Icon
                  name="user"
                  size={30}
                  color={focused ? '#9594e5' : 'white'}
                />
                
              </View>
            ),
          }}
        />
    


    
    </Tab.Navigator>
  );
}
export default TabNavigation;